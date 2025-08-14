import SeoHead from "@/components/SeoHead";
import FAQ from "@/components/FAQ";
import faqData from "@/data/faq-seo.json";
import { motion } from 'framer-motion';
import StickyCTA from "@/components/StickyCTA";

function OrbsBG() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10" aria-hidden="true">
      {/* Highlight orb */}
      <div className="absolute left-1/3 top-1/3 w-40 h-40 rounded-full blur-2xl opacity-30"
           style={{ 
             background: 'radial-gradient(closest-side, rgba(14,165,233,0.25), transparent)',
             animation: 'float 10s ease-in-out infinite'
           }} />
      
      {/* Primary orb */}
      <div className="absolute right-1/3 bottom-1/3 w-36 h-36 rounded-full blur-xl opacity-25"
           style={{ 
             background: 'radial-gradient(closest-side, rgba(139,92,246,0.20), transparent)',
             animation: 'float 8s ease-in-out infinite reverse'
           }} />
    </div>
  );
}

export default function SEOPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "SEO",
    "provider": { "@type": "Organization", "name": "Vinvira", "url": "https://vinvira.se" },
    "description": "Enkel och prisvärd SEO för småföretagare. Engångsfix eller prenumeration från 500 kr/mån."
  };

  return (
    <>
      <SeoHead
        title="SEO för småföretagare – från 500 kr/mån | Vinvira"
        description="Engångsfix eller prenumeration från 500 kr/mån. Tydliga rapporter, konkreta råd och stöd som hjälper dig skapa bra resultat."
        canonical="https://vinvira.se/seo"
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
            SEO för småföretagare – smart, enkelt och prisvärt
          </motion.h1>
          <motion.p 
            initial={{opacity:0, y:20}} 
            animate={{opacity:1, y:0}} 
            transition={{duration:0.6, delay:0.1}}
            className="text-vin-neutral-700 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto"
          >
            Vi gör SEO begripligt och hanterbart. Du kan välja en teknisk engångsfix eller en prisvärd prenumeration med månadsrapport och konkreta uppgifter att genomföra.
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
          {/* Options Section */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-vin-neutral-900">Våra alternativ</h2>
            <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
              <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-vin-primary-50 to-vin-primary-100 border border-vin-primary-200">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-vin-primary-500 to-vin-primary-600 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-vin-neutral-900">Engångsfix</h3>
                <p className="text-vin-neutral-700 mb-4">Teknisk optimering: meta-taggar, bilder, interna länkar och laddtid.</p>
                <ul className="text-sm text-vin-neutral-600 space-y-1">
                  <li>• Meta-taggar optimering</li>
                  <li>• Bildoptimering</li>
                  <li>• Interna länkar</li>
                  <li>• Laddtid förbättringar</li>
                </ul>
              </div>
              
              <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-vin-secondary-50 to-vin-secondary-100 border border-vin-secondary-200">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-vin-secondary-500 to-vin-secondary-600 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-vin-neutral-900">Prenumeration</h3>
                <p className="text-vin-neutral-700 mb-4">Från 500 kr/mån med löpande uppdateringar och månadsrapporter.</p>
                <ul className="text-sm text-vin-neutral-600 space-y-1">
                  <li>• Löpande uppdateringar</li>
                  <li>• Sökordsarbete</li>
                  <li>• Månadsrapporter</li>
                  <li>• Strategisk rådgivning</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Comparison Box */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-vin-accent-50 to-vin-primary-50 border border-vin-accent-200">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-vin-accent-500 to-vin-primary-500 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-vin-neutral-900">Betalar du 3000 kr/mån för SEO idag?</h3>
                <p className="text-vin-neutral-700">Låt oss jämföra — ofta kan vi leverera samma eller bättre värde för en tredjedel av priset.</p>
              </div>
            </div>
          </div>

          {/* Monthly Report Section */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-vin-neutral-900">Vad innehåller månadsrapporten?</h2>
            <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
              <div className="p-4 sm:p-6 rounded-2xl bg-white border border-vin-neutral-200">
                <div className="w-10 h-10 rounded-xl bg-vin-primary-100 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-vin-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h4 className="font-semibold mb-2 text-vin-neutral-900">Rankingförändringar</h4>
                <p className="text-sm text-vin-neutral-600">För prioriterade sökord</p>
              </div>
              
              <div className="p-4 sm:p-6 rounded-2xl bg-white border border-vin-neutral-200">
                <div className="w-10 h-10 rounded-xl bg-vin-secondary-100 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-vin-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h4 className="font-semibold mb-2 text-vin-neutral-900">Trafik & beteende</h4>
                <p className="text-sm text-vin-neutral-600">Detaljerad statistik</p>
              </div>
              
              <div className="p-4 sm:p-6 rounded-2xl bg-white border border-vin-accent-200">
                <div className="w-10 h-10 rounded-xl bg-vin-accent-100 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-vin-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h4 className="font-semibold mb-2 text-vin-neutral-900">Förbättringsförslag</h4>
                <p className="text-sm text-vin-neutral-600">Konkreta åtgärder</p>
              </div>
            </div>
          </div>

          {/* SEO Tool Section */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-vin-neutral-50 to-vin-secondary-50 border border-vin-neutral-200">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-vin-neutral-900">Upptäck seomaskinen.se</h2>
            <p className="text-vin-neutral-700 mb-4">
              Vi tipsar om <a className="underline text-vin-secondary-600 hover:text-vin-secondary-700 transition-colors" href="https://seomaskinen.se" target="_blank" rel="noreferrer">seomaskinen.se</a> – vårt enkla SEO-verktyg som visar grundläggande förbättringar. Vi kan utföra dem åt dig, eller lära dig göra dem själv.
            </p>
            <a 
              href="https://seomaskinen.se" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center text-vin-secondary-600 font-semibold hover:text-vin-secondary-700 transition-colors duration-300"
            >
              Besök seomaskinen.se
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
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
            Vanliga frågor om SEO
          </motion.h2>
          <motion.p 
            initial={{opacity:0, y:20}} 
            whileInView={{opacity:1, y:0}} 
            transition={{duration:0.6, delay:0.1}}
            className="text-vin-neutral-700 text-base sm:text-lg max-w-2xl mx-auto"
          >
            Svar på de vanligaste frågorna om våra SEO-tjänster
          </motion.p>
        </div>
        
        <FAQ data={faqData} />
      </section>

      {/* Sticky CTA */}
      <StickyCTA />
    </>
  );
}
