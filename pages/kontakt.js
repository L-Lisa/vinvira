import SeoHead from "@/components/SeoHead";
import ContactForm from "@/components/ContactForm";
import { motion } from 'framer-motion';
import StickyCTA from "@/components/StickyCTA";

export default function Kontakt() {
  return (
    <>
      <SeoHead
        title="Kontakta oss | Vinvira"
        description="Kontakta Vinvira för hjälp med din hemsida eller SEO. Boka ett gratis möte och låt oss diskutera hur vi kan hjälpa ditt företag att växa online."
        canonical="https://vinvira.se/kontakt"
        keywords="kontakta webbyrå, hemsida konsult, SEO hjälp, gratis möte"
      />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-gradient-to-br from-vin-neutral-50 via-vin-primary-50 to-vin-secondary-50 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(139,92,246,0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight sm:leading-tight md:leading-snug lg:leading-snug mb-6"
            >
              <span className="text-vin-neutral-900">Låt oss skapa</span>
              <span className="block bg-gradient-to-r from-vin-primary-600 to-vin-secondary-600 bg-clip-text text-transparent">
                något fantastiskt
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl text-vin-neutral-700 leading-relaxed max-w-2xl mx-auto"
            >
              Berätta om ditt projekt så hjälper vi dig att ta det från idé till verklighet. 
              Vi erbjuder gratis konsultationer för att säkerställa att vi förstår dina behov.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl font-bold text-vin-neutral-900 mb-4"
            >
              Skicka ett meddelande
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-vin-neutral-700 text-lg max-w-2xl mx-auto"
            >
              Fyll i formuläret nedan så återkommer vi inom 24 timmar
            </motion.p>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 sm:py-20 bg-vin-neutral-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-vin-primary-100 to-vin-primary-200 rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 text-vin-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-vin-neutral-900 mb-2">Email</h3>
              <p className="text-vin-neutral-700">hej@vinvira.se</p>
            </motion.div>

            {/* Response Time */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-vin-secondary-100 to-vin-secondary-200 rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 text-vin-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-vin-neutral-900 mb-2">Svarstid</h3>
              <p className="text-vin-neutral-700">Inom 24 timmar</p>
            </motion.div>

            {/* Free Consultation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-vin-accent-100 to-vin-accent-200 rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 text-vin-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-vin-neutral-900 mb-2">Gratis konsultation</h3>
              <p className="text-vin-neutral-700">Ingen bindning</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sticky CTA */}
      <StickyCTA />
    </>
  );
}
