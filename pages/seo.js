import SeoHead from "@/components/SeoHead";
import FAQ from "@/components/FAQ";
import faqData from "@/data/faq-seo.json";

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
      <section className="px-6 py-16 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">SEO för småföretagare – smart, enkelt och prisvärt</h1>
        <p className="text-gray-700 mb-6">
          Vi gör SEO begripligt och hanterbart. Du kan välja en teknisk engångsfix eller en prisvärd prenumeration med månadsrapport och konkreta uppgifter att genomföra.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Våra alternativ</h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li><strong>Engångsfix</strong> – teknisk optimering: meta-taggar, bilder, interna länkar och laddtid.</li>
          <li><strong>Prenumeration (500 kr/mån)</strong> – löpande uppdateringar, sökordsarbete och månadsrapporter.</li>
        </ol>

        <div className="p-4 mt-6 rounded-2xl bg-vinvira-beige">
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
          Vi tipsar om <a className="underline text-vinvira-primary" href="https://seomaskinen.se" target="_blank" rel="noreferrer">seomaskinen.se</a> – vårt enkla SEO-verktyg som visar grundläggande förbättringar. Vi kan utföra dem åt dig, eller lära dig göra dem själv.
        </p>

        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4">Vanliga frågor</h2>
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
