import UploadButton from "./UploadButton"

const HeroSection = ({ setImages, imgPairUrls, setImgPairUrls }) => {
  return (
    <section className="hero-section">
      <div className="hero-info">
        <h1 className="hero-title">
          Upscale Enlarge and enhance your images for free
        </h1>
        <p className="hero-text">
          Upscale images to increase image resolution and enhance quality in seconds with free AI image upscaler. It's 100% automatic. Try AI upscaling now!
        </p>
        <UploadButton setImages={setImages} imgPairUrls={imgPairUrls} setImgPairUrls={setImgPairUrls} size={1} />
      </div>
      <div className="hero-img">
        <div className="img-animation"></div>
      </div>
    </section>
  )
}

export default HeroSection