import SeoHead from "@/components/SeoHead";
import FAQ from "@/components/FAQ";
import faqData from "@/data/faq-admin.json";
import { motion } from 'framer-motion';

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
      <section className="px-6 py-20 bg-gradient-to-b from-vin-bgLight to-white">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1 
            initial={{opacity:0, y:20}} 
            animate={{opacity:1, y:0}} 
            transition={{duration:0.6}}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Administrativ support – hjälp när du behöver det
          </motion.h1>
          <motion.p 
            initial={{opacity:0, y:20}} 
            animate={{opacity:1, y:0}} 
            transition={{duration:0.6, delay:0.1}}
            className="text-gray-700 text-lg leading-relaxed"
          >
            Vi avlastar dig med små men viktiga uppgifter: mötesbokning, utskick, enklare design och textgranskning. Ofta kan vi börja inom 24 timmar. Pris sätts per uppdrag.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 py-16 max-w-3xl mx-auto bg-white">
        <motion.div
          initial={{opacity:0, y:20}}
          whileInView={{opacity:1, y:0}}
          transition={{duration:0.6}}
        >
          <div className="text-center mb-12">
            <a href="#contact" className="inline-flex items-center justify-center rounded-full px-8 py-4 bg-gradient-to-r from-vin-primary to-vin-accent text-white shadow-glow hover:shadow-glowPink hover:scale-105 transition-all duration-200 ease-in-out font-medium">
              Boka gratis möte
            </a>
          </div>

          <div className="mt-16">
            <motion.h2 
              initial={{opacity:0, y:20}}
              whileInView={{opacity:1, y:0}}
              transition={{duration:0.6}}
              className="text-2xl font-bold mb-6"
            >
              Vanliga frågor
            </motion.h2>
            <FAQ items={[
              { q: "Vilka uppdrag kan ni ta?", a: "Mötesbokningar, utskick, enklare design och textgranskning. Snabb hjälp." },
              { q: "Hur prissätter ni?", a: "Pris per uppdrag beroende på omfattning. Kontakta oss för en snabb offert." }
            ]} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
          </div>
        </motion.div>
      </section>
    </>
  );
}
