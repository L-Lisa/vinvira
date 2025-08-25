import { motion } from 'framer-motion';

const PrisPaket = ({ 
  className = "",
  showTitle = true,
  showDescription = true
}) => {
  return (
    <section className={className}>
      {showTitle && (
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2 
            initial={{opacity:0, y:20}} 
            whileInView={{opacity:1, y:0}} 
            transition={{duration:0.6}}
            className="text-3xl sm:text-4xl font-bold text-vin-neutral-900 mb-4"
          >
            Våra paket
          </motion.h2>
          {showDescription && (
            <motion.p 
              initial={{opacity:0, y:20}} 
              whileInView={{opacity:1, y:0}} 
              transition={{duration:0.6, delay:0.1}}
              className="text-vin-neutral-700 text-base sm:text-lg max-w-2xl mx-auto"
            >
              Tydliga priser – utan dolda kostnader
            </motion.p>
          )}
        </div>
      )}
      
      <div className="grid gap-8 md:gap-12 lg:gap-16 md:grid-cols-2 lg:grid-cols-3">
        {/* Package 1 */}
        <motion.div 
          initial={{opacity:0, y:30}} 
          whileInView={{opacity:1, y:0}} 
          transition={{duration:0.7}}
          className="group relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-br from-vin-primary-400/30 via-vin-secondary-400/30 to-transparent rounded-3xl blur-2xl group-hover:blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
          <div className="relative bg-white border border-vin-neutral-200 rounded-3xl p-8 lg:p-10 h-full hover:bg-white/90 transition-all duration-500 hover:shadow-accessible-lg hover:-translate-y-2 flex flex-col">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-vin-neutral-900 mb-2">Starta enkelt</h3>
              <div className="text-3xl font-bold text-vin-primary-600 mb-4">från 5000 kr</div>
              <p className="text-vin-neutral-600">Perfekt för: Lokala företag, konsulter, enklare tjänster</p>
            </div>
            
            <ul className="space-y-3 mb-8 flex-grow">
              <li className="flex items-center text-vin-neutral-700">
                <div className="w-2 h-2 bg-vin-primary-400 rounded-full mr-3" />
                Upp till 5 sidor med innehåll
              </li>
              <li className="flex items-center text-vin-neutral-700">
                <div className="w-2 h-2 bg-vin-primary-400 rounded-full mr-3" />
AI optimerad SEO              </li>
              <li className="flex items-center text-vin-neutral-700">
                <div className="w-2 h-2 bg-vin-primary-400 rounded-full mr-3" />
                Basic copy ingår
              </li>
              <li className="flex items-center text-vin-neutral-700">
                <div className="w-2 h-2 bg-vin-primary-400 rounded-full mr-3" />
                1 revision ingår
              </li>
              <li className="flex items-center text-vin-neutral-700">
                <div className="w-2 h-2 bg-vin-primary-400 rounded-full mr-3" />
                Klar på under en vecka
              </li>
              <li className="flex items-center text-vin-neutral-700">
                <div className="w-2 h-2 bg-vin-primary-400 rounded-full mr-3" />
                Möjlighet till gratis hosting
              </li>
              <li className="flex items-center text-vin-neutral-700">
                <div className="w-2 h-2 bg-vin-primary-400 rounded-full mr-3" />
                Hjälp med domänregistrering 
              </li>
            </ul>
            
            <a href="/kontakt" className="block w-full text-center rounded-full px-6 py-3 bg-gradient-to-r from-vin-primary-600 to-vin-secondary-600 text-white font-semibold shadow-accessible hover:shadow-accessible-lg transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-vin-primary-300 mt-auto">
              Kontakta oss
            </a>
          </div>
        </motion.div>
        
        {/* Package 2 */}
        <motion.div 
          initial={{opacity:0, y:30}} 
          whileInView={{opacity:1, y:0}} 
          transition={{duration:0.7, delay:0.1}}
          className="group relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-br from-vin-secondary-400/30 via-vin-accent-400/30 to-transparent rounded-3xl blur-2xl group-hover:blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
          <div className="relative bg-white border border-vin-neutral-200 rounded-3xl p-8 lg:p-10 h-full hover:bg-white/90 transition-all duration-500 hover:shadow-accessible-lg hover:-translate-y-2 flex flex-col">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-vin-neutral-900 mb-2">Växande företag</h3>
              <div className="text-3xl font-bold text-vin-secondary-600 mb-4">från 9500 kr</div>
              <p className="text-vin-neutral-600">Perfekt för: Växande företag, flera tjänster, mer innehåll</p>
            </div>
            
            <ul className="space-y-3 mb-8 flex-grow">
              <li className="flex items-center text-vin-neutral-700">
                <div className="w-2 h-2 bg-vin-secondary-400 rounded-full mr-3" />
                Upp till 10 sidor med innehåll
              </li>
              <li className="flex items-center text-vin-neutral-700">
                <div className="w-2 h-2 bg-vin-secondary-400 rounded-full mr-3" />
                AI optimerad SEO              </li>
              <li className="flex items-center text-vin-neutral-700">
                <div className="w-2 h-2 bg-vin-secondary-400 rounded-full mr-3" />
                Basic copy ingår
              </li>
              <li className="flex items-center text-vin-neutral-700">
                <div className="w-2 h-2 bg-vin-secondary-400 rounded-full mr-3" />
                2 revisioner ingår 
              </li>
              <li className="flex items-center text-vin-neutral-700">
                <div className="w-2 h-2 bg-vin-secondary-400 rounded-full mr-3" />
                Leverans enligt tidsplan
              </li>
              <li className="flex items-center text-vin-neutral-700">
                <div className="w-2 h-2 bg-vin-secondary-400 rounded-full mr-3" />
                Möjlighet till gratis hosting
              </li>
              <li className="flex items-center text-vin-neutral-700">
                <div className="w-2 h-2 bg-vin-secondary-400 rounded-full mr-3" />
                Hjälp med domänregistrering 
              </li>
            </ul>
            
            <a href="/kontakt" className="block w-full text-center rounded-full px-6 py-3 bg-gradient-to-r from-vin-secondary-600 to-vin-accent-600 text-white font-semibold shadow-accessible hover:shadow-accessible-lg transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-vin-secondary-300 mt-auto">
              Kontakta oss
            </a>
          </div>
        </motion.div>
        
        {/* SEO Add-on */}
        <motion.div 
          initial={{opacity:0, y:30}} 
          whileInView={{opacity:1, y:0}} 
          transition={{duration:0.7, delay:0.2}}
          className="group relative md:col-span-2 lg:col-span-1"
        >
          <div className="absolute -inset-4 bg-gradient-to-br from-vin-accent-400/30 via-vin-primary-400/30 to-transparent rounded-3xl blur-2xl group-hover:blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
          <div className="relative bg-white border border-vin-accent-300 rounded-3xl p-8 lg:p-10 h-full hover:bg-white/90 transition-all duration-500 hover:shadow-accessible-lg hover:-translate-y-2 flex flex-col">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-vin-neutral-900 mb-2">SEO-prenumeration</h3>
              <div className="text-3xl font-bold text-vin-accent-600 mb-4">från 500 kr/mån</div>
              <p className="text-vin-neutral-600">För dig som vill förbättra din befintliga sida månadsvis</p>
            </div>
            
            <ul className="space-y-3 mb-8 flex-grow">
              <li className="flex items-center text-vin-neutral-700">
                <div className="w-2 h-2 bg-vin-accent-400 rounded-full mr-3" />
                AI-driven analys
              </li>
              <li className="flex items-center text-vin-neutral-700">
                <div className="w-2 h-2 bg-vin-accent-400 rounded-full mr-3" />
                Månadsrapporter
              </li>
              <li className="flex items-center text-vin-neutral-700">
                <div className="w-2 h-2 bg-vin-accent-400 rounded-full mr-3" />
                Löpande optimerings förslag
              </li>
              <li className="flex items-center text-vin-neutral-700">
                <div className="w-2 h-2 bg-vin-accent-400 rounded-full mr-3" />
                Ingen bindningstid
              </li>
              <li className="flex items-center text-vin-neutral-700">
                <div className="w-2 h-2 bg-vin-accent-400 rounded-full mr-3" />
                Hjälper dig växa långsiktigt
              </li>
            </ul>
            
            <a href="/seo" className="block w-full text-center rounded-full px-6 py-3 bg-gradient-to-r from-vin-accent-600 to-vin-primary-600 text-white font-semibold shadow-accessible hover:shadow-accessible-lg transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-vin-accent-300 mt-auto">
              Läs mer om SEO
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PrisPaket;
