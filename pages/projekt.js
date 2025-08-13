import SeoHead from "@/components/SeoHead";
import { motion } from 'framer-motion';

function OrbsBG() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {/* Primary orb */}
      <div className="absolute left-1/4 top-1/3 w-48 h-48 rounded-full blur-2xl opacity-30"
           style={{ 
             background: 'radial-gradient(closest-side, rgba(123,79,255,0.25), transparent)',
             animation: 'float 8s ease-in-out infinite'
           }} />
      
      {/* Highlight orb */}
      <div className="absolute right-1/4 bottom-1/3 w-40 h-40 rounded-full blur-xl opacity-25"
           style={{ 
             background: 'radial-gradient(closest-side, rgba(0,224,255,0.20), transparent)',
             animation: 'float 10s ease-in-out infinite reverse'
           }} />
      
      {/* Accent orb */}
      <div className="absolute left-1/2 top-1/2 w-24 h-24 rounded-full blur-lg opacity-20"
           style={{ 
             background: 'radial-gradient(closest-side, rgba(255,182,163,0.15), transparent)',
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
      
      {/* Hero Section */}
      <section className="relative px-6 py-20 bg-gradient-to-b from-vin-bgLight to-white overflow-hidden">
        <OrbsBG />
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.h1 
            initial={{opacity:0, y:20}} 
            animate={{opacity:1, y:0}} 
            transition={{duration:0.6}}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Våra projekt
          </motion.h1>
          <motion.p 
            initial={{opacity:0, y:20}} 
            animate={{opacity:1, y:0}} 
            transition={{duration:0.6, delay:0.1}}
            className="text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto"
          >
            Här lägger vi upp ett urval av projekt. (Fyll på med case, bilder och resultat när de finns.)
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 py-16 max-w-6xl mx-auto bg-white">
        <motion.div
          initial={{opacity:0, y:20}}
          whileInView={{opacity:1, y:0}}
          transition={{duration:0.6}}
          className="text-center"
        >
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-700 mb-8">Här kommer vi att visa exempel på våra senaste projekt och resultat.</p>
            <a href="#contact" className="inline-flex items-center justify-center rounded-full px-8 py-4 bg-gradient-to-r from-vin-primary to-vin-highlight text-white shadow-glow hover:shadow-glowHighlight hover:scale-105 transition-all duration-200 ease-in-out font-medium">
              Boka gratis möte
            </a>
          </div>
        </motion.div>
      </section>
    </>
  );
}
