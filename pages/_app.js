import "../styles/index.css";
import { Fragment } from "react";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <DefaultSeo
        title="Free Youtube Thumbnail Downloader"
        description="Get high-quality YouTube video thumbnails easily with our downloader. Improve your content with stunning images today!"
        canonical="https://youtube-thumb-downloader.com"
        openGraph={{
          url: "https://youtube-thumb-downloader.com",
          title: "Free Youtube Thumbnail Downloader",
          description: "Get high-quality YouTube video thumbnails easily with our downloader. Improve your content with stunning images today!",
          site_name: "Free Youtube Thumbnail Downloader",
        }}
      />

      
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
