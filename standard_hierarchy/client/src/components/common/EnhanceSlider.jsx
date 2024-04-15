import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Mousewheel } from "swiper/modules"
import { ImgComparisonSlider } from "@img-comparison-slider/react"
import { CirclesWithBar } from "react-loader-spinner"

import 'swiper/css'
import 'swiper/css/pagination'

const EnhanceSlider = ({ images, imgPairUrls }) => {
  return (
    <>
      {
        images.length !== 0 && imgPairUrls.length === 0 && (
          <div className="enhance-slider">
            <CirclesWithBar
              height="100"
              width="100"
              color="#4fa94d"
              outerCircleColor="#4749E2"
              innerCircleColor="#4749E2"
              barColor="#4749E2"
              ariaLabel="circles-with-bar-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
        )
      }
      <Swiper
        direction="vertical"
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="enhance-slider"
      >
        {
          imgPairUrls.length > 0 && imgPairUrls.map((image, index) => (
            <SwiperSlide className="swiper-slide" key={index}>
              <ImgComparisonSlider className="slider-focus slider-with-animated-handle slider-opacity" hover="hover">
                <figure slot="first" className="before">
                  <img slot="first" src={image.original} alt="" />
                  <figcaption>Before</figcaption>
                </figure>
                <figure slot="second" className="after">
                  <img slot="second" src={image.enhanced} alt="" />
                  <figcaption>After</figcaption>
                </figure>
              </ImgComparisonSlider>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </>
  )
}

export default EnhanceSlider