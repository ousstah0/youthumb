import { useState } from "react";
import copy from "copy-to-clipboard";


const Index = () => {
  const [videoURL, setVideoURL] = useState("");
  const [thumbnailOptions, setThumbnailOptions] = useState([]);

  const getYouTubeThumbnail = (url) => {
    let regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
    let match = url.match(regExp);

    if (match && match[1].length === 11) {
      const videoURL = match[1];
      const thumbnailBaseUrl = "http://img.youtube.com/vi/";

      const options = [
        { resolution: "HD (1280x720)", code: "maxresdefault" },
        { resolution: "SD (640x480)", code: "sddefault" },
        { resolution: "Normal (480x360)", code: "hqdefault" },
        { resolution: "Medium (320x180)", code: "mqdefault" },
        { resolution: "Low (120x90)", code: "default" },
      ];

      const thumbnailOptions = options.map((option) => ({
        resolution: option.resolution,
        url: `${thumbnailBaseUrl}${videoURL}/${option.code}.jpg`,
      }));

      setThumbnailOptions(thumbnailOptions);
      setVideoURL("");
    } else {
      setThumbnailOptions([]);
    }
  };

  return (
    
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">
          Youtube Thumbnail Downloader
        </h1>
        <p className="text-gray-600">
          Download high-quality thumbnails from YouTube videos.
        </p>
      </header>
      <div className="text-center">
        <input
          type="text"
          className="w-full md:w-1/2 px-4 py-2 border rounded"
          placeholder="Enter YouTube URL"
          value={videoURL}
          onChange={(e) => setVideoURL(e.target.value)}
        />
        <button
          className="btn-blue mt-2"
          onClick={() => getYouTubeThumbnail(videoURL)}
        >
          Download Thumbnails
        </button>
      </div>
      {thumbnailOptions.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Thumbnail Options</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {thumbnailOptions.map((option, index) => (
              <div key={index} className="thumbnail-option">
                <img src={option.url} alt={`Thumbnail ${index + 1}`} />
                <button
                  className="btn-blue mt-2"
                  onClick={() => copy(option.url)}
                >
                  Copy Image URL
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

<script data-cfasync="false" async type="text/javascript" src="//fencerscoelho.com/fYvtpwqE9MNI/68862"></script>
<script data-cfasync="false" async type="text/javascript" src="//kymnelboloman.com/g1m9OvPbWLrU9THpD/68859"></script>


      {/* Added Content */}
      
      <h1>
          _________________
          </h1>
      <div className="container mx-auto">
        <h1>
          YouTube Thumbnail Downloader: Save YT Video Thumbnails in High Quality
        </h1>
        <ol>
          Looking to enhance your YouTube video content with eye-catching thumbnails?
          Welcome to Youtube-thumb-downloader.com, your go-to source for free, high-quality thumbnail images from any YouTube video.
          Whether it's Full HD (1080p), HD (720p), SD, or smaller sizes, we've got you covered.
        </ol>
        <h2 className="text-center mt-8">
          Why Use Our YouTube Thumbnail Grabber Website?</h2>
            <ol>
              Our YouTube thumbnail downloader website serves a multitude of purposes.
              From enriching presentations to aiding in animation work and various other activities,
              our platform provides the convenience of accessing compelling thumbnails from any YouTube video.
            </ol>
        <h2 className="text-xl font-semibold mb-4"> 
          How to Utilize Our YouTube Thumbnail Downloader Website?</h2>
            <p>
              Using our platform is a breeze. Follow these simple steps:
            </p>
            <ol>
              <li>Copy the URL of the YouTube video whose thumbnail you desire.</li>
              <li>Paste the URL into the input box.</li>
              <li>Instantly, a range of thumbnail sizes will be generated for you.</li>
              <li>Click the thumbnail download button, and your chosen image will be downloaded.</li>
            </ol>
            <ol>
              It's that easy! Our user-friendly interface ensures a seamless experience for every user.
            </ol>
            <h2 className="text-xl font-semibold mb-4">Is Downloading YouTube Thumbnails Legal?</h2>
            <ol>
              Absolutely, it's legal to download YouTube video thumbnails.
              However, it's important to remember that both thumbnails and videos are copyrighted material.
              Prior permission from the content owner should be sought before reuse.
            </ol>
            <h2 className="text-xl font-semibold mb-4">Compatibility Across Devices</h2>
            <ol>
              Our YouTube thumbnail downloader website is compatible with various devices,
              including Android phones, laptops, desktop systems, and non-iPhone devices.
              For iPhone users, please note that images cannot be directly saved due to iOS limitations.
            </ol>
            <h2 className="text-xl font-semibold mb-4">Copyright Considerations</h2>
            <ol>
              Keep in mind that downloaded YouTube screenshots are copyrighted by the respective video owners.
              When reusing these thumbnails, especially within the YouTube ecosystem, proper permissions are advisable.
            </ol>
            <h2 className="text-xl font-semibold mb-4">SEO Considerations for Reused Thumbnails</h2>
            <ol>
              Reusing YouTube thumbnails may not be the most SEO-friendly option.
              Google indexes most thumbnails on YouTube, distinguishing between unique and duplicate images.
              However, you can enhance reused thumbnails with unique effects through tools like Photoshop,
              making them SEO-friendly again.
            </ol>
            <h2 className="text-xl font-semibold mb-4">Enhance Your Video Content Today with Captivating Thumbnails!</h2>
            <ol>
              Experience the difference that captivating YouTube thumbnails can make.
              Elevate your video marketing strategy with Youtube-thumb-downloader.com,
              your trusted source for high-quality thumbnails.
            </ol>
      </div>

      {/* Footer */}
      <footer className="text-center mt-8">
        <p className="text-gray-600">
          Youtube-thumb-downloader.com - Copyright © 2023
        </p>
      </footer>
    </div>
  );
};

export default Index;
