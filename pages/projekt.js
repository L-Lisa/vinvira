import SeoHead from "@/components/SeoHead";

export default function Projekt() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Våra projekt – Vinvira",
    "url": "https://vinvira.se/projekt"
  };

  return (
    <>
      <SeoHead
        title="Våra projekt – Vinvira"
        description="Se exempel på hemsidor och SEO-arbeten. Få inspiration till din nästa satsning."
        canonical="https://vinvira.se/projekt"
        schemaJson={schema}
      />
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Våra projekt</h1>
        <p className="text-gray-700">Här lägger vi upp ett urval av projekt. (Fyll på med case, bilder och resultat när de finns.)</p>
      </section>
    </>
  );
}
