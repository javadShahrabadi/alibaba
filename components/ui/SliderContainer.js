import CardSlider from "./CardSlider";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import useWindowDimensions from "@/components/helpers/WindowSize";

import "swiper/css";
import "swiper/css/pagination";
const AdsImg = [
  {
    id: "Ads-id-1",
    image:
      "https://cdn.alibaba.ir/h/desktop/assets/images/breaking-news/isfahan-travel-book-c578d6ca.webp",
    title: "isfahan-travel-book",
  },
  {
    id: "Ads-id-2",
    image:
      "https://cdn.alibaba.ir/h/desktop/assets/images/breaking-news/kish-travel-book-c0a016c0.webp",
    title: "Kish-travel-book",
  },
  {
    id: "Ads-id-3",
    image:
      "https://cdn.alibaba.ir/h/desktop/assets/images/breaking-news/isfahan-travel-book-c578d6ca.webp",
    title: "isfahan-travel-book",
  },
];

function SliderContainer() {
  const { width } = useWindowDimensions();
  return (
    <div className="max-w-6xl mx-auto mt-8 h-[300px] xl:px-0">
      <Swiper
        spaceBetween={30}
        slidesPerView={width < 1000 ? 1 : 2}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        pagination={{
          dynamicBullets: true,
        }}
      >
        {AdsImg.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <CardSlider title={item.title} image={item.image} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
export default SliderContainer;
