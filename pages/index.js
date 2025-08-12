import SeoHead from "@/components/SeoHead";
import FAQ from "@/components/FAQ";
import faqData from "@/data/faq-home.json";

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
        title="Vinvira – Smidiga och prisvärda digitala tjänster för småföretagare"
        description="Snabba hemsidor utan månadskostnad, SEO från 500 kr/mån och administrativ support. Boka ett gratis startmöte idag."
        canonical="https://vinvira.se/"
        schemaJson={schemaOrg}
      />
      <section className="px-6 py-20 text-center bg-gradient-to-b from-gray-50 to-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Smidiga och prisvärda digitala tjänster för småföretagare</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-600">
          Snabb hemsida, enkel SEO och flexibel adminhjälp – utan krångel och till rätt pris.
        </p>
        <a href="#contact" className="mt-8 inline-block px-6 py-3 bg-vinvira-primary text-white rounded-2xl">Boka gratis startmöte</a>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-3">
        <div>
          <h3 className="text-2xl font-bold mb-2">Webb & hemsida</h3>
          <p className="text-gray-600">Snabba och stabila hemsidor utan månadskostnad. Eller plattformar du kan uppdatera själv.</p>
          <a className="text-vinvira-primary underline" href="/webb">Läs mer</a>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-2">SEO</h3>
          <p className="text-gray-600">Engångsfix eller prenumeration från 500 kr/mån. Tydliga rapporter och råd.</p>
          <a className="text-vinvira-primary underline" href="/seo">Läs mer</a>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-2">Administrativ support</h3>
          <p className="text-gray-600">Mötesbokning, utskick, enklare design och textgranskning. Snabb hjälp.</p>
          <a className="text-vinvira-primary underline" href="/admin">Läs mer</a>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-4">Vanliga frågor</h2>
        <FAQ items={[
          { q: "Vad gör Vinvira?", a: "Vi hjälper småföretagare och nyföretagare i Sverige med snabba hemsidor utan månadskostnader, enkel SEO från 500 kr/mån och flexibel administrativ support." },
          { q: "Hur snabbt kan jag få en hemsida?", a: "De enklaste sidorna är ofta klara på under en vecka, beroende på omfattning." }
        ]} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
      </section>

      <section id="contact" className="px-6 py-20 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-4">Redo att växa online?</h2>
        <p className="text-gray-600 mb-6">Fyll i formuläret eller mejla <a className="underline" href="mailto:info@vinvira.se">info@vinvira.se</a>.</p>
        <a href="mailto:info@vinvira.se" className="px-6 py-3 bg-vinvira-primary text-white rounded-2xl">Kontakta oss</a>
      </section>
    </>
  );
}
