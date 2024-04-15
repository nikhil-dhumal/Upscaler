import UploadButton from "./UploadButton"

import PortraitImgSmall from "../../images/portrait_small.jpg"
import PortraitImg from "../../images/portrait.jpg"
import HeadphoneImgSmall from "../../images/headphone_small.jpg"
import HeadphoneImg from "../../images/headphone.jpg"
import DogImgSmall from "../../images/dog_small.jpg"
import DogImg from "../../images/dog.jpg"

const Attributes = ({ setImages, imgPairUrls, setImgPairUrls }) => {
  return (
    <section className="attributes-section">
      <article className="attribute">
        <div className="attribute-img">
          <img src={PortraitImgSmall} alt="" className="small" />
          <img src={PortraitImg} alt="" className="big" />
        </div>
        <div className="attribute-details">
          <h3 className="attribute-title">Fast and Easy AI Upscaling</h3>
          <p className="attribute-text">
            No more struggle to upscale images in Photoshop. With our AI upscale image tool, you can easily and quickly upscale images in just one click. All you need to do is upload a picture to Upscaler, and AI will upscale your image up to 4x its original size for you automatically and instantly. No technical skills are needed. Enjoy fast and hassle-free AI image upscaling with Upscaler!
          </p>
          <UploadButton setImages={setImages} imgPairUrls={imgPairUrls} setImgPairUrls={setImgPairUrls} size={3} />
        </div>
      </article>
      <article className="attribute">
        <div className="attribute-details">
          <h3 className="attribute-title">Enlarge Image Without Losing Quality</h3>
          <p className="attribute-text">
            Say goodbye to blurry or pixelated images. With our AI image upscaler, you can enlarge images without compromising on the quality. Using advanced AI technology, Upscaler increases the resolution of your images while maintaining the original clarity and sharpness. Whether you need to upscale images for print, web design, or other purposes, you can be confident that your images will look outstanding and perfect!
          </p>
          <UploadButton setImages={setImages} imgPairUrls={imgPairUrls} setImgPairUrls={setImgPairUrls} size={3} />
        </div>
        <div className="attribute-img">
          <img src={HeadphoneImgSmall} alt="" className="small" />
          <img src={HeadphoneImg} alt="" className="big" />
        </div>
      </article>
      <article className="attribute">
        <div className="attribute-img">
          <img src={DogImgSmall} alt="" className="small" />
          <img src={DogImg} alt="" className="big" />
        </div>
        <div className="attribute-details">
          <h3 className="attribute-title">Increase Image Resolution and Quality in One Go</h3>
          <p className="attribute-text">
            Upscaler does more than just make image bigger- it increases image resolution while also improving the image quality. With state-of-the-art technology, Upscaler's AI image upscaler can help you sharpen and unblur images, reduce noise, and improve colors to make your pictures more detailed and vivid in real time. Effortlessly turn low resolution image to high resolution online!
          </p>
          <UploadButton setImages={setImages} imgPairUrls={imgPairUrls} setImgPairUrls={setImgPairUrls} size={3} />
        </div>
      </article>
    </section>
  )
}

export default Attributes