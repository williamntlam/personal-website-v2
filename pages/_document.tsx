import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/website-icon.png" />
        <link rel="apple-touch-icon" href="/website-icon.png" />
        <meta name="description" content="William Lam - Software Developer & Computer Science Student" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
