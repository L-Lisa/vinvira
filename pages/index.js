import SeoHead from "@/components/SeoHead";
import FAQ from "@/components/FAQ";
import faqData from "@/data/faq-home.json";
import { motion } from 'framer-motion';
import MetaBalls from "@/components/MetaBalls";
import LogoOrb from "@/components/LogoOrb";
import PrisPaket from "@/components/PrisPaket";
import StickyCTA from "@/components/StickyCTA";

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
      "email": "hej@vinvira.se",
      "availableLanguage": ["Swedish"]
    }]
  };

  return (
    <>
      <SeoHead
        title="Vinvira – Prisvärda AI-hemsidor utan månadskostnad"
        description="Snabba, SEO-optimerade hemsidor från 5000 kr. Prenumerations-SEO från 500 kr/mån. Perfekt för småföretagare som vill synas online utan onödiga kostnader."
        canonical="https://vinvira.se/"
        schemaJson={schemaOrg}
      />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden text-white min-h-screen bg-transparent">
        {/* Background SVG using CSS background */}
        <div 
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: "url('/hero-vinvira-1920x1080-bg-dark.svg')",
            backgroundSize: "cover",
            backgroundPosition: "right center",
            backgroundRepeat: "no-repeat"
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left column: text */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-xl mb-8 md:mb-0 py-8"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-[1.05] gradient-text break-words">
              Prisvärda AI-hemsidor för småföretagare – utan månadskostnad
            </h1>
            <p className="mt-6 text-white/90 text-base sm:text-lg leading-relaxed">
              Kom online snabbt med en modern hemsida som både kunder och Google älskar. Byggd med AI, redo på en vecka och utan dolda avgifter.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a 
                href="/kontakt" 
                className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-gradient-to-r from-vin-primary-600 to-vin-secondary-600 text-white font-semibold shadow-accessible hover:shadow-accessible-lg transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-vin-primary-300"
              >
                Boka gratis möte
              </a>
              <a 
                href="#prispaket" 
                className="inline-flex items-center justify-center rounded-full px-6 py-3 border border-white/20 bg-white/10 backdrop-blur hover:bg-white/15 text-white font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
              >
                Se våra tjänster
              </a>
            </div>
          </motion.div>

          {/* Right column: MetaBalls animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative w-full aspect-[16/10] overflow-hidden"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.04) 30%, rgba(255,255,255,0.02) 60%, transparent 85%)',
              backdropFilter: 'blur(8px)'
            }}
          >
            <MetaBalls
              color="#8B5CF6"
              cursorBallColor="#3B82F6"
              cursorBallSize={2}
              ballCount={15}
              animationSize={30}
              enableMouseInteraction={true}
              enableTransparency={true}
              hoverSmoothness={0.05}
              clumpFactor={1}
              speed={0.3}
            />
          </motion.div>
        </div>
      </section>

      {/* HOW WE WORK SECTION */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 bg-vin-neutral-50">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <motion.div 
            initial={{opacity:0, y:20}} 
            whileInView={{opacity:1, y:0}} 
            transition={{duration:0.6}}
            className="space-y-8"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-vin-neutral-900">Så här hjälper vi dig</h2>
            <div className="space-y-6">
              <motion.div 
                className="flex items-start space-x-4"
                initial={{opacity:0, x:-20}} 
                whileInView={{opacity:1, x:0}} 
                transition={{duration:0.8, delay:0.3}}
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-vin-primary-500 to-vin-secondary-500 text-white flex items-center justify-center font-bold text-sm">1</div>
                <div className="flex-1">
                  <div className="relative h-4 bg-vin-neutral-200 rounded-full mb-2 overflow-hidden">
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-vin-primary-500 to-vin-secondary-500 rounded-full"
                      initial={{width: 0}}
                      whileInView={{width: "100%"}}
                      transition={{duration: 1.5, delay: 0.5, ease: "easeOut"}}
                    />
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-vin-primary-400 to-vin-secondary-400 rounded-full opacity-50"
                      animate={{scale: [1, 1.05, 1]}}
                      transition={{duration: 2, repeat: Infinity, ease: "easeInOut"}}
                    />
                  </div>
                  <p className="text-vin-neutral-700 text-sm leading-relaxed">Berätta kort om din verksamhet i förväg – så kan vi träffas redan med relevanta idéer och en grund att bygga vidare på tillsammans.</p>
                </div>
              </motion.div>
              <motion.div 
                className="flex items-start space-x-4"
                initial={{opacity:0, x:-20}} 
                whileInView={{opacity:1, x:0}} 
                transition={{duration:0.8, delay:0.5}}
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-vin-primary-500 to-vin-secondary-500 text-white flex items-center justify-center font-bold text-sm">2</div>
                <div className="flex-1">
                  <div className="relative h-4 bg-vin-neutral-200 rounded-full mb-2 overflow-hidden">
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-vin-primary-500 to-vin-secondary-500 rounded-full"
                      initial={{width: 0}}
                      whileInView={{width: "100%"}}
                      transition={{duration: 1.5, delay: 0.8, ease: "easeOut"}}
                    />
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-vin-primary-400 to-vin-secondary-400 rounded-full opacity-50"
                      animate={{scale: [1, 1.05, 1]}}
                      transition={{duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3}}
                    />
                  </div>
                  <p className="text-vin-neutral-700 text-sm leading-relaxed">Vi bygger en snygg och snabb hemsida, optimerad för SEO. Du får se ett utkast och ge feedback.</p>
                </div>
              </motion.div>
              <motion.div 
                className="flex items-start space-x-4"
                initial={{opacity:0, x:-20}} 
                whileInView={{opacity:1, x:0}} 
                transition={{duration:0.8, delay:0.7}}
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-vin-primary-500 to-vin-secondary-500 text-white flex items-center justify-center font-bold text-sm">3</div>
                <div className="flex-1">
                  <div className="relative h-4 bg-vin-neutral-200 rounded-full mb-2 overflow-hidden">
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-vin-primary-500 to-vin-secondary-500 rounded-full"
                      initial={{width: 0}}
                      whileInView={{width: "100%"}}
                      transition={{duration: 1.5, delay: 1.1, ease: "easeOut"}}
                    />
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-vin-primary-400 to-vin-secondary-400 rounded-full opacity-50"
                      animate={{scale: [1, 1.05, 1]}}
                      transition={{duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.6}}
                    />
                  </div>
                  <p className="text-vin-neutral-700 text-sm leading-relaxed">Din sida går live! Du får full äganderätt, och vill du ha hjälp med löpande SEO eller uppdateringar finns vi där.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{opacity:0, scale:0.95}} 
            whileInView={{opacity:1, scale:1}} 
            transition={{duration:0.6, delay:0.2}}
            className="relative aspect-[4/3] rounded-3xl bg-gradient-to-br from-vin-primary-100/50 to-vin-secondary-100/50 border border-vin-primary-200/50 overflow-hidden"
          >
            {/* Abstract UI Illustration */}
            <div className="absolute inset-4 bg-vin-neutral-900 rounded-2xl p-6">
              <div className="space-y-3">
                <div className="relative h-3 bg-vin-neutral-800 rounded-full overflow-hidden">
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-vin-primary-400 to-vin-secondary-400 rounded-full"
                    initial={{width: 0}}
                    whileInView={{width: "85%"}}
                    transition={{duration: 2, delay: 1, ease: "easeOut"}}
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-vin-primary-300 to-vin-secondary-300 rounded-full opacity-60"
                    animate={{scale: [1, 1.02, 1], opacity: [0.6, 0.8, 0.6]}}
                    transition={{duration: 3, repeat: Infinity, ease: "easeInOut"}}
                  />
                </div>
                <div className="relative h-3 bg-vin-neutral-800 rounded-full overflow-hidden">
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-vin-secondary-400 to-vin-accent-400 rounded-full"
                    initial={{width: 0}}
                    whileInView={{width: "70%"}}
                    transition={{duration: 2, delay: 1.3, ease: "easeOut"}}
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-vin-secondary-300 to-vin-accent-300 rounded-full opacity-60"
                    animate={{scale: [1, 1.02, 1], opacity: [0.6, 0.8, 0.6]}}
                    transition={{duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1}}
                  />
                </div>
                <div className="relative h-3 bg-vin-neutral-800 rounded-full overflow-hidden">
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-vin-accent-400 to-vin-primary-400 rounded-full"
                    initial={{width: 0}}
                    whileInView={{width: "90%"}}
                    transition={{duration: 2, delay: 1.6, ease: "easeOut"}}
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-vin-accent-300 to-vin-primary-300 rounded-full opacity-60"
                    animate={{scale: [1, 1.02, 1], opacity: [0.6, 0.8, 0.6]}}
                    transition={{duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2}}
                  />
                </div>
              </div>
              {/* Glowing orbs in illustration */}
              <motion.div 
                className="absolute top-4 right-4 w-6 h-6 rounded-full bg-gradient-to-r from-vin-primary-400 to-vin-secondary-400 shadow-orb-glow"
                animate={{scale: [1, 1.1, 1], rotate: [0, 180, 360]}}
                transition={{duration: 4, repeat: Infinity, ease: "easeInOut"}}
              />
              <div className="absolute bottom-4 left-4 w-4 h-4 rounded-full bg-gradient-to-r from-vin-secondary-400 to-vin-accent-400 shadow-orb-glow-highlight"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* GRADIENT SEPARATOR */}
      <div className="h-px bg-gradient-to-r from-transparent via-vin-primary-300 to-transparent mx-4 sm:mx-6"></div>

      {/* OUR PHILOSOPHY SECTION */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 bg-vin-neutral-900 text-white">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <motion.div 
            initial={{opacity:0, y:20}} 
            whileInView={{opacity:1, y:0}} 
            transition={{duration:0.6}}
            className="space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Varför välja Vinvira?</h2>
            <p className="text-vin-neutral-200 leading-relaxed text-base sm:text-lg">
              Småföretagare förtjänar professionella hemsidor utan byråpriser. Med smart AI-teknik levererar vi samma kvalitet som de stora – men snabbare, billigare och utan krångel. Våra lösningar är:
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center text-vin-neutral-200">
                <div className="w-2 h-2 bg-vin-primary-400 rounded-full mr-3" />
                <span>Snabba att leverera</span>
              </div>
              <div className="flex items-center text-vin-neutral-200">
                <div className="w-2 h-2 bg-vin-secondary-400 rounded-full mr-3" />
                <span>Prisvärda men professionella</span>
              </div>
              <div className="flex items-center text-vin-neutral-200">
                <div className="w-2 h-2 bg-vin-accent-400 rounded-full mr-3" />
                <span>Optimerade för att både människor och sökmotorer ska hitta dig</span>
              </div>
            </div>
            <div className="pt-4">
              <a 
                href="/kontakt" 
                className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-gradient-to-r from-vin-primary-500 to-vin-secondary-500 text-white font-semibold shadow-accessible hover:shadow-accessible-lg hover:scale-105 transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-vin-primary-300"
              >
                Boka gratis möte
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{opacity:0, scale:0.95}} 
            whileInView={{opacity:1, scale:1}} 
            transition={{duration:0.6, delay:0.2}}
            className="relative flex justify-center"
          >
            {/* Sophisticated Logo Orb */}
            <LogoOrb size={320} />
          </motion.div>
        </div>
      </section>

      {/* GRADIENT SEPARATOR */}
      <div className="h-px bg-gradient-to-r from-transparent via-vin-secondary-300 to-transparent mx-4 sm:mx-6"></div>

      {/* SERVICES SECTION */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 bg-white">
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2 
            initial={{opacity:0, y:20}} 
            whileInView={{opacity:1, y:0}} 
            transition={{duration:0.6}}
            className="text-3xl sm:text-4xl font-bold text-vin-neutral-900 mb-4"
          >
            Tjänster som hjälper dig växa online
          </motion.h2>
          <motion.p 
            initial={{opacity:0, y:20}} 
            whileInView={{opacity:1, y:0}} 
            transition={{duration:0.6, delay:0.1}}
            className="text-vin-neutral-700 text-base sm:text-lg max-w-2xl mx-auto"
          >
            Professionella lösningar anpassade för småföretagare som vill växa online
          </motion.p>
        </div>
        
        <div className="grid gap-6 sm:gap-8 md:gap-12 md:grid-cols-3">
          {/* Web Development Card */}
          <motion.div 
            initial={{opacity:0, y:30}} 
            whileInView={{opacity:1, y:0}} 
            transition={{duration:0.7}}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-vin-primary-100/50 via-vin-secondary-100/50 to-vin-accent-100/50 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative bg-white border border-vin-neutral-200 rounded-3xl p-6 sm:p-8 h-full hover:bg-white/90 transition-all duration-500 hover:shadow-accessible-lg hover:-translate-y-2">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-vin-primary-500 to-vin-secondary-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-vin-neutral-900 group-hover:text-vin-primary-600 transition-colors duration-300">Webb & hemsida</h3>
              <p className="text-vin-neutral-700 mb-6 leading-relaxed">Snabba, prisvärda och optimerade – från 5000 kr. Perfekt för småföretagare som vill komma igång snabbt utan månadskostnad.</p>
              <a className="inline-flex items-center text-vin-primary-600 font-semibold hover:text-vin-primary-700 transition-colors duration-300 group-hover:translate-x-1" href="/webb">
                Läs mer
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </motion.div>
          
          {/* SEO Card */}
          <motion.div 
            initial={{opacity:0, y:30}} 
            whileInView={{opacity:1, y:0}} 
            transition={{duration:0.7, delay:0.1}}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-vin-secondary-100/50 via-vin-accent-100/50 to-vin-primary-100/50 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative bg-white border border-vin-neutral-200 rounded-3xl p-6 sm:p-8 h-full hover:bg-white/90 transition-all duration-500 hover:shadow-accessible-lg hover:-translate-y-2">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-vin-secondary-500 to-vin-accent-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-vin-neutral-900 group-hover:text-vin-secondary-600 transition-colors duration-300">SEO</h3>
              <p className="text-vin-neutral-700 mb-6 leading-relaxed">Engångsfix eller prenumeration från 500 kr/mån. Vi använder AI för att analysera, optimera och rapportera – enkelt för dig, effektivt för din sida.</p>
              <a className="inline-flex items-center text-vin-secondary-600 font-semibold hover:text-vin-secondary-700 transition-colors duration-300 group-hover:translate-x-1" href="/seo">
                Läs mer
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </motion.div>
          
          {/* Admin Support Card */}
          <motion.div 
            initial={{opacity:0, y:30}} 
            whileInView={{opacity:1, y:0}} 
            transition={{duration:0.7, delay:0.2}}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-vin-accent-100/50 via-vin-primary-100/50 to-vin-secondary-100/50 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative bg-white border border-vin-neutral-200 rounded-3xl p-6 sm:p-8 h-full hover:bg-white/90 transition-all duration-500 hover:shadow-accessible-lg hover:-translate-y-2">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-vin-accent-500 to-vin-primary-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-vin-neutral-900 group-hover:text-vin-accent-600 transition-colors duration-300">Administrativ support</h3>
              <p className="text-vin-neutral-700 mb-6 leading-relaxed">Mötesbokning, utskick, enklare design och textgranskning. Snabb hjälp när du behöver det.</p>
              <a className="inline-flex items-center text-vin-accent-600 font-semibold hover:text-vin-accent-700 transition-colors duration-300 group-hover:translate-x-1" href="/admin">
                Läs mer
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* GRADIENT SEPARATOR */}
      <div className="h-px bg-gradient-to-r from-transparent via-vin-accent-300 to-transparent mx-4 sm:mx-6"></div>

      {/* PRICING PACKAGES SECTION */}
      <PrisPaket 
        id="prispaket"
        className="scroll-mt-24 max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 bg-vin-neutral-50"
        showTitle={true}
        showDescription={true}
      />

      {/* GRADIENT SEPARATOR */}
      <div className="h-px bg-gradient-to-r from-transparent via-vin-accent-300 to-transparent mx-4 sm:mx-6"></div>

      {/* FAQ SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-20 bg-vin-neutral-50">
        <motion.div
          initial={{opacity:0, y:20}}
          whileInView={{opacity:1, y:0}}
          transition={{duration:0.6}}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-vin-neutral-900">Vanliga frågor</h2>
          <p className="text-vin-neutral-700 text-base sm:text-lg max-w-2xl mx-auto">
            Svar på de frågor vi får oftast från småföretagare som vill växa online
          </p>
        </motion.div>
        
        <div className="space-y-4">
          <motion.div
            initial={{opacity:0, y:20}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:0.6}}
            className="group"
          >
            <div className="bg-white border border-vin-neutral-200 rounded-2xl p-6 hover:bg-white/90 transition-all duration-300 hover:shadow-accessible hover:shadow-vin-primary-100">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-vin-neutral-900 mb-3 group-hover:text-vin-primary-600 transition-colors duration-300">
                    Varför är ni billigare än andra byråer?
                  </h3>
                  <p className="text-vin-neutral-700 leading-relaxed">
                    Vi använder AI för att automatisera delar av arbetet, och vi har inte stora kontor eller avdelningar att försörja. Det betyder lägre kostnad för oss – och ett bättre pris för dig. Resultatet är detsamma: en professionell hemsida som är snabb, säker och SEO-optimerad.
                  </p>
                </div>
                <div className="ml-4 w-6 h-6 rounded-full bg-gradient-to-br from-vin-primary-500 to-vin-secondary-500 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{opacity:0, y:20}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:0.6, delay:0.1}}
            className="group"
          >
            <div className="bg-white border border-vin-neutral-200 rounded-2xl p-6 hover:bg-white/90 transition-all duration-300 hover:shadow-accessible hover:shadow-vin-secondary-100">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-vin-neutral-900 mb-3 group-hover:text-vin-secondary-600 transition-colors duration-300">
                    Vad gör Vinvira?
                  </h3>
                  <p className="text-vin-neutral-700 leading-relaxed">
                    Vi hjälper småföretagare i Sverige med prisvärda hemsidor, enkel SEO från 500 kr/mån och flexibel support.
                  </p>
                </div>
                <div className="ml-4 w-6 h-6 rounded-full bg-gradient-to-br from-vin-secondary-500 to-vin-accent-500 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{opacity:0, y:20}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:0.6, delay:0.2}}
            className="group"
          >
            <div className="bg-white border border-vin-neutral-200 rounded-2xl p-6 hover:bg-white/90 transition-all duration-300 hover:shadow-accessible hover:shadow-vin-accent-100">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-vin-neutral-900 mb-3 group-hover:text-vin-accent-600 transition-colors duration-300">
                    Hur snabbt kan jag få en hemsida?
                  </h3>
                  <p className="text-vin-neutral-700 leading-relaxed">
                    En enkel sida kan vara klar på under en vecka. Mer omfattande projekt tar 2–3 veckor.
                  </p>
                </div>
                <div className="ml-4 w-6 h-6 rounded-full bg-gradient-to-br from-vin-accent-500 to-vin-primary-500 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{opacity:0, y:20}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:0.6, delay:0.3}}
            className="group"
          >
            <div className="bg-white border border-vin-neutral-200 rounded-2xl p-6 hover:bg-white/90 transition-all duration-300 hover:shadow-accessible hover:shadow-vin-accent-100">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-vin-neutral-900 mb-3 group-hover:text-vin-accent-600 transition-colors duration-300">
                    Vad kostar en hemsida?
                  </h3>
                  <p className="text-vin-neutral-700 leading-relaxed">
                    <strong>Enkel sida:</strong> från 5000 kr<br />
                    <strong>Mer omfattande:</strong> från 9500 kr<br />
                    <strong>SEO-prenumeration:</strong> från 500 kr/mån
                  </p>
                </div>
                <div className="ml-4 w-6 h-6 rounded-full bg-gradient-to-br from-vin-accent-500 to-vin-primary-500 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{opacity:0, y:20}}
          whileInView={{opacity:1, y:0}}
          transition={{duration:0.6, delay:0.3}}
          className="text-center mt-12"
        >
          <p className="text-vin-neutral-600 mb-4">Har du fler frågor?</p>
          <a 
            href="/kontakt" 
            className="inline-flex items-center text-vin-primary-600 font-semibold hover:text-vin-primary-700 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vin-primary-300 focus-visible:rounded-md px-2 py-1"
          >
            Kontakta oss
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
        
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
      </section>

      {/* CONTACT CTA SECTION */}
      <section id="contact" className="px-4 sm:px-6 py-16 sm:py-20 bg-vin-neutral-900 text-white text-center">
        <motion.div
          initial={{opacity:0, y:20}}
          whileInView={{opacity:1, y:0}}
          transition={{duration:0.6}}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Redo att växa online?</h2>
          <p className="text-vin-neutral-200 mb-8 max-w-2xl mx-auto text-base sm:text-lg"><a className="underline hover:text-vin-secondary-400 transition-colors" href="/kontakt">Kontakta oss</a> så kan vi hjälpa dig att komma igång direkt.</p>
          <a 
            href="/kontakt" 
            className="inline-flex items-center justify-center rounded-full px-8 py-4 bg-gradient-to-r from-vin-primary-500 to-vin-secondary-500 text-white font-semibold shadow-accessible hover:shadow-accessible-lg hover:scale-105 transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-vin-primary-300"
          >
            Kontakta oss
          </a>
        </motion.div>
      </section>

      {/* Sticky CTA */}
      <StickyCTA />
    </>
  );
}
