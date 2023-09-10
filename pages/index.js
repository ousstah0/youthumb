import { useState } from "react";
import copy from "copy-to-clipboard";
import Button from './Button';

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
      
      <div className="text-center mt-4">
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
    

      
    <header className="text-center mb-8" style={{ width : '60%'}}>
        <h1 className="text-3xl font-bold mb-2">
          Free YT thumbnail download: Youtube shorts thumbnail download
        </h1>
        <p className="text-gray-600">
        In the ever-evolving world of content creation, visuals play a pivotal role in capturing the attention of your audience. YouTube, being one of the largest video-sharing platforms globally, relies heavily on thumbnails to entice viewers to click and engage with your videos. If you're a content creator or marketer striving for success on YouTube, you'll understand the importance of having eye-catching thumbnails. Fortunately, we've got you covered with our Free YouTube Thumbnail Downloader, a powerful tool that lets you easily obtain high-quality thumbnails from YouTube videos.
        </p>

        {/* SEO-Optimized Text */}
  <h2 className="text-xl font-semibold mb-4">
  Get Thumbnail Youtube free download 
  </h2>
  <p>
    Grab your favorite YouTube thumbnail in various formats, including Full 4k, UHD,HD, and more. Our YouTube video THumbnail downloader supports HD, HQ, 1080p, and 4K videos.
  </p>

  <h3 className="text-lg font-semibold mt-4">
    Why Choose Our YT thumb downloader?
  </h3>
  <p>
    Our YouTube video Thumbnails Grabber is your go-to tool for saving YouTube videos Thumbnail. There are several reasons why our YouTube Thumbnail Downloader stands out from the rest:
    </p>
    <ol className="list-decimal pl-6">
    <li><h4>Ease of Use:</h4>Our user-friendly interface ensures a seamless experience for every user, whether you're a seasoned content creator or a beginner.</li>
    <li><h4>Instant Results:</h4>Copy the URL of the YouTube video for the desired thumbnail, paste it into the input box, and instantly, a range of thumbnail sizes will be generated for you.</li>
    <li><h4>High Quality:</h4>We provide high-quality thumbnails that will make your video stand out in a crowded YouTube landscape.</li>
    <li><h4>Legal and Ethical:</h4>Downloading YouTube video thumbnails is legal, but it's essential to respect copyright and seek permission from the content owner when reusing them.</li>
  
  </ol>


  <h3 className="text-lg font-semibold mt-4">
    How to Get Youtube thumbnail grabber ?
  </h3>
  <p>
    Using our YouTube video downloader is a breeze. Follow these simple steps:
  </p>
  <ol className="list-decimal pl-6">
    <li><h4>Copy the URL:</h4>Copy the URL of the YouTube video you want to download.</li>
    <li><h4>Paste the URL:</h4>Paste the URL into the input box on our website.</li>
    <li><h4>Generate Thumbnails:</h4>Within seconds, a range of thumbnail options will be generated for you to choose from.</li>
    
    <li><h4>Download:</h4>Copy the link or right-click with the mouse button and select 'Save Image As'.</li>
  </ol>


  <h3 className="text-lg font-semibold mt-4">
  Elevate Your Videos with Multiple YouTube Thumbnail Sizes
  </h3>
  <p>
  Experience the power of captivating YouTube thumbnails at our website. Download various thumbnail sizes, including HD and 4K, to enhance your video's appeal and click-through rate. Join us today for effortless YouTube thumbnail customization.  </p>

  <h3 className="text-lg font-semibold mt-4">
    Is It Legal to Download YouTube Thumbnails?
  </h3>
  <p>
  As mentioned earlier, downloading YouTube thumbnails is legal, but it's crucial to respect copyright. Both thumbnails and videos are protected by copyright, so if you plan to reuse them, it's advisable to obtain proper permissions from the content owner.  </p>

  <h3 className="text-lg font-semibold mt-4">
    Compatibility of Our YouTube Thumbnail Grabber website
  </h3>
  <p>
    Our YouTube Thumbnail Grabber website is compatible with a wide range of devices, including Android devices, laptops, and desktop systems.
  </p>

  <h3 className="text-lg font-semibold mt-4">
    Copyright Risks with Youtube shorts thumbnail downloader
  </h3>
  <p>
  It's essential to keep in mind that downloaded YouTube thumbnails are copyrighted by the respective video owners. When reusing these thumbnails, especially within the YouTube ecosystem, it's advisable to obtain proper permissions to avoid any legal issues.
  </p>
  <h3 className="text-lg font-semibold mt-4">
    Is Youtube shorts thumbnail download SEO Friendly?
  </h3>
  <p>
  While reusing YouTube thumbnails can be convenient, it may not always be the most SEO-friendly option. Google indexes most thumbnails on YouTube and distinguishes between unique and duplicate images. To make reused thumbnails more SEO-friendly, consider enhancing them with unique effects using tools like Photoshop.  </p>
  <h3 className="text-lg font-semibold mt-4">
  Enhance Your Video Content Today
  </h3>
  <p>In conclusion, captivating YouTube thumbnails can make a significant difference in your video marketing strategy. Elevate your content with visually appealing thumbnails using YouTube-Thumb-Downloader.com, your trusted source for high-quality thumbnails. With our easy-to-use tool and legal considerations in mind, you can take your YouTube content to the next level.

      So, why wait? Start enhancing your video content today and make a lasting impression on your audience with our Free YouTube Thumbnail Downloader!</p>

</header>
        
      



    {/* Footer */}
    <footer className="text-center mt-8">
      <p className="text-gray-600">
      https://www.Youtube-Thumb-Downloader.com/ - Copyright © 2023
      </p>
      <Button text="Privacy Policy" link="/privacy-policy" />
      <Button text="About Us" link="/about" />
        <Button text="Contact Us" link="/contact" />
    </footer>
  </div>
);
};

export default Index;
