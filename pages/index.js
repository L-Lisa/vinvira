import SeoHead from "@/components/SeoHead";
import FAQ from "@/components/FAQ";
import faqData from "@/data/faq-home.json";
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

function OrbsBG() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {/* Large primary orb - partially off-screen */}
      <div className="absolute -left-32 top-16 w-[600px] h-[600px] rounded-full blur-3xl animate-pulse"
           style={{ 
             background: 'radial-gradient(closest-side, rgba(123,79,255,0.40), rgba(123,79,255,0) 70%)',
             animation: 'float 8s ease-in-out infinite'
           }} />
      
      {/* Secondary accent orb */}
      <div className="absolute right-[-100px] -top-16 w-[400px] h-[400px] rounded-full blur-3xl animate-pulse"
           style={{ 
             background: 'radial-gradient(closest-side, rgba(255,182,163,0.35), rgba(255,182,163,0) 70%)',
             animation: 'float 6s ease-in-out infinite reverse'
           }} />
      
      {/* Highlight orb */}
      <div className="absolute left-1/4 top-1/3 w-32 h-32 rounded-full blur-xl opacity-40"
           style={{ 
             background: 'radial-gradient(closest-side, rgba(0,224,255,0.30), transparent)',
             animation: 'float 10s ease-in-out infinite'
           }} />
      
      {/* Small floating elements */}
      <div className="absolute right-1/4 bottom-1/4 w-20 h-20 rounded-full blur-lg opacity-25"
           style={{ 
             background: 'radial-gradient(closest-side, rgba(123,79,255,0.20), transparent)',
             animation: 'float 12s ease-in-out infinite reverse'
           }} />
    </div>
  );
}

