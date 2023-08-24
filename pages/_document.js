import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/favicon/site.webmanifest" />
          
          {/* Add the meta tag for galaksion-domain-verification */}
          <meta name="galaksion-domain-verification" content="04357e8af7bd3f94812cf4b3cddd0286562431c55aa9ec0e5f747e305d6d9d33" />
        </Head>
        <body>
          <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem", backgroundColor: "#fcfcfc", color: "#0a0a0a" }}>
            <h1 style={{ fontSize: "1.5rem" }}>Download Youtube Thumbnail</h1>
            <a href="https://your-website-url.com/privacy-policy" style={{ color: "#0a0a0a", textDecoration: "none" }}>Privacy Policy</a>
          </header>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
