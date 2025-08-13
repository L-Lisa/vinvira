import SeoHead from "@/components/SeoHead";
import { motion } from 'framer-motion';

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
      <section className="px-6 py-20 bg-gradient-to-b from-vin-bgLight to-white">
        <div className="max-w-6xl mx-auto text-center">
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
            <a href="#contact" className="inline-flex items-center justify-center rounded-full px-8 py-4 bg-gradient-to-r from-vin-primary to-vin-accent text-white shadow-glow hover:shadow-glowPink hover:scale-105 transition-all duration-200 ease-in-out font-medium">
              Boka gratis möte
            </a>
          </div>
        </motion.div>
      </section>
    </>
  );
}
