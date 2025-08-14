import SeoHead from "@/components/SeoHead";
import FAQ from "@/components/FAQ";
import faqData from "@/data/faq-admin.json";
import { motion } from 'framer-motion';
import StickyCTA from "@/components/StickyCTA";

function OrbsBG() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10" aria-hidden="true">
      {/* Accent orb */}
      <div className="absolute left-1/3 top-1/4 w-44 h-44 rounded-full blur-2xl opacity-30"
           style={{ 
             background: 'radial-gradient(closest-side, rgba(239,68,68,0.25), transparent)',
             animation: 'float 8s ease-in-out infinite'
           }} />
      
      {/* Highlight orb */}
      <div className="absolute right-1/3 bottom-1/4 w-36 h-36 rounded-full blur-xl opacity-25"
           style={{ 
             background: 'radial-gradient(closest-side, rgba(14,165,233,0.20), transparent)',
             animation: 'float 10s ease-in-out infinite reverse'
           }} />
    </div>
  );
}

export default function Admin() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Administrativ support",
    "provider": { "@type": "Organization", "name": "Vinvira", "url": "https://vinvira.se" },
    "description": "Mötesbokning, utskick, enklare design och textgranskning för småföretagare."
  };

  return (
    <>
      <SeoHead
        title="Administrativ support för småföretag – Vinvira"
        description="Praktisk administrativ assistans: mötesbokning, utskick, enklare design och textgranskning. Snabb hjälp, pris per uppdrag."
        canonical="https://vinvira.se/admin"
        schemaJson={serviceSchema}
      />
      
      {/* HERO SECTION */}
      <section className="relative px-4 sm:px-6 py-16 sm:py-20 bg-gradient-to-b from-vin-neutral-50 to-white overflow-hidden">
        <OrbsBG />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h1 
            initial={{opacity:0, y:20}} 
            animate={{opacity:1, y:0}} 
            transition={{duration:0.6}}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-vin-neutral-900"
          >
            Administrativ support – hjälp när du behöver det
          </motion.h1>
          <motion.p 
            initial={{opacity:0, y:20}} 
            animate={{opacity:1, y:0}} 
            transition={{duration:0.6, delay:0.1}}
            className="text-vin-neutral-700 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto"
          >
            Vi avlastar dig med små men viktiga uppgifter: mötesbokning, utskick, enklare design och textgranskning. Ofta kan vi börja inom 24 timmar. Pris sätts per uppdrag.
          </motion.p>
        </div>
      </section>

      {/* MAIN CONTENT SECTION */}
      <section className="px-4 sm:px-6 py-16 sm:py-20 max-w-4xl mx-auto bg-white">
        <motion.div
          initial={{opacity:0, y:20}}
          whileInView={{opacity:1, y:0}}
          transition={{duration:0.6}}
          className="space-y-12"
        >
          {/* Services Grid */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-vin-neutral-900 text-center">Vad kan vi hjälpa dig med?</h2>
            <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
              <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-vin-primary-50 to-vin-primary-100 border border-vin-primary-200">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-vin-primary-500 to-vin-primary-600 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-vin-neutral-900">Mötesbokning</h3>
                <p className="text-vin-neutral-700 mb-4">Vi hanterar all kommunikation och bokning av möten med kunder, leverantörer och partners.</p>
                <ul className="text-sm text-vin-neutral-600 space-y-1">
                  <li>• Kundmöten</li>
                  <li>• Leverantörsmöten</li>
                  <li>• Kalenderhantering</li>
                  <li>• Uppföljning</li>
                </ul>
              </div>
              
              <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-vin-secondary-50 to-vin-secondary-100 border border-vin-secondary-200">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-vin-secondary-500 to-vin-secondary-600 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-vin-neutral-900">Utskick & kommunikation</h3>
                <p className="text-vin-neutral-700 mb-4">Professionella utskick, nyhetsbrev och kundkommunikation som stärker ditt varumärke.</p>
                <ul className="text-sm text-vin-neutral-600 space-y-1">
                  <li>• Nyhetsbrev</li>
                  <li>• Kundutskick</li>
                  <li>• Marknadsföringsmaterial</li>
                  <li>• Sociala medier</li>
                </ul>
              </div>
              
              <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-vin-accent-50 to-vin-accent-100 border border-vin-accent-200">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-vin-accent-500 to-vin-accent-600 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-vin-neutral-900">Design & layout</h3>
                <p className="text-vin-neutral-700 mb-4">Enkla men effektiva designlösningar för presentationer, broschyrer och digitalt material.</p>
                <ul className="text-sm text-vin-neutral-600 space-y-1">
                  <li>• Presentationer</li>
                  <li>• Broschyrer</li>
                  <li>• Sociala medier</li>
                  <li>• Webbmaterial</li>
                </ul>
              </div>
              
              <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-vin-primary-50 to-vin-secondary-50 border border-vin-primary-200">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-vin-primary-500 to-vin-secondary-500 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-vin-neutral-900">Textgranskning</h3>
                <p className="text-vin-neutral-700 mb-4">Professionell granskning av texter, webbinnehåll och marknadsföringsmaterial.</p>
                <ul className="text-sm text-vin-neutral-600 space-y-1">
                  <li>• Grammatik & stavning</li>
                  <li>• Innehållsgranskning</li>
                  <li>• SEO-optimering</li>
                  <li>• Konsistens</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Process Section */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-vin-neutral-50 to-vin-accent-50 border border-vin-neutral-200">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-vin-neutral-900">Så enkelt är det</h2>
            <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-vin-primary-500 to-vin-secondary-500 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h4 className="font-semibold mb-2 text-vin-neutral-900">Kontakta oss</h4>
                <p className="text-sm text-vin-neutral-600">Beskriv vad du behöver hjälp med</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-vin-secondary-500 to-vin-accent-500 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h4 className="font-semibold mb-2 text-vin-neutral-900">Snabb offert</h4>
                <p className="text-sm text-vin-neutral-600">Vi ger dig en prisuppskattning</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-vin-accent-500 to-vin-primary-500 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h4 className="font-semibold mb-2 text-vin-neutral-900">Vi börjar</h4>
                <p className="text-sm text-vin-neutral-600">Ofta kan vi starta inom 24h</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center pt-8">
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center rounded-full px-8 py-4 bg-gradient-to-r from-vin-primary-600 to-vin-secondary-600 text-white font-semibold shadow-accessible hover:shadow-accessible-lg hover:scale-105 transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-vin-primary-300"
            >
              Boka gratis möte
            </a>
          </div>
        </motion.div>
      </section>

      {/* FAQ SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-20 bg-vin-neutral-50">
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2 
            initial={{opacity:0, y:20}} 
            whileInView={{opacity:1, y:0}} 
            transition={{duration:0.6}}
            className="text-3xl sm:text-4xl font-bold text-vin-neutral-900 mb-4"
          >
            Vanliga frågor
          </motion.h2>
          <motion.p 
            initial={{opacity:0, y:20}} 
            whileInView={{opacity:1, y:0}} 
            transition={{duration:0.6, delay:0.1}}
            className="text-vin-neutral-700 text-base sm:text-lg max-w-2xl mx-auto"
          >
            Svar på de vanligaste frågorna om vår administrativa support
          </motion.p>
        </div>
        
        <FAQ data={faqData} />
      </section>

      {/* Sticky CTA */}
      <StickyCTA />
    </>
  );
}
