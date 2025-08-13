import SeoHead from "@/components/SeoHead";
import FAQ from "@/components/FAQ";
import faqData from "@/data/faq-home.json";
import { motion } from 'framer-motion';

function OrbsBG() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {/* Large primary orb - partially off-screen */}
      <div className="absolute -left-32 top-16 w-[600px] h-[600px] rounded-full blur-3xl animate-pulse"
           style={{ 
             background: 'radial-gradient(closest-side, rgba(72,87,255,0.40), rgba(72,87,255,0) 70%)',
             animation: 'float 8s ease-in-out infinite'
           }} />
      
      {/* Secondary accent orb */}
      <div className="absolute right-[-100px] -top-16 w-[400px] h-[400px] rounded-full blur-3xl animate-pulse"
           style={{ 
             background: 'radial-gradient(closest-side, rgba(255,77,166,0.35), rgba(255,77,166,0) 70%)',
             animation: 'float 6s ease-in-out infinite reverse'
           }} />
      
      {/* Small floating elements */}
      <div className="absolute left-1/4 top-1/3 w-24 h-24 rounded-full blur-xl opacity-30"
           style={{ 
             background: 'radial-gradient(closest-side, rgba(72,87,255,0.25), transparent)',
             animation: 'float 10s ease-in-out infinite'
           }} />
      
      <div className="absolute right-1/4 bottom-1/4 w-16 h-16 rounded-full blur-lg opacity-20"
           style={{ 
             background: 'radial-gradient(closest-side, rgba(255,77,166,0.20), transparent)',
             animation: 'float 12s ease-in-out infinite reverse'
           }} />
    </div>
  );
}

