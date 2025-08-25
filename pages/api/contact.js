import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Endast tillåt POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { namn, email, foretag, telefon, tjänster, meddelande } = req.body;

    console.log('=== CONTACT FORM SUBMISSION START ===');
    console.log('Form data received:', { namn, email, foretag, telefon, tjänster, meddelande });

    // Debug: Logga miljövariabler
    console.log('Environment variables:', {
      EMAIL_USER: process.env.EMAIL_USER,
      EMAIL_PASS: process.env.EMAIL_PASS ? '***SET***' : 'NOT SET'
    });

    // Validera obligatoriska fält
    if (!namn || !email || !foretag) {
      return res.status(400).json({ 
        message: 'Namn, email och företag är obligatoriska fält' 
      });
    }

    // Validera att miljövariabler är satta
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Missing environment variables');
      return res.status(500).json({ 
        success: false, 
        message: 'Server-konfiguration saknas' 
      });
    }

    // Skapa email-innehåll
    const emailBody = `
Ny kontaktförfrågan från Vinvira.se

Namn: ${namn}
Email: ${email}
Företag: ${foretag}
Telefon: ${telefon || 'Ej angivet'}
Tjänster: ${tjänster && tjänster.length > 0 ? tjänster.join(', ') : 'Ej valt'}
Meddelande: ${meddelande || 'Ej angivet'}

Skickat: ${new Date().toLocaleString('sv-SE')}
    `.trim();

    console.log('Creating Nodemailer transporter...');
    
    // Skapa transporter (använd Gmail SMTP)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // hej@vinvira.se
        pass: process.env.EMAIL_PASS  // App-specifikt lösenord
      }
    });
    
    console.log('Transporter created successfully');

    console.log('Sending email to hej@vinvira.se...');
    
    // Skicka email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'hej@vinvira.se',
      subject: `Kontaktfråga från ${namn} - ${foretag}`,
      text: emailBody,
      html: emailBody.replace(/\n/g, '<br>')
    });
    
    console.log('Email sent successfully to hej@vinvira.se');

    // Skicka bekräftelse till användaren
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Tack för din kontaktförfråga - Vinvira',
      text: `
Hej ${namn}!

Tack för att du kontaktade Vinvira. Vi har tagit emot din förfråga och återkommer inom 24 timmar.

Din förfråga:
Företag: ${foretag}
Tjänster: ${tjänster && tjänster.length > 0 ? tjänster.join(', ') : 'Ej valt'}
Meddelande: ${meddelande || 'Ej angivet'}

Med vänliga hälsningar,
Teamet på Vinvira
hej@vinvira.se
      `.trim(),
      html: `
        <h2>Hej ${namn}!</h2>
        <p>Tack för att du kontaktade Vinvira. Vi har tagit emot din förfråga och återkommer inom 24 timmar.</p>
        <h3>Din förfråga:</h3>
        <p><strong>Företag:</strong> ${foretag}</p>
        <p><strong>Tjänster:</strong> ${tjänster && tjänster.length > 0 ? tjänster.join(', ') : 'Ej valt'}</p>
        <p><strong>Meddelande:</strong> ${meddelande || 'Ej angivet'}</p>
        <p>Med vänliga hälsningar,<br>Teamet på Vinvira<br><a href="mailto:hej@vinvira.se">hej@vinvira.se</a></p>
      `
    });

    res.status(200).json({ 
      success: true, 
      message: 'Formuläret skickades framgångsrikt' 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Ett fel uppstod vid skickande av formuläret' 
    });
  }
}
