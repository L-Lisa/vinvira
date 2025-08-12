import SeoHead from "@/components/SeoHead";
import FAQ from "@/components/FAQ";
import faqData from "@/data/faq-admin.json";

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
      <section className="px-6 py-16 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Administrativ support – hjälp när du behöver det</h1>
        <p className="text-gray-700 mb-6">
          Vi avlastar dig med små men viktiga uppgifter: mötesbokning, utskick, enklare design och textgranskning. Ofta kan vi börja inom 24 timmar. Pris sätts per uppdrag.
        </p>

        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4">Vanliga frågor</h2>
          <FAQ items={[
            { q: "Vilka uppdrag kan ni ta?", a: "Mötesbokningar, utskick, enklare design och textgranskning. Snabb hjälp." },
            { q: "Hur prissätter ni?", a: "Pris per uppdrag beroende på omfattning. Kontakta oss för en snabb offert." }
          ]} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
        </div>
      </section>
    </>
  );
}
