import SeoHead from "@/components/SeoHead";
import FAQ from "@/components/FAQ";
import faqData from "@/data/faq-webb.json";
import { motion } from 'framer-motion';

function OrbsBG() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {/* Primary orb */}
      <div className="absolute left-1/4 top-1/4 w-48 h-48 rounded-full blur-2xl opacity-30"
           style={{ 
             background: 'radial-gradient(closest-side, rgba(123,79,255,0.25), transparent)',
             animation: 'float 8s ease-in-out infinite'
           }} />
      
      {/* Accent orb */}
      <div className="absolute right-1/4 bottom-1/4 w-32 h-32 rounded-full blur-xl opacity-25"
           style={{ 
             background: 'radial-gradient(closest-side, rgba(255,182,163,0.20), transparent)',
             animation: 'float 6s ease-in-out infinite reverse'
           }} />
    </div>
  );
}

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
        schemaJson={serviceSchema}
      />
      
      {/* Hero Section */}
      <section className="relative px-6 py-20 bg-gradient-to-b from-vin-bgLight to-white overflow-hidden">
        <OrbsBG />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.h1 
            initial={{opacity:0, y:20}} 
            animate={{opacity:1, y:0}} 
            transition={{duration:0.6}}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Snabb och enkel hemsida för småföretag – utan månadskostnad eller krångel
          </motion.h1>
          <motion.p 
            initial={{opacity:0, y:20}} 
            animate={{opacity:1, y:0}} 
            transition={{duration:0.6, delay:0.1}}
            className="text-gray-700 text-lg leading-relaxed"
          >
            På Vinvira hjälper vi dig att komma online snabbt. Välj en prisvärd, stabil hemsida som kräver minimalt underhåll — eller en
            lösning byggd på en användarvänlig plattform om du vill uppdatera själv.
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
          <h2 className="text-2xl font-semibold mt-10 mb-3">Så här går det till</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li><strong>Gratis startmöte</strong> – vi pratar om dina mål och idéer.</li>
            <li><strong>Utkast & feedback</strong> – du ser ett förslag och ger feedback.</li>
            <li><strong>Färdig leverans</strong> – vi publicerar din sida och hjälper dig komma igång.</li>
          </ol>

          <h2 className="text-2xl font-semibold mt-10 mb-3">Vad som ingår</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>Mobilanpassad sida med upp till 5 undersidor</li>
            <li>Grundläggande SEO (meta, alt-texter)</li>
            <li>Enkel bildredigering</li>
            <li>Uppladdning på din domän</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-10 mb-3">Olika lösningar</h2>
          <p className="text-gray-700"><strong>Snabb & prisvärd:</strong> underhållsfri lösning utan månadskostnad.</p>
          <p className="text-gray-700"><strong>Plattform:</strong> användarvänlig editor där du kan uppdatera själv. Vi finns som stöd.</p>

          <h2 className="text-2xl font-semibold mt-10 mb-3">Gratis hemsida för goda idéer</h2>
          <p className="text-gray-700">Har du ett samhällsprojekt som gör skillnad? Ibland bygger vi gratis hemsidor för initiativ med tydlig samhällsnytta.</p>

          <div className="mt-10 text-center">
            <a href="#contact" className="inline-flex items-center justify-center rounded-full px-8 py-4 bg-gradient-to-r from-vin-primary to-vin-highlight text-white shadow-glow hover:shadow-glowHighlight hover:scale-105 transition-all duration-200 ease-in-out font-medium">
              Boka gratis möte
            </a>
          </div>
        </motion.div>

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
            { q: "Ingår domän och hosting?", a: "Det kan ingå beroende på behov och vald lösning. Vi hjälper dig att välja rätt." },
            { q: "Kan jag uppdatera min hemsida själv?", a: "Ja. Välj underhållsfri lösning eller plattform som du själv kan uppdatera. Vi guidar dig oavsett val." }
          ]} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
        </div>
      </section>
    </>
  );
}
