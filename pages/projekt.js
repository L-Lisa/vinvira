import SeoHead from "@/components/SeoHead";
import { motion } from 'framer-motion';
import StickyCTA from "@/components/StickyCTA";

function OrbsBG() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10" aria-hidden="true">
      {/* Primary orb */}
      <div className="absolute left-1/4 top-1/3 w-48 h-48 rounded-full blur-2xl opacity-30"
           style={{ 
             background: 'radial-gradient(closest-side, rgba(139,92,246,0.25), transparent)',
             animation: 'float 8s ease-in-out infinite'
           }} />
      
      {/* Highlight orb */}
      <div className="absolute right-1/4 bottom-1/3 w-40 h-40 rounded-full blur-xl opacity-25"
           style={{ 
             background: 'radial-gradient(closest-side, rgba(14,165,233,0.20), transparent)',
             animation: 'float 10s ease-in-out infinite reverse'
           }} />
      
      {/* Accent orb */}
      <div className="absolute left-1/2 top-1/2 w-24 h-24 rounded-full blur-lg opacity-20"
           style={{ 
             background: 'radial-gradient(closest-side, rgba(239,68,68,0.15), transparent)',
             animation: 'float 12s ease-in-out infinite'
           }} />
    </div>
  );
}

export default function Projekt() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Våra projekt – Vinvira",
    "url": "https://vinvira.se/projekt"
  };

  return (
    <>
      <SeoHead
        title="Våra projekt – Vinvira"
        description="Se exempel på hemsidor och SEO-arbeten. Få inspiration till din nästa satsning."
        canonical="https://vinvira.se/projekt"
        schemaJson={schema}
      />
      
      {/* HERO SECTION */}
      <section className="relative px-4 sm:px-6 py-16 sm:py-20 bg-gradient-to-b from-vin-neutral-50 to-white overflow-hidden">
        <OrbsBG />
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.h1 
            initial={{opacity:0, y:20}} 
            animate={{opacity:1, y:0}} 
            transition={{duration:0.6}}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-vin-neutral-900"
          >
            Våra projekt
          </motion.h1>
          <motion.p 
            initial={{opacity:0, y:20}} 
            animate={{opacity:1, y:0}} 
            transition={{duration:0.6, delay:0.1}}
            className="text-vin-neutral-700 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto"
          >
            Här lägger vi upp ett urval av projekt. (Fyll på med case, bilder och resultat när de finns.)
          </motion.p>
        </div>
      </section>

      {/* MAIN CONTENT SECTION */}
      <section className="px-4 sm:px-6 py-16 sm:py-20 max-w-6xl mx-auto bg-white">
        <motion.div
          initial={{opacity:0, y:20}}
          whileInView={{opacity:1, y:0}}
          transition={{duration:0.6}}
          className="space-y-12"
        >
          {/* Coming Soon Section */}
          <div className="text-center max-w-3xl mx-auto">
            <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-vin-primary-100 to-vin-secondary-100 flex items-center justify-center mx-auto mb-8">
              <svg className="w-12 h-12 text-vin-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-vin-neutral-900">Projektportfölj på gång</h2>
            <p className="text-vin-neutral-700 mb-8 text-base sm:text-lg leading-relaxed">
              Vi arbetar för fullt med att samla ihop våra senaste projekt och resultat. Här kommer du snart att kunna se exempel på våra hemsidor, SEO-arbeten och andra digitala lösningar.
            </p>
            
            {/* Placeholder Projects */}
            <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
              <div className="p-6 rounded-2xl bg-vin-neutral-50 border border-vin-neutral-200">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-vin-primary-100 to-vin-primary-200 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-vin-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2 text-vin-neutral-900">Webbprojekt</h3>
                <p className="text-sm text-vin-neutral-600">Hemsidor och webbappar</p>
              </div>
              
              <div className="p-6 rounded-2xl bg-vin-neutral-50 border border-vin-neutral-200">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-vin-secondary-100 to-vin-secondary-200 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-vin-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2 text-vin-neutral-900">SEO-arbeten</h3>
                <p className="text-sm text-vin-neutral-600">Sökmotoroptimering</p>
              </div>
              
              <div className="p-6 rounded-2xl bg-vin-neutral-50 border border-vin-neutral-200">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-vin-accent-100 to-vin-accent-200 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-vin-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2 text-vin-neutral-900">Support</h3>
                <p className="text-sm text-vin-neutral-600">Administrativ assistans</p>
              </div>
            </div>
          </div>

          {/* What We're Working On */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-vin-neutral-50 to-vin-primary-50 border border-vin-neutral-200">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-vin-neutral-900">Vad vi arbetar med just nu</h2>
            <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-vin-neutral-900">Case-studier</h3>
                <p className="text-vin-neutral-700 mb-4">
                  Detaljerade beskrivningar av våra projekt, inklusive utmaningar, lösningar och slutresultat.
                </p>
                <ul className="text-sm text-vin-neutral-600 space-y-1">
                  <li>• Projektöversikt</li>
                  <li>• Tekniska lösningar</li>
                  <li>• Resultat & mätbara effekter</li>
                  <li>• Kundfeedback</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3 text-vin-neutral-900">Portfolio</h3>
                <p className="text-vin-neutral-700 mb-4">
                  Visuell presentation av våra arbetsprover med skärmdumpar, designprocesser och slutprodukter.
                </p>
                <ul className="text-sm text-vin-neutral-600 space-y-1">
                  <li>• Skärmdumpar</li>
                  <li>• Designprocesser</li>
                  <li>• Responsiv design</li>
                  <li>• Prestanda</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center pt-8">
            <p className="text-vin-neutral-600 mb-6">Vill du se vad vi kan göra för ditt företag?</p>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center rounded-full px-8 py-4 bg-gradient-to-r from-vin-primary-600 to-vin-secondary-600 text-white font-semibold shadow-accessible hover:shadow-accessible-lg hover:scale-105 transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-vin-primary-300"
            >
              Boka gratis möte
            </a>
          </div>
        </motion.div>
      </section>

      {/* Sticky CTA */}
      <StickyCTA />
    </>
  );
}
