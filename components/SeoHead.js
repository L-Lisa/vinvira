import Head from "next/head";

export default function SeoHead({
  title = "Vinvira – Smidiga och prisvärda digitala tjänster",
  description = "Snabba hemsidor utan månadskostnad, SEO från 500 kr/mån och administrativ support för småföretagare i Sverige.",
  keywords = "billig hemsida småföretag, hjälp med SEO, administrativ assistans, webbyrå, Sverige",
  canonical = "https://vinvira.se/",
  ogImage = "/og-image.jpg",
  schemaJson = null
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonical} />
      <meta name="robots" content="index,follow" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Base technical */}
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* JSON-LD */}
      {schemaJson && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
        />
      )}
    </Head>
  );
}
