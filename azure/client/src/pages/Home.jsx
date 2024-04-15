import HeroSection from "../components/common/HeroSection"
import ComparisonSlider from "../components/common/ComparisonSlider"
import Attributes from "../components/common/Attributes"
import GuiteSection from "../components/common/GuideSection"

const Home = ({ setImages, imgPairUrls, setImgPairUrls }) => {
  return (
    <>
      <HeroSection setImages={setImages} imgPairUrls={imgPairUrls} setImgPairUrls={setImgPairUrls} />
      <GuiteSection />
      <ComparisonSlider setImages={setImages} imgPairUrls={imgPairUrls} setImgPairUrls={setImgPairUrls} />
      <Attributes setImages={setImages} imgPairUrls={imgPairUrls} setImgPairUrls={setImgPairUrls} />
    </>
  )
}

export default Home