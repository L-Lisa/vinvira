import SeoHead from "@/components/SeoHead";
import FAQ from "@/components/FAQ";
import faqData from "@/data/faq-webb.json";
import { motion } from 'framer-motion';
import ServiceHero from '@/components/ServiceHero';
import WebbIcon from '@/components/icons/WebbIcon';
import StickyCTA from "@/components/StickyCTA";

export default function Webb() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Webbdesign",
    "provider": { "@type": "Organization", "name": "Vinvira", "url": "https://vinvira.se" },
    "description": "Snabba och prisvärda hemsidor för småföretagare, ofta klara på under en vecka."
  };

  return (
    <>
      <SeoHead
        title="Snabb och enkel hemsida för småföretag – utan månadskostnad | Vinvira"
        description="Prisvärda hemsidor klara på under en vecka. Välj underhållsfri lösning eller plattform du kan uppdatera själv."
        canonical="https://vinvira.se/webb"
        keywords="billig hemsida småföretag, webbdesign, hemsida utan månadskostnad, webbyrå Sverige"
      />
      
      {/* Hero Section */}
      <ServiceHero
        title="Snabb och enkel"
        subtitle="hemsida för småföretag"
        description="På Vinvira hjälper vi dig att komma online snabbt. Välj en prisvärd, stabil hemsida som kräver minimalt underhåll — eller en lösning byggd på en användarvänlig plattform om du vill uppdatera själv."
        serviceType="Webbdesign"
        icon={<WebbIcon />}
        gradientColors={['from-vin-primary-500', 'to-vin-secondary-500']}
        ctaText="Boka gratis möte"
        ctaHref="#contact"
      />

      {/* Process Steps Section */}
      <section id="process" className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 bg-vin-neutral-50">
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2 
            initial={{opacity:0, y:20}} 
            whileInView={{opacity:1, y:0}} 
            transition={{duration:0.6}}
            className="text-3xl sm:text-4xl font-bold text-vin-neutral-900 mb-4"
          >
            Så här går det till
          </motion.h2>
          <motion.p 
            initial={{opacity:0, y:20}} 
            whileInView={{opacity:1, y:0}} 
            transition={{duration:0.6, delay:0.1}}
            className="text-vin-neutral-700 text-base sm:text-lg max-w-2xl mx-auto"
          >
            Enkelt och transparent process från idé till färdig hemsida
          </motion.p>
        </div>
        
        <div className="grid gap-6 sm:gap-8 md:gap-12 md:grid-cols-3">
          {/* Step 1 */}
          <motion.div 
            initial={{opacity:0, y:30}} 
            whileInView={{opacity:1, y:0}} 
            transition={{duration:0.7}}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-vin-primary-100/50 via-vin-secondary-100/50 to-vin-accent-100/50 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative bg-white border border-vin-neutral-200 rounded-3xl p-6 sm:p-8 h-full hover:bg-white/90 transition-all duration-500 hover:shadow-accessible-lg hover:-translate-y-2">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-vin-primary-500 to-vin-secondary-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-vin-neutral-900 group-hover:text-vin-primary-600 transition-colors duration-300">Gratis startmöte</h3>
              <p className="text-vin-neutral-700 mb-6 leading-relaxed">Vi pratar om dina mål, idéer och vision för hemsidan. Ingen förpliktelse, bara en öppen dialog.</p>
            </div>
          </motion.div>
          
          {/* Step 2 */}
          <motion.div 
            initial={{opacity:0, y:30}} 
            whileInView={{opacity:1, y:0}} 
            transition={{duration:0.7, delay:0.1}}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-vin-secondary-100/50 via-vin-accent-100/50 to-vin-primary-100/50 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative bg-white border border-vin-neutral-200 rounded-3xl p-6 sm:p-8 h-full hover:bg-white/90 transition-all duration-500 hover:shadow-accessible-lg hover:-translate-y-2">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-vin-secondary-500 to-vin-accent-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-vin-neutral-900 group-hover:text-vin-secondary-600 transition-colors duration-300">Utkast & feedback</h3>
              <p className="text-vin-neutral-700 mb-6 leading-relaxed">Du ser ett förslag och ger feedback. Vi itererar tills du är helt nöjd med designen.</p>
            </div>
          </motion.div>
          
          {/* Step 3 */}
          <motion.div 
            initial={{opacity:0, y:30}} 
            whileInView={{opacity:1, y:0}} 
            transition={{duration:0.7, delay:0.2}}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-vin-accent-100/50 via-vin-primary-100/50 to-vin-secondary-100/50 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative bg-white border border-vin-neutral-200 rounded-3xl p-6 sm:p-8 h-full hover:bg-white/90 transition-all duration-500 hover:shadow-accessible-lg hover:-translate-y-2">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-vin-accent-500 to-vin-primary-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-vin-neutral-900 group-hover:text-vin-accent-600 transition-colors duration-300">Lansering</h3>
              <p className="text-vin-neutral-700 mb-6 leading-relaxed">Din hemsida lanseras och du får full kontroll. Vi står redo att hjälpa vid behov.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 bg-white">
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2 
            initial={{opacity:0, y:20}} 
            whileInView={{opacity:1, y:0}} 
            transition={{duration:0.6}}
            className="text-3xl sm:text-4xl font-bold text-vin-neutral-900 mb-4"
          >
            Varför välja Vinvira?
          </motion.h2>
          <motion.p 
            initial={{opacity:0, y:20}} 
            whileInView={{opacity:1, y:0}} 
            transition={{duration:0.6, delay:0.1}}
            className="text-vin-neutral-700 text-base sm:text-lg max-w-2xl mx-auto"
          >
            Vi fokuserar på det som verkligen betyder något för ditt företag
          </motion.p>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Feature 1 */}
          <motion.div 
            initial={{opacity:0, y:20}} 
            whileInView={{opacity:1, y:0}} 
            transition={{duration:0.6}}
            className="text-center p-6 sm:p-8"
          >
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-vin-primary-100 to-vin-primary-200 rounded-2xl flex items-center justify-center">
              <svg className="w-8 h-8 text-vin-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-vin-neutral-900 mb-4">Snabb leverans</h3>
            <p className="text-vin-neutral-700">Hemsidor klara på under en vecka, inte månader</p>
          </motion.div>

          {/* Feature 2 */}
          <motion.div 
            initial={{opacity:0, y:20}} 
            whileInView={{opacity:1, y:0}} 
            transition={{duration:0.6, delay:0.1}}
            className="text-center p-6 sm:p-8"
          >
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-vin-secondary-100 to-vin-secondary-200 rounded-2xl flex items-center justify-center">
              <svg className="w-8 h-8 text-vin-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-vin-neutral-900 mb-4">Ingen månadskostnad</h3>
            <p className="text-vin-neutral-700">Betala en gång, äg din hemsida för alltid</p>
          </motion.div>

          {/* Feature 3 */}
          <motion.div 
            initial={{opacity:0, y:20}} 
            whileInView={{opacity:1, y:0}} 
            transition={{duration:0.6, delay:0.2}}
            className="text-center p-6 sm:p-8"
          >
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-vin-accent-100 to-vin-accent-200 rounded-2xl flex items-center justify-center">
              <svg className="w-8 h-8 text-vin-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-vin-neutral-900 mb-4">Säker & stabil</h3>
            <p className="text-vin-neutral-700">Byggd med moderna tekniker för optimal prestanda</p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-20 text-center bg-gradient-to-r from-vin-primary-600 to-vin-secondary-600 rounded-3xl mx-4 sm:mx-6">
        <motion.h2 
          initial={{opacity:0, y:20}} 
          whileInView={{opacity:1, y:0}} 
          transition={{duration:0.6}}
          className="text-3xl sm:text-4xl font-bold text-white mb-6"
        >
          Redo att komma igång?
        </motion.h2>
        <motion.p 
          initial={{opacity:0, y:20}} 
          whileInView={{opacity:1, y:0}} 
          transition={{duration:0.6, delay:0.1}}
          className="text-xl text-vin-primary-100 mb-8 max-w-2xl mx-auto"
        >
          Boka ett gratis möte och låt oss diskutera hur vi kan hjälpa ditt företag att växa online
        </motion.p>
        <motion.div
          initial={{opacity:0, y:20}} 
          whileInView={{opacity:1, y:0}} 
          transition={{duration:0.6, delay:0.2}}
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-vin-primary-600 font-semibold rounded-full shadow-accessible hover:shadow-accessible-lg hover:scale-105 transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/50"
          >
            Boka gratis möte
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <FAQ data={faqData} />

      {/* Sticky CTA */}
      <StickyCTA />
    </>
  );
}
