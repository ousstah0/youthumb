import "../styles/index.css";
import { Fragment } from "react";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <DefaultSeo
        title="Youtube Thumbnail Downloader"
        description="Save YT Video Thumbnails in High Quality."
        canonical="https://youtube-thumb-downloader.com"
        openGraph={{
          url: "https://youtube-thumb-downloader.com",
          title: "Youtube Thumbnail Downloader",
          description: "Save YT Video Thumbnails in High Quality.",
          site_name: "Youtube Thumbnail Downloader",
        }}
      />

      
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
