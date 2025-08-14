import SeoHead from "@/components/SeoHead";
import FAQ from "@/components/FAQ";
import faqData from "@/data/faq-seo.json";
import { motion } from 'framer-motion';
import ServiceHero from '@/components/ServiceHero';
import StickyCTA from "@/components/StickyCTA";

// Clean SEO Bullseye Icon Component
function SEOTargetIcon() {
  return (
    <svg 
      className="w-full h-full" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer ring */}
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="currentColor" 
        strokeWidth="2"
        className="opacity-40"
      />
      
      {/* Middle ring */}
      <circle 
        cx="12" 
        cy="12" 
        r="7" 
        stroke="currentColor" 
        strokeWidth="2.5"
        className="opacity-70"
      />
      
      {/* Inner ring */}
      <circle 
        cx="12" 
        cy="12" 
        r="4" 
        stroke="currentColor" 
        strokeWidth="3"
        className="opacity-90"
      />
      
      {/* Center bullseye */}
      <circle 
        cx="12" 
        cy="12" 
        r="1.5" 
        fill="currentColor"
      />
      
      {/* Clean crosshairs */}
      <path 
        d="M12 3v3M12 18v3M3 12h3M18 12h3" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round"
        className="opacity-60"
      />
    </svg>
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
      
      {/* Hero Section */}
      <ServiceHero
        title="AI-driven SEO för"
        subtitle="tekniskt försprång"
        description="Avancerad teknisk SEO-optimering med AI-analys och datadriven strategi. Från djupgående tekniska fixes till intelligenta ranking-strategier som levererar mätbara resultat för ditt företag."
        serviceType="SEO & Teknisk Optimering"
        icon={<SEOTargetIcon />}
        gradientColors={['from-vin-secondary-500', 'to-vin-peachfuzz']}
        ctaText="Få SEO-offert"
        ctaHref="#contact"
        customFeatures={[
          "Billiga månadsprenumerationer eller större engångsfix",
          "AI-driven teknisk analys"
        ]}
      />

      {/* MAIN CONTENT SECTION */}
      <section className="px-4 sm:px-6 py-16 sm:py-20 max-w-6xl mx-auto bg-white">
        <motion.div
          initial={{opacity:0, y:20}}
          whileInView={{opacity:1, y:0}}
          transition={{duration:0.6}}
          className="space-y-12"
        >
          {/* Options Section */}
          <div className="text-center mb-12 sm:mb-16">
            <motion.h2 
              initial={{opacity:0, y:20}} 
              whileInView={{opacity:1, y:0}} 
              transition={{duration:0.6}}
              className="text-3xl sm:text-4xl font-bold text-vin-neutral-900 mb-4"
            >
              Våra SEO-alternativ
            </motion.h2>
            <motion.p 
              initial={{opacity:0, y:20}} 
              whileInView={{opacity:1, y:0}} 
              transition={{duration:0.6, delay:0.1}}
              className="text-vin-neutral-700 text-base sm:text-lg max-w-3xl mx-auto"
            >
              Välj mellan teknisk engångsfix eller kontinuerlig optimering med AI-driven analys
            </motion.p>
          </div>
          
          <div className="grid gap-8 md:gap-12 lg:gap-16 md:grid-cols-2">
            <motion.div 
              initial={{opacity:0, y:30}} 
              whileInView={{opacity:1, y:0}} 
              transition={{duration:0.7}}
              className="group relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-vin-primary-400/30 via-vin-secondary-400/30 to-transparent rounded-3xl blur-2xl group-hover:blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
              <div className="relative bg-white/90 backdrop-blur-sm border border-vin-neutral-200/50 rounded-3xl p-8 lg:p-10 h-full transition-all duration-700 group-hover:bg-white group-hover:shadow-2xl group-hover:shadow-vin-primary-500/10 group-hover:-translate-y-4 group-hover:scale-105">
                
                <div className="flex items-center gap-3 mb-8">
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-vin-primary-500 to-vin-primary-600 rounded-2xl font-bold text-lg flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-vin-primary-400 to-vin-primary-500 rounded-2xl blur-sm opacity-30 -z-10 group-hover:opacity-50 transition-opacity duration-300"></div>
                  </div>
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-vin-primary-100 to-vin-primary-200 rounded-2xl flex items-center justify-center shadow-sm">
                      <svg className="w-6 h-6 text-vin-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-vin-primary-100 to-vin-primary-200 rounded-2xl blur-sm opacity-50 -z-10 group-hover:opacity-70 transition-opacity duration-300"></div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-2xl lg:text-3xl font-bold text-vin-neutral-900 group-hover:text-vin-primary-600 transition-colors duration-500">
                    Teknisk Engångsfix
                  </h3>
                  <p className="text-vin-neutral-700 text-lg leading-relaxed group-hover:text-vin-neutral-800 transition-colors duration-300">
                    Djupgående teknisk optimering med AI-analys: meta-taggar, bildkomprimering, interna länkar och prestandaförbättringar.
                  </p>
                  
                  <ul className="space-y-3 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                    <li className="flex items-center text-vin-neutral-600">
                      <div className="w-2 h-2 bg-vin-primary-400 rounded-full mr-3" />
                      Meta-taggar & strukturdata
                    </li>
                    <li className="flex items-center text-vin-neutral-600">
                      <div className="w-2 h-2 bg-vin-primary-400 rounded-full mr-3" />
                      AI-driven bildoptimering
                    </li>
                    <li className="flex items-center text-vin-neutral-600">
                      <div className="w-2 h-2 bg-vin-primary-400 rounded-full mr-3" />
                      Core Web Vitals optimering
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{opacity:0, y:30}} 
              whileInView={{opacity:1, y:0}} 
              transition={{duration:0.7, delay:0.2}}
              className="group relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-vin-secondary-400/30 via-vin-peachfuzz/30 to-transparent rounded-3xl blur-2xl group-hover:blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
              <div className="relative bg-white/90 backdrop-blur-sm border border-vin-neutral-200/50 rounded-3xl p-8 lg:p-10 h-full transition-all duration-700 group-hover:bg-white group-hover:shadow-2xl group-hover:shadow-vin-secondary-500/10 group-hover:-translate-y-4 group-hover:scale-105">
                
                <div className="flex items-center gap-3 mb-8">
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-vin-secondary-500 to-vin-secondary-600 rounded-2xl font-bold text-lg flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-vin-secondary-400 to-vin-secondary-500 rounded-2xl blur-sm opacity-30 -z-10 group-hover:opacity-50 transition-opacity duration-300"></div>
                  </div>
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-vin-secondary-100 to-vin-secondary-200 rounded-2xl flex items-center justify-center shadow-sm">
                      <svg className="w-6 h-6 text-vin-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-vin-secondary-100 to-vin-secondary-200 rounded-2xl blur-sm opacity-50 -z-10 group-hover:opacity-70 transition-opacity duration-300"></div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-2xl lg:text-3xl font-bold text-vin-neutral-900 group-hover:text-vin-secondary-600 transition-colors duration-500">
                    AI-driven Prenumeration
                  </h3>
                  <p className="text-vin-neutral-700 text-lg leading-relaxed group-hover:text-vin-neutral-800 transition-colors duration-300">
                    Från 500 kr/mån med kontinuerlig AI-analys, intelligenta ranking-strategier och detaljerade månadsrapporter.
                  </p>
                  
                  <ul className="space-y-3 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                    <li className="flex items-center text-vin-neutral-600">
                      <div className="w-2 h-2 bg-vin-secondary-400 rounded-full mr-3" />
                      AI-driven keyword-analys
                    </li>
                    <li className="flex items-center text-vin-neutral-600">
                      <div className="w-2 h-2 bg-vin-secondary-400 rounded-full mr-3" />
                      Intelligenta ranking-strategier
                    </li>
                    <li className="flex items-center text-vin-neutral-600">
                      <div className="w-2 h-2 bg-vin-secondary-400 rounded-full mr-3" />
                      Automatiserade rapporter
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
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
                <h3 className="text-lg font-semibold mb-2 text-vin-neutral-900">Betalar du över 3000 kr/mån för SEO idag?</h3>
                <p className="text-vin-neutral-700">Låt oss jämföra — Det tycker vi är för mycket om man kan använda AI, prata med oss. Ofta kan vi leverera samma eller bättre värde för en tredjedel av priset.</p>
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

          {/* SEO Tool Interactive Card */}
          <motion.div
            initial={{opacity:0, y:30}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:0.7}}
            className="group relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-vin-secondary-400/20 via-vin-primary-400/20 to-transparent rounded-3xl blur-2xl group-hover:blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
            
            <div className="relative bg-white/95 backdrop-blur-sm border border-vin-neutral-200/50 rounded-3xl p-8 lg:p-10 transition-all duration-700 group-hover:bg-white group-hover:shadow-2xl group-hover:shadow-vin-secondary-500/10 group-hover:-translate-y-2 group-hover:scale-[1.02]">
              
              {/* Header with badge */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-vin-secondary-500 to-vin-primary-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-vin-neutral-900 group-hover:text-vin-secondary-600 transition-colors duration-300">
                      SEO Maskinen
                    </h3>
                    <p className="text-sm text-vin-neutral-600">Vårt AI-drivna SEO-verktyg</p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-vin-secondary-100 to-vin-primary-100 px-3 py-1 rounded-full border border-vin-secondary-200">
                  <span className="text-xs font-semibold text-vin-secondary-700">GRATIS VERKTYG</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-vin-neutral-700 text-lg leading-relaxed mb-6 group-hover:text-vin-neutral-800 transition-colors duration-300">
                Upptäck vårt enkla SEO-verktyg som ger dig grundläggande förbättringsförslag med AI-analys. Perfekt för småföretagare som vill ta kontroll över sin digitala närvaro.
              </p>

              {/* Features */}
              <div className="grid gap-3 mb-8 sm:grid-cols-2">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-vin-secondary-400 rounded-full" />
                  <span className="text-sm text-vin-neutral-600">AI-driven webbplatsanalys</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-vin-primary-400 rounded-full" />
                  <span className="text-sm text-vin-neutral-600">Enkla förbättringsförslag</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-vin-secondary-400 rounded-full" />
                  <span className="text-sm text-vin-neutral-600">Gratis att använda</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-vin-primary-400 rounded-full" />
                  <span className="text-sm text-vin-neutral-600">Tydliga rapporter</span>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                <div className="text-sm text-vin-neutral-600">
                  <span className="font-medium">Beta Version</span> - Vi kan hjälpa dig implementera förbättringarna
                </div>
                <a 
                  href="https://seomaskin.se/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 bg-gradient-to-r from-vin-secondary-600 to-vin-primary-600 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-vin-secondary-300 group-hover:from-vin-secondary-500 group-hover:to-vin-primary-500"
                >
                  <span>Testa verktyget</span>
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>


        </motion.div>
      </section>

      {/* FAQ SECTION */}
      <FAQ 
        data={faqData} 
        title="Vanliga frågor om SEO"
        subtitle="Svar på de vanligaste frågorna om våra SEO-tjänster"
      />

      {/* Sticky CTA */}
      <StickyCTA />
    </>
  );
}
