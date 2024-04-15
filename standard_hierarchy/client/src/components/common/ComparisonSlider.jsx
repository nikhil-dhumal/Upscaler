import { useEffect, useState } from "react"
import { ImgComparisonSlider } from "@img-comparison-slider/react"

import UploadButton from "./UploadButton"
import AnimeSmallImg from "../../images/anime_small.jpg"
import AnimeImg from "../../images/anime.jpg"
import CitySmallImg from "../../images/city_small.jpg"
import CityImg from "../../images/city.jpg"
import PeopleSmallImg from "../../images/people_small.jpg"
import PeopleImg from "../../images/people.jpg"

const ComparisonSlider = ({ setImages, imgPairUrls, setImgPairUrls }) => {
  const [imgNum, setImgNum] = useState(1)
  const [smallImg, setSmallImg] = useState(PeopleSmallImg)
  const [enhancedimg, setEnhancedimg] = useState(PeopleImg)

  useEffect(() => {
    if (imgNum === 1) {
      setSmallImg(PeopleSmallImg)
      setEnhancedimg(PeopleImg)
    } else if (imgNum === 2) {
      setSmallImg(AnimeSmallImg)
      setEnhancedimg(AnimeImg)
    } else {
      setSmallImg(CitySmallImg)
      setEnhancedimg(CityImg)
    }
  }, [imgNum])

  return (
    <section className="comparison-section">
      <h2 className="comparison-title">
        Upscale Image Online Instantly With AI
      </h2>
      <section className="slider">
        <div className="active-slider">
          <ImgComparisonSlider className="slider-focus slider-with-animated-handle slider-opacity" hover="hover">
            <figure slot="first" className="before">
              <img slot="first" src={smallImg} alt="" />
              <figcaption>Before</figcaption>
            </figure>
            <figure slot="second" className="after">
              <img slot="second" src={enhancedimg} alt="" />
              <figcaption>After</figcaption>
            </figure>
          </ImgComparisonSlider>
        </div>
        <div className="list-sliders">
          <img src={PeopleSmallImg} alt="" onClick={() => setImgNum(1)} className={imgNum === 1 ? "active-img" : null} />
          <img src={AnimeSmallImg} alt="" onClick={() => setImgNum(2)} className={imgNum === 2 ? "active-img" : null} />
          <img src={CitySmallImg} alt="" onClick={() => setImgNum(3)} className={imgNum === 3 ? "active-img" : null} />
        </div>
      </section>
      <p className="comparison-text">
        With Upscaler's AI-powered image upscaler, you can effortlessly upscale and enhance images in just seconds. Powered by cutting-edge artificial intelligence technology, Upscaler can upscale any image to make it bigger and clearer than ever- portrait photos, anime pictures, logos, digital art, and more. Experience the magic of AI image upscaling and make your image clearer and larger now!
      </p>
      <UploadButton setImages={setImages} imgPairUrls={imgPairUrls} setImgPairUrls={setImgPairUrls} size={2} />
    </section>
  )
}

export default ComparisonSlider