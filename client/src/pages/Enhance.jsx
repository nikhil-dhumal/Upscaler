import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDownload } from "@fortawesome/free-solid-svg-icons"

import UploadButton from "../components/common/UploadButton"
import EnhanceSlider from "../components/common/EnhanceSlider"

const Enhance = ({ images, setImages, imgPairUrls, setImgPairUrls }) => {
  const handleDownload = () => {
    const download = (image, filename) => {
      const link = document.createElement('a')
      link.href = image
      link.download = filename
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }

    imgPairUrls.forEach((pair) => {
      const enhancedImageData = pair.enhanced.replace(/^data:image\/[^;]+/, 'data:application/octet-stream')
      download(enhancedImageData, `enhanced_${pair.name}`)
    })
  }

  return (
    <section className="enhance-section">
      <h2 className="enhance-title">Upscale and Enhance Your Images Using AI</h2>
      {
        imgPairUrls.length === 0 ? (
          <UploadButton setImages={setImages} imgPairUrls={imgPairUrls} setImgPairUrls={setImgPairUrls} size={2} />
        ) : (
          <div className="btn-group">
            <UploadButton setImages={setImages} imgPairUrls={imgPairUrls} setImgPairUrls={setImgPairUrls} size={2} />
            <div className="btn large-btn dark-btn" onClick={handleDownload}>
              <FontAwesomeIcon className="btn-icon" icon={faDownload} />
              Download Images
            </div>
          </div>
        )
      }
      <EnhanceSlider images={images} imgPairUrls={imgPairUrls} />
    </section>
  )
}

export default Enhance