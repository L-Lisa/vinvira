import "@/styles/globals.css";
import { DefaultSeo } from "next-seo";
import Layout from "@/components/Layout";
import { Inter, Space_Grotesk } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const space = Space_Grotesk({ subsets: ['latin'], variable: '--font-display' });

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
      <div className={`${inter.className} ${space.variable}`}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </>
  );
}
