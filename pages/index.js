import SeoHead from "@/components/SeoHead";
import FAQ from "@/components/FAQ";
import faqData from "@/data/faq-home.json";
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

function OrbsBG() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {/* Large primary orb - top left */}
      <div className="absolute -left-32 top-16 w-[600px] h-[600px] rounded-full blur-3xl animate-pulse"
           style={{ 
             background: 'radial-gradient(closest-side, rgba(134,86,241,0.40), rgba(134,86,241,0) 70%)',
             animation: 'float 8s ease-in-out infinite'
           }} />
      
      {/* Highlight orb - top right */}
      <div className="absolute right-[-100px] -top-16 w-[400px] h-[400px] rounded-full blur-3xl animate-pulse"
           style={{ 
             background: 'radial-gradient(closest-side, rgba(0,224,255,0.35), rgba(0,224,255,0) 70%)',
             animation: 'float 6s ease-in-out infinite reverse'
           }} />
      
      {/* Accent orb - bottom left */}
      <div className="absolute left-1/4 bottom-1/4 w-32 h-32 rounded-full blur-xl opacity-40"
           style={{ 
             background: 'radial-gradient(closest-side, rgba(255,182,163,0.30), transparent)',
             animation: 'float 10s ease-in-out infinite'
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
        title="Vinvira – Snabbt, prisvärd hemsida utan månadskostnad"
        description="Snabba hemsidor utan månadskostnad, SEO från 500 kr/mån och administrativ support. Boka ett gratis startmöte idag."
        canonical="https://vinvira.se/"
        schemaJson={schemaOrg}
      />

      {/* HERO */}
      <section className="relative bg-vin-bgDark text-vin-white min-h-screen flex items-center overflow-hidden">
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
              Snabbt, prisvärd hemsida utan månadskostnad
            </h1>
            <p className="text-vin-white/90 md:text-lg leading-relaxed">
              Snabb hemsida, enkel SEO och flexibel adminhjälp – utan krångel och till rätt pris.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#contact" className="inline-flex items-center justify-center rounded-full px-8 py-4 bg-gradient-to-r from-vin-primary to-vin-highlight text-white shadow-glow hover:shadow-glowHighlight hover:scale-105 transition-all duration-200 ease-in-out font-medium">
                Boka möte
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
              src="/hero-vinvira-1920x1080.webp"
              alt="Vinvira Hero Visual - Snabbt, prisvärd hemsida utan månadskostnad"
              fill
              className="object-cover"
              priority
            />
            {/* Subtle overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 bg-vin-bgLight">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <motion.div 
            initial={{opacity:0, y:20}} 
            whileInView={{opacity:1, y:0}} 
            transition={{duration:0.6}}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold text-vin-text">Hur vi jobbar</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-vin-primary to-vin-highlight text-white flex items-center justify-center font-bold text-sm">1</div>
                <div className="flex-1">
                  <div className="h-4 bg-gradient-to-r from-vin-primary/20 to-vin-highlight/20 rounded-full mb-2"></div>
                  <p className="text-vin-text/70 text-sm">Gratis startmöte och planering</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-vin-primary to-vin-highlight text-white flex items-center justify-center font-bold text-sm">2</div>
                <div className="flex-1">
                  <div className="h-4 bg-gradient-to-r from-vin-primary/20 to-vin-highlight/20 rounded-full mb-2"></div>
                  <p className="text-vin-text/70 text-sm">Design och utveckling</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-vin-primary to-vin-highlight text-white flex items-center justify-center font-bold text-sm">3</div>
                <div className="flex-1">
                  <div className="h-4 bg-gradient-to-r from-vin-primary/20 to-vin-highlight/20 rounded-full mb-2"></div>
                  <p className="text-vin-text/70 text-sm">Lansering och support</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{opacity:0, scale:0.95}} 
            whileInView={{opacity:1, scale:1}} 
            transition={{duration:0.6, delay:0.2}}
            className="relative aspect-[4/3] rounded-2xl bg-gradient-to-br from-vin-primary/10 to-vin-highlight/10 border border-vin-primary/20 overflow-hidden"
          >
            {/* Abstract UI Illustration */}
            <div className="absolute inset-4 bg-vin-bgDark rounded-xl p-6">
              <div className="space-y-3">
                <div className="h-3 bg-vin-primary/30 rounded-full"></div>
                <div className="h-3 bg-vin-highlight/30 rounded-full w-3/4"></div>
                <div className="h-3 bg-vin-primary/30 rounded-full w-1/2"></div>
              </div>
              {/* Glowing orbs in illustration */}
              <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-gradient-to-r from-vin-primary to-vin-highlight shadow-orb-glow"></div>
              <div className="absolute bottom-4 left-4 w-4 h-4 rounded-full bg-gradient-to-r from-vin-highlight to-vin-accent shadow-orb-glow-highlight"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Philosophy Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 bg-white">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <motion.div 
            initial={{opacity:0, y:20}} 
            whileInView={{opacity:1, y:0}} 
            transition={{duration:0.6}}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-vin-text">Vår filosofi</h2>
            <p className="text-vin-text/80 leading-relaxed">
              Vi tror på enkla, effektiva lösningar som ger resultat. Ingen onödig komplexitet, 
              bara smart teknik som hjälper ditt företag att växa online.
            </p>
            <div className="pt-4">
              <a href="#contact" className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-gradient-to-r from-vin-primary to-vin-highlight text-white shadow-glow hover:shadow-glowHighlight hover:scale-105 transition-all duration-200 ease-in-out">
                Läs mer
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{opacity:0, scale:0.95}} 
            whileInView={{opacity:1, scale:1}} 
            transition={{duration:0.6, delay:0.2}}
            className="relative flex justify-center"
          >
            {/* Glowing orb */}
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-vin-primary to-vin-highlight shadow-orb-glow animate-pulse"></div>
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
            className="group rounded-2xl p-[1px] bg-gradient-to-r from-vin-primary/40 to-vin-highlight/40 hover:from-vin-primary/60 hover:to-vin-highlight/60 transition-all duration-300"
          >
            <div className="rounded-2xl bg-white group-hover:bg-white/90 transition-all duration-300 shadow-soft p-8 hover:shadow-glow">
              <h3 className="text-xl font-bold mb-3">SEO</h3>
              <p className="text-gray-600 mb-4">Engångsfix eller prenumeration från 500 kr/mån. Tydliga rapporter och råd.</p>
              <a className="inline-block text-vin-primary underline hover:text-vin-highlight transition-colors" href="/seo">Läs mer</a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{opacity:0, y:20}} 
            whileInView={{opacity:1, y:0}} 
            transition={{duration:0.6, delay:0.2}}
            className="group rounded-2xl p-[1px] bg-gradient-to-r from-vin-primary/40 to-vin-highlight/40 hover:from-vin-primary/60 hover:to-vin-highlight/60 transition-all duration-300"
          >
            <div className="rounded-2xl bg-white group-hover:bg-white/90 transition-all duration-300 shadow-soft p-8 hover:shadow-glow">
              <h3 className="text-xl font-bold mb-3">Administrativ support</h3>
              <p className="text-gray-600 mb-4">Mötesbokning, utskick, enklare design och textgranskning. Snabb hjälp.</p>
              <a className="inline-block text-vin-primary underline hover:text-vin-highlight transition-colors" href="/admin">Läs mer</a>
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
      <section id="contact" className="px-6 py-20 bg-vin-bgDark text-vin-white text-center">
        <motion.div
          initial={{opacity:0, y:20}}
          whileInView={{opacity:1, y:0}}
          transition={{duration:0.6}}
        >
          <h2 className="text-3xl font-bold mb-4">Redo att växa online?</h2>
          <p className="text-vin-white/80 mb-8 max-w-2xl mx-auto">Fyll i formuläret eller mejla <a className="underline hover:text-vin-highlight transition-colors" href="mailto:info@vinvira.se">info@vinvira.se</a>.</p>
          <a href="mailto:info@vinvira.se" className="inline-flex items-center justify-center rounded-full px-8 py-4 bg-gradient-to-r from-vin-primary to-vin-highlight text-white shadow-glow hover:shadow-glowHighlight hover:scale-105 transition-all duration-200 ease-in-out font-medium">
            Kontakta oss
          </a>
        </motion.div>
      </section>
    </>
  );
}
