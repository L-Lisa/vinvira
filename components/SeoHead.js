import Head from 'next/head';

export default function SeoHead({ 
  title, 
  description, 
  keywords, 
  canonical, 
  ogImage = "/og-image.jpg",
  ogImageAlt = "Vinvira",
  structuredData = null,
  pageType = "website"
}) {
  // Default structured data for organization
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Vinvira",
    "url": "https://vinvira.se",
    "logo": "https://vinvira.se/logo-vinvira.svg",
    "description": "Smidiga och prisvärda digitala tjänster för småföretagare i Sverige",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "SE"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "info@vinvira.se",
      "availableLanguage": ["Swedish", "English"]
    },
    "sameAs": [
      "https://seomaskin.se/"
    ],
    "foundingDate": "2024",
    "areaServed": "SE"
  };

  // Service-specific structured data
  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "provider": {
      "@type": "Organization",
      "name": "Vinvira",
      "url": "https://vinvira.se"
    },
    "serviceType": title?.includes("Webb") ? "Webbdesign" : 
                   title?.includes("SEO") ? "SEO" : 
                   title?.includes("Admin") ? "Administrativ support" : "Digitala tjänster",
    "description": description,
    "areaServed": {
      "@type": "Country",
      "name": "Sweden"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digitala tjänster",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Webbdesign",
            "description": "Snabba och prisvärda hemsidor för småföretagare"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SEO",
            "description": "Sökmotoroptimering för bättre synlighet online"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Administrativ support",
            "description": "Hjälp med administrativa uppgifter för småföretagare"
          }
        }
      ]
    }
  };

  // Use provided structured data or combine with defaults
  const finalStructuredData = structuredData || 
    (title?.includes("Webb") || title?.includes("SEO") || title?.includes("Admin") ? 
      serviceStructuredData : defaultStructuredData);

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content="index,follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="UTF-8" />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph */}
      <meta property="og:type" content={pageType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical || "https://vinvira.se"} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={ogImageAlt} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="sv_SE" />
      <meta property="og:site_name" content="Vinvira" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional SEO */}
      <meta name="author" content="Vinvira" />
      <meta name="language" content="Swedish" />
      <meta name="geo.region" content="SE" />
      <meta name="geo.country" content="Sweden" />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(finalStructuredData)
        }}
      />
      
      {/* Preconnect for Performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Favicon */}
      <link rel="icon" type="image/svg+xml" href="/logo-vinvira.svg" />
      <link rel="icon" type="image/png" href="/logo-vinvira.svg" />
    </Head>
  );
}
