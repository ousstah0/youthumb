import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>

           {/* Google tag (gtag.js) */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-J1X6QZ4ZMM"></script>
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-J1X6QZ4ZMM');
            `}
          </script>


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

          <script data-cfasync="false" async type="text/javascript" src="//schoonnonform.com/fn21BLg5YLFRK31/68853"></script>

          <script data-cfasync="false" async type="text/javascript" src="//kymnelboloman.com/g1m9OvPbWLrU9THpD/68859"></script>

          



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