export default function Home() {
  const schemaOrg = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Vinvira",
    "url": "https://vinvira.se",
    "logo": "https://vinvira.se/logo.png",
    "contactPoint": [{
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "info@vinvira.se",
      "availableLanguage": ["Swedish"]
    }]
  };

  return (
    <>
      <SeoHead
        title="Vinvira – Smidiga och prisvärda digitala tjänster för småföretagare"
        description="Snabba hemsidor utan månadskostnad, SEO från 500 kr/mån och administrativ support. Boka ett gratis startmöte idag."
        canonical="https://vinvira.se/"
        schemaJson={schemaOrg}
      />

      {/* HERO */}
      <section className="relative bg-vin-bgDark text-white min-h-screen flex items-center">
        <OrbsBG />
        <div className="max-w-6xl mx-auto px-6 py-24 grid gap-12 md:grid-cols-2 items-center">
          <motion.div 
            initial={{opacity:0, y:20}} 
            animate={{opacity:1, y:0}} 
            transition={{duration:0.8, ease:"easeOut"}}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-[1.05]">
              Smidiga och prisvärda digitala tjänster för småföretagare
            </h1>
            <p className="text-vin-haze/90 md:text-lg leading-relaxed">
              Snabb hemsida, enkel SEO och flexibel adminhjälp – utan krångel och till rätt pris.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#contact" className="inline-flex items-center justify-center rounded-full px-8 py-4 bg-gradient-to-r from-vin-primary to-vin-accent text-white shadow-glow hover:shadow-glowPink hover:scale-105 transition-all duration-200 ease-in-out font-medium">
                Boka gratis möte
              </a>
              <a href="/webb" className="inline-flex items-center justify-center rounded-full px-6 py-4 bg-white/10 backdrop-blur border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-200 ease-in-out">
                Se hur det funkar
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{opacity:0, scale:0.95}} 
            animate={{opacity:1, scale:1}} 
            transition={{duration:0.8, delay:0.2, ease:"easeOut"}}
            className="relative aspect-[4/3] rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/15 shadow-2xl overflow-hidden"
          >
            <div className="absolute inset-0" style={{ 
              background: 'radial-gradient(1200px 600px at 80% -20%, rgba(255,77,166,0.25), transparent), radial-gradient(900px 400px at -10% 110%, rgba(72,87,255,0.25), transparent)' 
            }} />
            {/* Placeholder for hero illustration */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white/60 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-vin-primary/30 to-vin-accent/30 border border-white/20"></div>
                <p className="text-sm">Hero Visual</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-6xl mx-auto px-6 py-20 bg-gradient-to-b from-white to-vin-bgLight">
        <div className="grid gap-10 md:grid-cols-3">
          <motion.div 
            initial={{opacity:0, y:20}} 
            whileInView={{opacity:1, y:0}} 
            transition={{duration:0.6}}
            className="group rounded-2xl p-[1px] bg-gradient-to-r from-vin-primary/40 to-vin-accent/40 hover:from-vin-primary/60 hover:to-vin-accent/60 transition-all duration-300"
          >
            <div className="rounded-2xl bg-white group-hover:bg-white/90 transition-all duration-300 shadow-soft p-8 hover:shadow-glow">
              <h3 className="text-xl font-bold mb-3">Webb & hemsida</h3>
              <p className="text-gray-600 mb-4">Snabba, stabila, enkla — utan månadskostnad.</p>
              <a className="inline-block text-vin-primary underline hover:text-vin-accent transition-colors" href="/webb">Läs mer</a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{opacity:0, y:20}} 
            whileInView={{opacity:1, y:0}} 
            transition={{duration:0.6, delay:0.1}}
            className="group rounded-2xl p-[1px] bg-gradient-to-r from-vin-primary/40 to-vin-accent/40 hover:from-vin-primary/60 hover:to-vin-accent/60 transition-all duration-300"
          >
            <div className="rounded-2xl bg-white group-hover:bg-white/90 transition-all duration-300 shadow-soft p-8 hover:shadow-glow">
              <h3 className="text-xl font-bold mb-3">SEO</h3>
              <p className="text-gray-600 mb-4">Engångsfix eller prenumeration från 500 kr/mån. Tydliga rapporter och råd.</p>
              <a className="inline-block text-vin-primary underline hover:text-vin-accent transition-colors" href="/seo">Läs mer</a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{opacity:0, y:20}} 
            whileInView={{opacity:1, y:0}} 
            transition={{duration:0.6, delay:0.2}}
            className="group rounded-2xl p-[1px] bg-gradient-to-r from-vin-primary/40 to-vin-accent/40 hover:from-vin-primary/60 hover:to-vin-accent/60 transition-all duration-300"
          >
            <div className="rounded-2xl bg-white group-hover:bg-white/90 transition-all duration-300 shadow-soft p-8 hover:shadow-glow">
              <h3 className="text-xl font-bold mb-3">Administrativ support</h3>
              <p className="text-gray-600 mb-4">Mötesbokning, utskick, enklare design och textgranskning. Snabb hjälp.</p>
              <a className="inline-block text-vin-primary underline hover:text-vin-accent transition-colors" href="/admin">Läs mer</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 py-20 bg-white">
        <motion.div
          initial={{opacity:0, y:20}}
          whileInView={{opacity:1, y:0}}
          transition={{duration:0.6}}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Vanliga frågor</h2>
          <FAQ items={[
            { q: "Vad gör Vinvira?", a: "Vi hjälper småföretagare och nyföretagare i Sverige med snabba hemsidor utan månadskostnader, enkel SEO från 500 kr/mån och flexibel administrativ support." },
            { q: "Hur snabbt kan jag få en hemsida?", a: "De enklaste sidorna är ofta klara på under en vecka, beroende på omfattning." }
          ]} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
        </motion.div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="px-6 py-20 bg-gradient-to-b from-vin-bgLight to-white text-center">
        <motion.div
          initial={{opacity:0, y:20}}
          whileInView={{opacity:1, y:0}}
          transition={{duration:0.6}}
        >
          <h2 className="text-3xl font-bold mb-4">Redo att växa online?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">Fyll i formuläret eller mejla <a className="underline hover:text-vin-primary transition-colors" href="mailto:info@vinvira.se">info@vinvira.se</a>.</p>
          <a href="mailto:info@vinvira.se" className="inline-flex items-center justify-center rounded-full px-8 py-4 bg-gradient-to-r from-vin-primary to-vin-accent text-white shadow-glow hover:shadow-glowPink hover:scale-105 transition-all duration-200 ease-in-out font-medium">
            Kontakta oss
          </a>
        </motion.div>
      </section>
    </>
  );
}
