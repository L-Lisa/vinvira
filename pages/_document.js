import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="sv">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" type="image/svg+xml" href="/logo-vinvira.svg" />
        <link rel="icon" type="image/png" href="/logo-vinvira.svg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
