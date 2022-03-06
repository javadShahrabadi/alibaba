import SliderCard from "@/components/tour/SliderCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

// -------------------------

function SliderContainer() {
  return (
    <div className="bg-white px-4 pt-6 pb-2 rounded-xl shadow-sm border border-gray-100">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="h-[250px]"
      >
        <SwiperSlide>
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col">
              <SliderCard
                image="https://cdn.alibaba.ir/ostorage/tour-statics/kish_island_image_accommodation.jpg?w=96&h=96&q=75"
                title="کیش"
                price="875,000"
              />
              <SliderCard
                image="https://cdn.alibaba.ir/ostorage/tour-statics/qeshm_image_accommodation.jpg?w=96&h=96&q=75"
                title="قشم"
                price="439,000"
              />
            </div>
            <div>
              <SliderCard
                image="https://cdn.alibaba.ir/ostorage/tour-statics/tehran_image_accommodation.jpg?w=96&h=96&q=75"
                title="تهران"
                price="842,000"
              />
              <SliderCard
                image="https://cdn.alibaba.ir/ostorage/tour-statics/mashhad_image_accommodation.jpg?w=96&h=96&q=75"
                title="مشهد"
                price="280,000"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col">
              <SliderCard
                image="https://cdn.alibaba.ir/ostorage/tour-statics/ramsar_image_accommodation.jpg?w=96&h=96&q=75"
                title="رامسر"
                price="1,046,000"
              />
              <SliderCard
                image="https://cdn.alibaba.ir/ostorage/tour-statics/Tour-Homepage-PriceGuarantee%20(9).jpg?w=96&h=96&q=75"
                title="اصفهان"
                price="475,000"
              />
            </div>
            <div>
              <SliderCard
                image="https://cdn.alibaba.ir/ostorage/tour-statics/rasht_image_accommodation.jpg?w=96&h=96&q=75"
                title="رشت"
                price="376,000"
              />
              <SliderCard
                image="https://cdn.alibaba.ir/ostorage/tour-statics/kish_island_image_accommodation.jpg?w=96&h=96&q=75"
                title="کیش"
                price="875,000"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
export default SliderContainer;
