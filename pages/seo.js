import SeoHead from "@/components/SeoHead";
import FAQ from "@/components/FAQ";
import faqData from "@/data/faq-seo.json";
import { motion } from 'framer-motion';

function OrbsBG() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {/* Highlight orb */}
      <div className="absolute left-1/3 top-1/3 w-40 h-40 rounded-full blur-2xl opacity-30"
           style={{ 
             background: 'radial-gradient(closest-side, rgba(0,224,255,0.25), transparent)',
             animation: 'float 10s ease-in-out infinite'
           }} />
      
      {/* Primary orb */}
      <div className="absolute right-1/3 bottom-1/3 w-36 h-36 rounded-full blur-xl opacity-25"
           style={{ 
             background: 'radial-gradient(closest-side, rgba(123,79,255,0.20), transparent)',
             animation: 'float 8s ease-in-out infinite reverse'
           }} />
    </div>
  );
}

export default function SEOPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "SEO",
    "provider": { "@type": "Organization", "name": "Vinvira", "url": "https://vinvira.se" },
    "description": "Enkel och prisvärd SEO för småföretagare. Engångsfix eller prenumeration från 500 kr/mån."
  };

  return (
    <>
      <SeoHead
        title="SEO för småföretagare – från 500 kr/mån | Vinvira"
        description="Engångsfix eller prenumeration från 500 kr/mån. Tydliga rapporter, konkreta råd och stöd som hjälper dig skapa bra resultat."
        canonical="https://vinvira.se/seo"
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
            SEO för småföretagare – smart, enkelt och prisvärt
          </motion.h1>
          <motion.p 
            initial={{opacity:0, y:20}} 
            animate={{opacity:1, y:0}} 
            transition={{duration:0.6, delay:0.1}}
            className="text-gray-700 text-lg leading-relaxed"
          >
            Vi gör SEO begripligt och hanterbart. Du kan välja en teknisk engångsfix eller en prisvärd prenumeration med månadsrapport och konkreta uppgifter att genomföra.
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
          <h2 className="text-2xl font-semibold mt-10 mb-3">Våra alternativ</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li><strong>Engångsfix</strong> – teknisk optimering: meta-taggar, bilder, interna länkar och laddtid.</li>
            <li><strong>Prenumeration (500 kr/mån)</strong> – löpande uppdateringar, sökordsarbete och månadsrapporter.</li>
          </ol>

          <div className="p-6 mt-6 rounded-2xl bg-gradient-to-r from-vin-primary/10 to-vin-highlight/10 border border-vin-primary/20">
            <p className="text-gray-800"><strong>Betalar du 3000 kr/mån för SEO idag?</strong> Låt oss jämföra — ofta kan vi leverera samma eller bättre värde för en tredjedel av priset.</p>
          </div>

          <h2 className="text-2xl font-semibold mt-10 mb-3">Vad innehåller månadsrapporten?</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>Rankingförändringar för prioriterade sökord</li>
            <li>Trafik- och beteendestatistik</li>
            <li>Konkreta förbättringsförslag</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-10 mb-3">Upptäck seomaskinen.se</h2>
          <p className="text-gray-700">
            Vi tipsar om <a className="underline text-vin-primary hover:text-vin-highlight transition-colors" href="https://seomaskinen.se" target="_blank" rel="noreferrer">seomaskinen.se</a> – vårt enkla SEO-verktyg som visar grundläggande förbättringar. Vi kan utföra dem åt dig, eller lära dig göra dem själv.
          </p>

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
            { q: "Hur skiljer sig engångsfix från prenumeration?", a: "Engångsfix skapar en stabil teknisk grund. Prenumeration innebär löpande arbete och rapporter." },
            { q: "Kan ni garantera resultat?", a: "SEO är långsiktigt och exakta placeringar kan inte garanteras, särskilt när du gör arbetet själv. Vi garanterar tydlig vägledning och stöd." }
          ]} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
        </div>
      </section>
    </>
  );
}