export default function Home() {
  const { scrollY } = useScroll();
  const heroImageY = useTransform(scrollY, [0, 500], [0, -100]);
  const heroTextY = useTransform(scrollY, [0, 300], [0, -50]);

  const schemaOrg = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Vinvira",
    "url": "https://vinvira.se",
    "logo": "https://vinvira.se/logo.png",
    "contactPoint": [{
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "info@vinvira.se",
      "availableLanguage": ["Swedish"]
    }]
  };

  return (
    <>
      <SeoHead
        title="Vinvira – Smidiga och prisvärda digitala tjänster för småföretagare"
        description="Snabba hemsidor utan månadskostnad, SEO från 500 kr/mån och administrativ support. Boka ett gratis startmöte idag."
        canonical="https://vinvira.se/"
        schemaJson={schemaOrg}
      />

      {/* HERO */}
      <section className="relative bg-vin-bgDark text-vin-textLight min-h-screen flex items-center overflow-hidden">
        <OrbsBG />
        <div className="max-w-6xl mx-auto px-6 py-24 grid gap-12 md:grid-cols-2 items-center">
          <motion.div 
            initial={{opacity:0, y:20}} 
            animate={{opacity:1, y:0}} 
            transition={{duration:0.8, ease:"easeOut"}}
            className="space-y-6"
            style={{ y: heroTextY }}
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-[1.05] gradient-text">
              Smidiga och prisvärda digitala tjänster för småföretagare
            </h1>
            <p className="text-vin-textLight/90 md:text-lg leading-relaxed">
              Snabb hemsida, enkel SEO och flexibel adminhjälp – utan krångel och till rätt pris.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#contact" className="inline-flex items-center justify-center rounded-full px-8 py-4 bg-gradient-to-r from-vin-primary to-vin-highlight text-white shadow-glow hover:shadow-glowHighlight hover:scale-105 transition-all duration-200 ease-in-out font-medium">
                Boka gratis möte
              </a>
              <a href="/webb" className="inline-flex items-center justify-center rounded-full px-6 py-4 bg-white/10 backdrop-blur border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-200 ease-in-out">
                Se hur det funkar
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{opacity:0, scale:0.95}} 
            animate={{opacity:1, scale:1}} 
            transition={{duration:0.8, delay:0.1, ease:"easeOut"}}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
            style={{ y: heroImageY }}
          >
            <Image
              src="/hero-vinvira.png"
              alt="Vinvira Hero Visual"
              fill
              className="object-cover"
              priority
            />
            {/* Subtle overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-6xl mx-auto px-6 py-20 bg-vin-bgLight">
        <div className="grid gap-10 md:grid-cols-3">
          <motion.div 
            initial={{opacity:0, y:20}} 
            whileInView={{opacity:1, y:0}} 
            transition={{duration:0.6}}
            className="group rounded-2xl p-[1px] bg-gradient-to-r from-vin-primary/40 to-vin-highlight/40 hover:from-vin-primary/60 hover:to-vin-highlight/60 transition-all duration-300"
          >
            <div className="rounded-2xl bg-white group-hover:bg-white/90 transition-all duration-300 shadow-soft p-8 hover:shadow-glow">
              <h3 className="text-xl font-bold mb-3">Webb & hemsida</h3>
              <p className="text-gray-600 mb-4">Snabba, stabila, enkla — utan månadskostnad.</p>
              <a className="inline-block text-vin-primary underline hover:text-vin-highlight transition-colors" href="/webb">Läs mer</a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{opacity:0, y:20}} 
            whileInView={{opacity:1, y:0}} 
            transition={{duration:0.6, delay:0.1}}
            className="group rounded-2xl p-[1px] bg-gradient-to-r from-vin-primary/40 to-vin-accent/40 hover:from-vin-primary/60 hover:to-vin-accent/60 transition-all duration-300"
          >
            <div className="rounded-2xl bg-white group-hover:bg-white/90 transition-all duration-300 shadow-soft p-8 hover:shadow-glowPink">
              <h3 className="text-xl font-bold mb-3">SEO</h3>
              <p className="text-gray-600 mb-4">Engångsfix eller prenumeration från 500 kr/mån. Tydliga rapporter och råd.</p>
              <a className="inline-block text-vin-primary underline hover:text-vin-accent transition-colors" href="/seo">Läs mer</a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{opacity:0, y:20}} 
            whileInView={{opacity:1, y:0}} 
            transition={{duration:0.6, delay:0.2}}
            className="group rounded-2xl p-[1px] bg-gradient-to-r from-vin-highlight/40 to-vin-accent/40 hover:from-vin-highlight/60 hover:to-vin-accent/60 transition-all duration-300"
          >
            <div className="rounded-2xl bg-white group-hover:bg-white/90 transition-all duration-300 shadow-soft p-8 hover:shadow-glowHighlight">
              <h3 className="text-xl font-bold mb-3">Administrativ support</h3>
              <p className="text-gray-600 mb-4">Mötesbokning, utskick, enklare design och textgranskning. Snabb hjälp.</p>
              <a className="inline-block text-vin-highlight underline hover:text-vin-accent transition-colors" href="/admin">Läs mer</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 py-20 bg-white">
        <motion.div
          initial={{opacity:0, y:20}}
          whileInView={{opacity:1, y:0}}
          transition={{duration:0.6}}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Vanliga frågor</h2>
          <FAQ items={[
            { q: "Vad gör Vinvira?", a: "Vi hjälper småföretagare och nyföretagare i Sverige med snabba hemsidor utan månadskostnader, enkel SEO från 500 kr/mån och flexibel administrativ support." },
            { q: "Hur snabbt kan jag få en hemsida?", a: "De enklaste sidorna är ofta klara på under en vecka, beroende på omfattning." }
          ]} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
        </motion.div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="px-6 py-20 bg-vin-bgDark text-vin-textLight text-center">
        <motion.div
          initial={{opacity:0, y:20}}
          whileInView={{opacity:1, y:0}}
          transition={{duration:0.6}}
        >
          <h2 className="text-3xl font-bold mb-4">Redo att växa online?</h2>
          <p className="text-vin-textLight/80 mb-8 max-w-2xl mx-auto">Fyll i formuläret eller mejla <a className="underline hover:text-vin-highlight transition-colors" href="mailto:info@vinvira.se">info@vinvira.se</a>.</p>
          <a href="mailto:info@vinvira.se" className="inline-flex items-center justify-center rounded-full px-8 py-4 bg-gradient-to-r from-vin-primary to-vin-highlight text-white shadow-glow hover:shadow-glowHighlight hover:scale-105 transition-all duration-200 ease-in-out font-medium">
            Kontakta oss
          </a>
        </motion.div>
      </section>
    </>
  );
}
