import "@/styles/globals.css";
import { DefaultSeo } from "next-seo";
import Layout from "@/components/Layout";

const SEO = {
  titleTemplate: "%s | Vinvira",
  defaultTitle: "Vinvira – Smidiga och prisvärda digitala tjänster",
  description:
    "Snabba hemsidor utan månadskostnad, SEO från 500 kr/mån och administrativ support för småföretagare i Sverige.",
  openGraph: {
    type: "website",
    locale: "sv_SE",
    url: "https://vinvira.se",
    site_name: "Vinvira",
    images: [{ url: "https://vinvira.se/og-image.jpg", width: 1200, height: 630, alt: "Vinvira" }]
  },
  twitter: { cardType: "summary_large_image" }
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
