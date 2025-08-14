import SeoHead from "@/components/SeoHead";
import FAQ from "@/components/FAQ";
import faqData from "@/data/faq-admin.json";
import { motion } from 'framer-motion';
import ServiceHero from '@/components/ServiceHero';
import StickyCTA from "@/components/StickyCTA";

// Premium Admin Support Icon Component
function AdminSupportIcon() {
  return (
    <svg 
      className="w-full h-full" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Central dashboard */}
      <rect 
        x="3" 
        y="3" 
        width="18" 
        height="18" 
        rx="3" 
        stroke="currentColor" 
        strokeWidth="2"
        className="opacity-90"
      />
      
      {/* Task checkboxes */}
      <rect 
        x="6" 
        y="7" 
        width="3" 
        height="3" 
        rx="1" 
        fill="currentColor"
        className="opacity-80"
      />
      <rect 
        x="6" 
        y="12" 
        width="3" 
        height="3" 
        rx="1" 
        fill="currentColor"
        className="opacity-60"
      />
      
      {/* Task lines */}
      <path 
        d="M11 8.5h6M11 13.5h4" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round"
        className="opacity-70"
      />
      
      {/* Efficiency indicator */}
      <circle 
        cx="17" 
        cy="7" 
        r="2" 
        fill="currentColor"
        className="opacity-50"
      />
    </svg>
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
      
      {/* Hero Section */}
      <ServiceHero
        title="Professionell admin-support för"
        subtitle="framgångsrika företag"
        description="Avancerade administrativa lösningar som frigör tid för det som verkligen betyder något. Från komplex mötesplanering till strategisk kommunikation – vi hanterar detaljerna så du kan fokusera på tillväxt."
        serviceType="Administrativ Support & Business Operations"
        icon={<AdminSupportIcon />}
        gradientColors={['from-vin-accent-500', 'to-vin-primary-500']}
        ctaText="Få support-offert"
        ctaHref="#contact"
        customFeatures={[
          "Professionell projekthantering",
          "Snabb respons inom 4 timmar"
        ]}
      />

      {/* MAIN CONTENT SECTION */}
      <section className="px-4 sm:px-6 py-16 sm:py-20 max-w-6xl mx-auto bg-white">
        <motion.div
          initial={{opacity:0, y:20}}
          whileInView={{opacity:1, y:0}}
          transition={{duration:0.6}}
          className="space-y-16"
        >
          {/* Services Grid */}
          <div className="text-center mb-12 sm:mb-16">
            <motion.h2 
              initial={{opacity:0, y:20}} 
              whileInView={{opacity:1, y:0}} 
              transition={{duration:0.6}}
              className="text-3xl sm:text-4xl font-bold text-vin-neutral-900 mb-4"
            >
              Support för ditt företag
            </motion.h2>
            <motion.p 
              initial={{opacity:0, y:20}} 
              whileInView={{opacity:1, y:0}} 
              transition={{duration:0.6, delay:0.1}}
              className="text-vin-neutral-700 text-base sm:text-lg max-w-3xl mx-auto"
            >
              Praktisk hjälp med vardagsuppgifter så du kan fokusera på det som betyder mest för ditt företag
            </motion.p>
          </div>
          
          <div className="grid gap-8 md:gap-12 lg:gap-16 md:grid-cols-3">



            {/* Creative Design Solutions */}
            <motion.div 
              initial={{opacity:0, y:30}} 
              whileInView={{opacity:1, y:0}} 
              transition={{duration:0.7}}
              className="group relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-vin-secondary-400/30 via-vin-peachfuzz/30 to-transparent rounded-3xl blur-2xl group-hover:blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
              <div className="relative bg-white/90 backdrop-blur-sm border border-vin-neutral-200/50 rounded-3xl p-8 lg:p-10 h-full transition-all duration-700 group-hover:bg-white group-hover:shadow-2xl group-hover:shadow-vin-secondary-500/10 group-hover:-translate-y-4 group-hover:scale-105">
                
                <div className="flex items-center gap-3 mb-8">
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-vin-secondary-500 to-vin-secondary-600 rounded-2xl font-bold text-lg flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-vin-secondary-400 to-vin-secondary-500 rounded-2xl blur-sm opacity-30 -z-10 group-hover:opacity-50 transition-opacity duration-300"></div>
                  </div>
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-vin-secondary-100 to-vin-secondary-200 rounded-2xl flex items-center justify-center shadow-sm">
                      <svg className="w-6 h-6 text-vin-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                      </svg>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-vin-secondary-100 to-vin-secondary-200 rounded-2xl blur-sm opacity-50 -z-10 group-hover:opacity-70 transition-opacity duration-300"></div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-2xl lg:text-3xl font-bold text-vin-neutral-900 group-hover:text-vin-secondary-600 transition-colors duration-500">
                    Kreativa designlösningar
                  </h3>
                  <p className="text-vin-neutral-700 text-lg leading-relaxed group-hover:text-vin-neutral-800 transition-colors duration-300">
                    Innovativ visuell kommunikation och designstrategi som skiljer ditt företag från konkurrenterna med enastående kreativ kvalitet.
                  </p>
                  
                  <ul className="space-y-3 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                    <li className="flex items-center text-vin-neutral-600">
                      <div className="w-2 h-2 bg-vin-secondary-400 rounded-full mr-3" />
                      Executive presentations
                    </li>
                    <li className="flex items-center text-vin-neutral-600">
                      <div className="w-2 h-2 bg-vin-secondary-400 rounded-full mr-3" />
                      Brand identity utveckling
                    </li>
                    <li className="flex items-center text-vin-neutral-600">
                      <div className="w-2 h-2 bg-vin-secondary-400 rounded-full mr-3" />
                      Digital asset creation
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Professionell textproduktion */}
            <motion.div 
              initial={{opacity:0, y:30}} 
              whileInView={{opacity:1, y:0}} 
              transition={{duration:0.7, delay:0.2}}
              className="group relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-vin-primary-400/30 via-vin-primary-500/30 to-transparent rounded-3xl blur-2xl group-hover:blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
              <div className="relative bg-white/90 backdrop-blur-sm border border-vin-neutral-200/50 rounded-3xl p-8 lg:p-10 h-full transition-all duration-700 group-hover:bg-white group-hover:shadow-2xl group-hover:shadow-vin-primary-500/10 group-hover:-translate-y-4 group-hover:scale-105">
                
                <div className="flex items-center gap-3 mb-8">
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-vin-primary-500 to-vin-primary-600 rounded-2xl font-bold text-lg flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-vin-primary-400 to-vin-primary-500 rounded-2xl blur-sm opacity-30 -z-10 group-hover:opacity-50 transition-opacity duration-300"></div>
                  </div>
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-vin-primary-100 to-vin-primary-200 rounded-2xl flex items-center justify-center shadow-sm">
                      <svg className="w-6 h-6 text-vin-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-vin-primary-100 to-vin-primary-200 rounded-2xl blur-sm opacity-50 -z-10 group-hover:opacity-70 transition-opacity duration-300"></div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-2xl lg:text-3xl font-bold text-vin-neutral-900 group-hover:text-vin-primary-600 transition-colors duration-500">
                    Professionell textproduktion
                  </h3>
                  <p className="text-vin-neutral-700 text-lg leading-relaxed group-hover:text-vin-neutral-800 transition-colors duration-300">
                    Experthjälp med texter som engagerar och konverterar. Från korrekturläsning till strategisk copywriting som stärker ditt varumärke.
                  </p>
                  
                  <ul className="space-y-3 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                    <li className="flex items-center text-vin-neutral-600">
                      <div className="w-2 h-2 bg-vin-primary-400 rounded-full mr-3" />
                      Strategisk copywriting
                    </li>
                    <li className="flex items-center text-vin-neutral-600">
                      <div className="w-2 h-2 bg-vin-primary-400 rounded-full mr-3" />
                      SEO-optimerade texter
                    </li>
                    <li className="flex items-center text-vin-neutral-600">
                      <div className="w-2 h-2 bg-vin-primary-400 rounded-full mr-3" />
                      Korrekturläsning & språkvård
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Övrigt - Custom Solutions */}
            <motion.div 
              initial={{opacity:0, y:30}} 
              whileInView={{opacity:1, y:0}} 
              transition={{duration:0.7, delay:0.4}}
              className="group relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-vin-accent-400/30 via-vin-primary-400/30 to-transparent rounded-3xl blur-2xl group-hover:blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
              <div className="relative bg-white/90 backdrop-blur-sm border border-vin-neutral-200/50 rounded-3xl p-8 lg:p-10 h-full transition-all duration-700 group-hover:bg-white group-hover:shadow-2xl group-hover:shadow-vin-accent-500/10 group-hover:-translate-y-4 group-hover:scale-105">
                
                <div className="flex items-center gap-3 mb-8">
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-vin-accent-500 to-vin-primary-500 rounded-2xl font-bold text-lg flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-vin-accent-400 to-vin-primary-400 rounded-2xl blur-sm opacity-30 -z-10 group-hover:opacity-50 transition-opacity duration-300"></div>
                  </div>
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-vin-accent-100 to-vin-accent-200 rounded-2xl flex items-center justify-center shadow-sm">
                      <svg className="w-6 h-6 text-vin-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-vin-accent-100 to-vin-accent-200 rounded-2xl blur-sm opacity-50 -z-10 group-hover:opacity-70 transition-opacity duration-300"></div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-2xl lg:text-3xl font-bold text-vin-neutral-900 group-hover:text-vin-accent-600 transition-colors duration-500">
                    Övrigt
                  </h3>
                  <p className="text-vin-neutral-700 text-lg leading-relaxed group-hover:text-vin-neutral-800 transition-colors duration-300">
                    Vi älskar utmaningar och är alltid öppna för nya idéer. Har du något specifikt i åtanke? Berätta vad du behöver hjälp med – vi hittar kreativa lösningar tillsammans.
                  </p>
                  
                  <ul className="space-y-3 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                    <li className="flex items-center text-vin-neutral-600">
                      <div className="w-2 h-2 bg-vin-accent-400 rounded-full mr-3" />
                      Skräddarsydda lösningar
                    </li>
                    <li className="flex items-center text-vin-neutral-600">
                      <div className="w-2 h-2 bg-vin-accent-400 rounded-full mr-3" />
                      Kreativa problemlösningar
                    </li>
                    <li className="flex items-center text-vin-neutral-600">
                      <div className="w-2 h-2 bg-vin-accent-400 rounded-full mr-3" />
                      Personlig rådgivning
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>


        </motion.div>
      </section>

      {/* FAQ SECTION */}
      <FAQ 
        data={faqData} 
        title="Vanliga frågor om admin-support"
        subtitle="Svar på de vanligaste frågorna om vår professionella administrativa support"
      />

      {/* Sticky CTA */}
      <StickyCTA />
    </>
  );
}
