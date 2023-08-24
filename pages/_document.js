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

          glx_df74a97d3c2a1b33cf1d72cc08cdd7ab.txt



          <script
            data-ad-client="YOUR_ADSENSE_CODE_HERE"
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          ></script>

        </Head>
        <body style={{ margin: 0, padding: 0, fontFamily: "Arial, sans-serif" }}>
          <header
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "1rem",
              backgroundColor: "#03a9f4",
              color: "#fff",
            }}
          >
            <h1 style={{ fontSize: "1.5rem" }}>Download YouTube Thumbnail</h1>
            <a
              href="https://sites.google.com/view/thumb-download/home"
              style={{
                color: "#fff",
                textDecoration: "none",
                fontSize: "0.9rem",
              }}
            >
              Privacy Policy
            </a>
          </header>
          <Main />
          <footer
            style={{
              padding: "1rem",
              backgroundColor: "#03a9f4",
              color: "#fff",
              textAlign: "center",
            }}
          >
            &copy; {new Date().getFullYear()} Your Website Name. All rights reserved.
          </footer>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
