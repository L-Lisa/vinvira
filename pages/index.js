import SeoHead from "@/components/SeoHead";
import FAQ from "@/components/FAQ";
import faqData from "@/data/faq-home.json";
import { motion } from 'framer-motion';
import Image from 'next/image';

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
      <section className="relative overflow-hidden text-white min-h-screen" style={{ backgroundColor: 'transparent' }}>
        {/* Background SVG as CSS background */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 w-full h-full"
          style={{
            backgroundImage: "url('/hero-vinvira-1920x1080-bg-dark.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        />

        <div className="max-w-6xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left column: text */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-xl mb-8 md:mb-0"
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-[1.05] bg-clip-text text-transparent bg-gradient-to-r from-vin-primary via-vin-highlight to-vin-accent">
              Snabba AI-hemsidor – utan månadskostnad, redo på en vecka
            </h1>
            <p className="mt-4 text-vin-haze/90 md:text-lg">
              Prisvärda, snygga och fullt optimerade hemsidor för småföretagare och nyföretagare. Levererade snabbt – utan krångel.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#contact" className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-gradient-to-r from-vin-primary to-vin-accent text-white shadow-glow transition hover:-translate-y-0.5">
                Boka gratis möte
              </a>
              <a href="/webb" className="inline-flex items-center justify-center rounded-full px-6 py-3 border border-white/20 bg-white/10 backdrop-blur hover:bg-white/15">
                Se våra tjänster
              </a>
            </div>
          </motion.div>

          {/* Right column: foreground hero image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative w-full aspect-[16/10] rounded-2xl border border-white/10 overflow-hidden"
          >
            <Image
              src="/hero-vinvira-1920x1080.webp"
              alt="Abstrakt AI-orb-bakgrund i Vinviras färger"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
              priority
            />
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

      {/* Gradient Separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-vin-primary/30 to-transparent mx-6"></div>

      {/* Our Philosophy Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 bg-vin-bgDark text-vin-white">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <motion.div 
            initial={{opacity:0, y:20}} 
            whileInView={{opacity:1, y:0}} 
            transition={{duration:0.6}}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-vin-white">Vår filosofi</h2>
            <p className="text-vin-white/80 leading-relaxed">
              Vi tror på enkla, effektiva lösningar som ger resultat. Ingen onödig komplexitet, 
              bara smart teknik som hjälper ditt företag att växa online.
            </p>
            <div className="pt-4">
              <a href="#contact" className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-gradient-to-r from-vin-primary to-vin-highlight text-white shadow-glow hover:shadow-glowHighlight hover:scale-105 transition-all duration-300 ease-out">
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

      {/* Gradient Separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-vin-highlight/30 to-transparent mx-6"></div>

      {/* Services */}
      <section className="max-w-6xl mx-auto px-6 py-20 bg-vin-bgLight">
        <div className="grid gap-10 md:grid-cols-3">
          <motion.div 
            initial={{opacity:0, y:20}} 
            whileInView={{opacity:1, y:0}} 
            transition={{duration:0.6}}
            className="group rounded-2xl p-[1px] bg-gradient-to-r from-vin-primary/40 to-vin-highlight/40 hover:from-vin-primary/60 hover:to-vin-highlight/60 transition-all duration-300 hover:scale-105"
          >
            <div className="rounded-2xl bg-white group-hover:bg-white/90 transition-all duration-300 shadow-soft p-8 hover:shadow-glow hover:shadow-xl">
              <h3 className="text-xl font-bold mb-3 text-vin-text">Webb & hemsida</h3>
              <p className="text-vin-text/70 mb-4">Snabba, stabila, enkla — utan månadskostnad.</p>
              <a className="inline-block text-vin-primary underline hover:text-vin-highlight transition-colors" href="/webb">Läs mer</a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{opacity:0, y:20}} 
            whileInView={{opacity:1, y:0}} 
            transition={{duration:0.6, delay:0.1}}
            className="group rounded-2xl p-[1px] bg-gradient-to-r from-vin-primary/40 to-vin-highlight/40 hover:from-vin-primary/60 hover:to-vin-highlight/60 transition-all duration-300 hover:scale-105"
          >
            <div className="rounded-2xl bg-white group-hover:bg-white/90 transition-all duration-300 shadow-soft p-8 hover:shadow-glow hover:shadow-xl">
              <h3 className="text-xl font-bold mb-3 text-vin-text">SEO</h3>
              <p className="text-vin-text/70 mb-4">Engångsfix eller prenumeration från 500 kr/mån. Tydliga rapporter och råd.</p>
              <a className="inline-block text-vin-primary underline hover:text-vin-highlight transition-colors" href="/seo">Läs mer</a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{opacity:0, y:20}} 
            whileInView={{opacity:1, y:0}} 
            transition={{duration:0.6, delay:0.2}}
            className="group rounded-2xl p-[1px] bg-gradient-to-r from-vin-primary/40 to-vin-highlight/40 hover:from-vin-primary/60 hover:to-vin-highlight/60 transition-all duration-300 hover:scale-105"
          >
            <div className="rounded-2xl bg-white group-hover:bg-white/90 transition-all duration-300 shadow-soft p-8 hover:shadow-glow hover:shadow-xl">
              <h3 className="text-xl font-bold mb-3 text-vin-text">Administrativ support</h3>
              <p className="text-vin-text/70 mb-4">Mötesbokning, utskick, enklare design och textgranskning. Snabb hjälp.</p>
              <a className="inline-block text-vin-primary underline hover:text-vin-highlight transition-colors" href="/admin">Läs mer</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gradient Separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-vin-accent/30 to-transparent mx-6"></div>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 py-20 bg-vin-bgLight">
        <motion.div
          initial={{opacity:0, y:20}}
          whileInView={{opacity:1, y:0}}
          transition={{duration:0.6}}
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-vin-text">Vanliga frågor</h2>
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
          <a href="mailto:info@vinvira.se" className="inline-flex items-center justify-center rounded-full px-8 py-4 bg-gradient-to-r from-vin-primary to-vin-highlight text-white shadow-glow hover:shadow-glowHighlight hover:scale-105 transition-all duration-300 ease-out font-medium">
            Kontakta oss
          </a>
        </motion.div>
      </section>
    </>
  );
}
