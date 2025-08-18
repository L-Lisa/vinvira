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
        title="Prisvärd hemsida för småföretag – utan månadskostnad | Vinvira"
        description="Få en modern, SEO-optimerad hemsida för småföretag från 5000 kr. Ingen månadskostnad – full äganderätt och snabb leverans på under en vecka."
        canonical="https://vinvira.se/webb"
        keywords="billig hemsida småföretag, hemsida utan månadskostnad, prisvärd webbyrå Sverige"
      />
      
      {/* Hero Section */}
      <ServiceHero
        title="Snabba och prisvärda"
        subtitle="hemsidor för småföretagare"
        description="Starta starkt online med en hemsida byggd med AI – modern, SEO-optimerad och redo på en vecka. Betala en gång, äg för alltid – utan dyr månadskostnad."
        serviceType="Webbdesign"
        icon={<WebbIcon />}
        gradientColors={['from-vin-primary-500', 'to-vin-secondary-500']}
        ctaText="Boka gratis möte"
        ctaHref="#contact"
      />

      {/* Process Steps Section - Premium Design Showcase */}
      <section id="process" className="relative overflow-hidden bg-gradient-to-br from-vin-neutral-50 via-white to-vin-primary-50/30 py-20 sm:py-32" aria-labelledby="process-heading">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238B5CF6' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="text-center mb-16 sm:mb-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative inline-block"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-vin-primary-500/20 via-vin-secondary-500/20 to-vin-peachfuzz/20 rounded-2xl blur-xl" />
              <h2 id="process-heading" className="relative text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-vin-neutral-900 via-vin-primary-600 to-vin-secondary-600 bg-clip-text text-transparent">
                Så här går det till
              </h2>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-vin-neutral-700 text-lg sm:text-xl max-w-3xl mx-auto mt-8 leading-relaxed"
            >
              En enkel process – från idé till färdig hemsida på rekordtid
            </motion.p>
          </div>
          
          {/* Process Steps - Card Grid Design */}
          <ol className="grid gap-8 md:gap-12 lg:gap-16 md:grid-cols-3" role="list" aria-label="Vårt arbetsflöde i tre steg">
              {/* Step 1 - Enhanced Design */}
              <motion.li 
                initial={{ opacity: 0, y: 60, rotateY: -15 }} 
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }} 
                transition={{ duration: 0.8, delay: 0.1 }}
                className="group relative perspective-1000"
              >
                {/* Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-br from-vin-primary-400/30 via-vin-secondary-400/30 to-transparent rounded-3xl blur-2xl group-hover:blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                
                {/* Main Card */}
                <div className="relative bg-white/90 backdrop-blur-sm border border-vin-neutral-200/50 rounded-3xl p-8 lg:p-10 h-full transition-all duration-700 group-hover:bg-white group-hover:shadow-2xl group-hover:shadow-vin-primary-500/10 group-hover:-translate-y-4 group-hover:scale-105">
                  
                  {/* Step Header - Layered Harmony */}
                  <div className="flex items-center gap-3 mb-8">
                    {/* Number Badge with Glow */}
                    <div className="relative">
                      <div className="w-12 h-12 bg-gradient-to-br from-vin-primary-500 to-vin-primary-600 rounded-2xl font-bold text-lg flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all duration-300">
                        1
                      </div>
                      {/* Subtle Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-vin-primary-400 to-vin-primary-500 rounded-2xl blur-sm opacity-30 -z-10 group-hover:opacity-50 transition-opacity duration-300"></div>
                    </div>
                    
                    {/* Icon Badge with Matching Treatment */}
                    <div className="relative">
                      <div className="w-12 h-12 bg-gradient-to-br from-vin-primary-100 to-vin-primary-200 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-sm">
                        <svg className="w-6 h-6 text-vin-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      </div>
                      {/* Matching Subtle Glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-vin-primary-100 to-vin-primary-200 rounded-2xl blur-sm opacity-50 -z-10 group-hover:opacity-70 transition-opacity duration-300"></div>
                    </div>
                    
                    {/* Step Indicator */}
                    <div className="hidden sm:flex items-center text-sm text-vin-neutral-500 font-medium">
                      STEG 1 AV 3
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-6">
                    <h3 className="text-2xl lg:text-3xl font-bold text-vin-neutral-900 group-hover:text-vin-primary-600 transition-colors duration-500">
                      Gratis startmöte
                    </h3>
                    <p className="text-vin-neutral-700 text-lg leading-relaxed group-hover:text-vin-neutral-800 transition-colors duration-300">
                      Vi pratar om dina behov, mål och vision för hemsidan. Du får en offert och en tydlig tidsplan.
                    </p>
                    
                    {/* Feature list */}
                    <ul className="space-y-3 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                      <li className="flex items-center text-vin-neutral-600">
                        <div className="w-2 h-2 bg-vin-primary-400 rounded-full mr-3" />
                        Diskussion om behov & mål
                      </li>
                      <li className="flex items-center text-vin-neutral-600">
                        <div className="w-2 h-2 bg-vin-primary-400 rounded-full mr-3" />
                        Prisoffert & tidsram
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.li>
              
              {/* Step 2 - Enhanced Design */}
              <motion.li 
                initial={{ opacity: 0, y: 60, rotateY: -15 }} 
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }} 
                transition={{ duration: 0.8, delay: 0.3 }}
                className="group relative perspective-1000"
              >
                {/* Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-br from-vin-secondary-400/30 via-vin-peachfuzz/30 to-transparent rounded-3xl blur-2xl group-hover:blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                
                {/* Main Card */}
                <div className="relative bg-white/90 backdrop-blur-sm border border-vin-neutral-200/50 rounded-3xl p-8 lg:p-10 h-full transition-all duration-700 group-hover:bg-white group-hover:shadow-2xl group-hover:shadow-vin-secondary-500/10 group-hover:-translate-y-4 group-hover:scale-105">
                  
                  {/* Step Header - Layered Harmony */}
                  <div className="flex items-center gap-3 mb-8">
                    {/* Number Badge with Glow */}
                    <div className="relative">
                      <div className="w-12 h-12 bg-gradient-to-br from-vin-secondary-500 to-vin-secondary-600 rounded-2xl font-bold text-lg flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all duration-300">
                        2
                      </div>
                      {/* Subtle Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-vin-secondary-400 to-vin-secondary-500 rounded-2xl blur-sm opacity-30 -z-10 group-hover:opacity-50 transition-opacity duration-300"></div>
                    </div>
                    
                    {/* Icon Badge with Matching Treatment */}
                    <div className="relative">
                      <div className="w-12 h-12 bg-gradient-to-br from-vin-secondary-100 to-vin-secondary-200 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-sm">
                        <svg className="w-6 h-6 text-vin-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </div>
                      {/* Matching Subtle Glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-vin-secondary-100 to-vin-secondary-200 rounded-2xl blur-sm opacity-50 -z-10 group-hover:opacity-70 transition-opacity duration-300"></div>
                    </div>
                    
                    {/* Step Indicator */}
                    <div className="hidden sm:flex items-center text-sm text-vin-neutral-500 font-medium">
                      STEG 2 AV 3
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-6">
                    <h3 className="text-2xl lg:text-3xl font-bold text-vin-neutral-900 group-hover:text-vin-secondary-600 transition-colors duration-500">
                      Design & utkast
                    </h3>
                    <p className="text-vin-neutral-700 text-lg leading-relaxed group-hover:text-vin-neutral-800 transition-colors duration-300">
                      Vi bygger en första version och du får ge feedback. Vi justerar tills du är nöjd.
                    </p>
                    
                    {/* Feature list */}
                    <ul className="space-y-3 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                      <li className="flex items-center text-vin-neutral-600">
                        <div className="w-2 h-2 bg-vin-secondary-400 rounded-full mr-3" />
                        Interaktiv designprocess
                      </li>
                      <li className="flex items-center text-vin-neutral-600">
                        <div className="w-2 h-2 bg-vin-secondary-400 rounded-full mr-3" />
                        Obegränsade revideringar
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.li>
              
              {/* Step 3 - Enhanced Design */}
              <motion.li 
                initial={{ opacity: 0, y: 60, rotateY: -15 }} 
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }} 
                transition={{ duration: 0.8, delay: 0.5 }}
                className="group relative perspective-1000"
              >
                {/* Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-br from-vin-peachfuzz/30 via-vin-primary-400/30 to-transparent rounded-3xl blur-2xl group-hover:blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                
                {/* Main Card */}
                <div className="relative bg-white/90 backdrop-blur-sm border border-vin-neutral-200/50 rounded-3xl p-8 lg:p-10 h-full transition-all duration-700 group-hover:bg-white group-hover:shadow-2xl group-hover:shadow-vin-peachfuzz/10 group-hover:-translate-y-4 group-hover:scale-105">
                  
                  {/* Step Header - Layered Harmony */}
                  <div className="flex items-center gap-3 mb-8">
                    {/* Number Badge with Glow */}
                    <div className="relative">
                      <div className="w-12 h-12 bg-gradient-to-br from-vin-peachfuzz to-vin-primary-500 rounded-2xl font-bold text-lg flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all duration-300">
                        3
                      </div>
                      {/* Subtle Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-vin-peachfuzz/80 to-vin-primary-400 rounded-2xl blur-sm opacity-30 -z-10 group-hover:opacity-50 transition-opacity duration-300"></div>
                    </div>
                    
                    {/* Icon Badge with Matching Treatment */}
                    <div className="relative">
                      <div className="w-12 h-12 bg-gradient-to-br from-vin-peachfuzz/20 to-vin-peachfuzz/30 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-sm border border-vin-peachfuzz/20">
                        <svg className="w-6 h-6 text-vin-peachfuzz" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                      </div>
                      {/* Matching Subtle Glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-vin-peachfuzz/30 to-vin-peachfuzz/20 rounded-2xl blur-sm opacity-50 -z-10 group-hover:opacity-70 transition-opacity duration-300"></div>
                    </div>
                    
                    {/* Step Indicator */}
                    <div className="hidden sm:flex items-center text-sm text-vin-neutral-500 font-medium">
                      STEG 3 AV 3
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-6">
                    <h3 className="text-2xl lg:text-3xl font-bold text-vin-neutral-900 group-hover:text-vin-primary-600 transition-colors duration-500">
                      Lansering & support
                    </h3>
                    <p className="text-vin-neutral-700 text-lg leading-relaxed group-hover:text-vin-neutral-800 transition-colors duration-300">
                      Din sida går live och du får full äganderätt. Vill du ha hjälp med uppdateringar eller SEO finns vi där.
                    </p>
                    
                    {/* Feature list */}
                    <ul className="space-y-3 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                      <li className="flex items-center text-vin-neutral-600">
                        <div className="w-2 h-2 bg-vin-peachfuzz rounded-full mr-3" />
                        Full äganderätt
                      </li>
                      <li className="flex items-center text-vin-neutral-600">
                        <div className="w-2 h-2 bg-vin-peachfuzz rounded-full mr-3" />
                        Efterföljande support
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.li>
            </ol>


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
            Vad gör oss annorlunda?
          </motion.h2>
          <motion.p 
            initial={{opacity:0, y:20}} 
            whileInView={{opacity:1, y:0}} 
            transition={{duration:0.6, delay:0.1}}
            className="text-vin-neutral-700 text-base sm:text-lg max-w-2xl mx-auto"
          >
            Byråkvalitet – utan byråpriser
          </motion.p>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
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
            <p className="text-vin-neutral-700">Hemsidor klara på under en vecka – inte månader</p>
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
            <h3 className="text-xl font-semibold text-vin-neutral-900 mb-4">Prisvärda lösningar</h3>
            <p className="text-vin-neutral-700">Från 5000 kr för en enkel sida. AI gör jobbet snabbare, du slipper betala för dyr overhead</p>
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
            <h3 className="text-xl font-semibold text-vin-neutral-900 mb-4">Full äganderätt</h3>
            <p className="text-vin-neutral-700">Du betalar en gång och äger din hemsida för alltid. Ingen inlåsning, inga dolda avgifter</p>
          </motion.div>

          {/* Feature 4 */}
          <motion.div 
            initial={{opacity:0, y:20}} 
            whileInView={{opacity:1, y:0}} 
            transition={{duration:0.6, delay:0.3}}
            className="text-center p-6 sm:p-8"
          >
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-vin-primary-100 to-vin-primary-200 rounded-2xl flex items-center justify-center">
              <svg className="w-8 h-8 text-vin-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-vin-neutral-900 mb-4">SEO ingår</h3>
            <p className="text-vin-neutral-700">Alla våra sidor byggs SEO-optimerade från start så att du kan synas direkt på Google</p>
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

      {/* PRICING PACKAGES SECTION */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 bg-vin-neutral-50">
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2 
            initial={{opacity:0, y:20}} 
            whileInView={{opacity:1, y:0}} 
            transition={{duration:0.6}}
            className="text-3xl sm:text-4xl font-bold text-vin-neutral-900 mb-4"
          >
            Våra paket
          </motion.h2>
          <motion.p 
            initial={{opacity:0, y:20}} 
            whileInView={{opacity:1, y:0}} 
            transition={{duration:0.6, delay:0.1}}
            className="text-vin-neutral-700 text-base sm:text-lg max-w-2xl mx-auto"
          >
            Välj det som passar ditt företag
          </motion.p>
        </div>
        
        <div className="grid gap-8 md:gap-12 lg:gap-16 md:grid-cols-2 lg:grid-cols-3">
          {/* Package 1 */}
          <motion.div 
            initial={{opacity:0, y:30}} 
            whileInView={{opacity:1, y:0}} 
            transition={{duration:0.7}}
            className="group relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-vin-primary-400/30 via-vin-secondary-400/30 to-transparent rounded-3xl blur-2xl group-hover:blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
            <div className="relative bg-white border border-vin-neutral-200 rounded-3xl p-8 lg:p-10 h-full hover:bg-white/90 transition-all duration-500 hover:shadow-accessible-lg hover:-translate-y-2">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-vin-neutral-900 mb-2">Starta enkelt</h3>
                <div className="text-3xl font-bold text-vin-primary-600 mb-4">från 5000 kr</div>
                <p className="text-vin-neutral-600">Perfekt för: Lokala företag, konsulter, enklare tjänster</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-vin-neutral-700">
                  <div className="w-2 h-2 bg-vin-primary-400 rounded-full mr-3" />
                  Upp till 5 sidor
                </li>
                <li className="flex items-center text-vin-neutral-700">
                  <div className="w-2 h-2 bg-vin-primary-400 rounded-full mr-3" />
                  SEO-optimering med AI
                </li>
                <li className="flex items-center text-vin-neutral-700">
                  <div className="w-2 h-2 bg-vin-primary-400 rounded-full mr-3" />
                  1 revision
                </li>
                <li className="flex items-center text-vin-neutral-700">
                  <div className="w-2 h-2 bg-vin-primary-400 rounded-full mr-3" />
                  Leverans på under en vecka
                </li>
              </ul>
              
              <a href="#contact" className="block w-full text-center rounded-full px-6 py-3 bg-gradient-to-r from-vin-primary-600 to-vin-secondary-600 text-white font-semibold shadow-accessible hover:shadow-accessible-lg transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-vin-primary-300">
                Boka gratis möte
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
            <div className="relative bg-white border border-vin-neutral-200 rounded-3xl p-8 lg:p-10 h-full hover:bg-white/90 transition-all duration-500 hover:shadow-accessible-lg hover:-translate-y-2">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-vin-neutral-900 mb-2">Växande företag</h3>
                <div className="text-3xl font-bold text-vin-secondary-600 mb-4">från 9500 kr</div>
                <p className="text-vin-neutral-600">Perfekt för: E-handel, tjänsteföretag, flera tjänster</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-vin-neutral-700">
                  <div className="w-2 h-2 bg-vin-secondary-400 rounded-full mr-3" />
                  Upp till 10 sidor
                </li>
                <li className="flex items-center text-vin-neutral-700">
                  <div className="w-2 h-2 bg-vin-secondary-400 rounded-full mr-3" />
                  SEO-optimering med AI
                </li>
                <li className="flex items-center text-vin-neutral-700">
                  <div className="w-2 h-2 bg-vin-secondary-400 rounded-full mr-3" />
                  Basic copy ingår
                </li>
                <li className="flex items-center text-vin-neutral-700">
                  <div className="w-2 h-2 bg-vin-secondary-400 rounded-full mr-3" />
                  2 revisioner
                </li>
                <li className="flex items-center text-vin-neutral-700">
                  <div className="w-2 h-2 bg-vin-secondary-400 rounded-full mr-3" />
                  Lansering + support
                </li>
              </ul>
              
              <a href="#contact" className="block w-full text-center rounded-full px-6 py-3 bg-gradient-to-r from-vin-secondary-600 to-vin-accent-600 text-white font-semibold shadow-accessible hover:shadow-accessible-lg transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-vin-secondary-300">
                Boka gratis möte
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
            <div className="relative bg-white border border-vin-accent-300 rounded-3xl p-8 lg:p-10 h-full hover:bg-white/90 transition-all duration-500 hover:shadow-accessible-lg hover:-translate-y-2">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-vin-neutral-900 mb-2">SEO-prenumeration</h3>
                <div className="text-3xl font-bold text-vin-accent-600 mb-4">från 500 kr/mån</div>
                <p className="text-vin-neutral-600">För dig som vill fortsätta växa efter lansering – även om du redan har en hemsida</p>
              </div>
              
              <ul className="space-y-3 mb-8">
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
                  Löpande optimering
                </li>
                <li className="flex items-center text-vin-neutral-700">
                  <div className="w-2 h-2 bg-vin-accent-400 rounded-full mr-3" />
                  Ingen bindningstid
                </li>
              </ul>
              
              <a href="/seo" className="block w-full text-center rounded-full px-6 py-3 bg-gradient-to-r from-vin-accent-600 to-vin-primary-600 text-white font-semibold shadow-accessible hover:shadow-accessible-lg transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-vin-accent-300">
                Läs mer om SEO
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ data={faqData} />

      {/* Sticky CTA */}
      <StickyCTA />
    </>
  );
}
