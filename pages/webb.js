import SeoHead from "@/components/SeoHead";
import FAQ from "@/components/FAQ";
import faqData from "@/data/faq-webb.json";

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
      <section className="px-6 py-16 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Snabb och enkel hemsida för småföretag – utan månadskostnad eller krångel</h1>
        <p className="text-gray-700 mb-6">
          På Vinvira hjälper vi dig att komma online snabbt. Välj en prisvärd, stabil hemsida som kräver minimalt underhåll — eller en
          lösning byggd på en användarvänlig plattform om du vill uppdatera själv.
        </p>

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

        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4">Vanliga frågor</h2>
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
