import SliderCard from "./SliderCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";


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
                image="https://cdn.alibaba.ir/ostorage/tour-statics/Tour-Homepage-PriceGuarantee%20(4).jpg?w=96&h=96&q=75"
                title="تور تهران به کیش"
                price="29,252,000"
              />
              <SliderCard
                image="https://cdn.alibaba.ir/ostorage/tour-statics/Tour-Homepage-PriceGuarantee%20(0).jpg?w=96&h=96&q=75"
                title="تور اصفهان به کیش"
                price="18,060,000"
              />
            </div>
            <div>
              <SliderCard
                image="https://cdn.alibaba.ir/ostorage/tour-statics/Tour-Homepage-PriceGuarantee%20(9).jpg?w=96&h=96&q=75"
                title="تور تهران به مشهد"
                price="18,228,000"
              />
              <SliderCard
                image="https://cdn.alibaba.ir/ostorage/tour-statics/Tour-Homepage-PriceGuarantee%20(2).jpg?w=96&h=96&q=75"
                title="تور مشهد به کیش"
                price="24,465,000"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col">
              <SliderCard
                image="https://cdn.alibaba.ir/ostorage/tour-statics/Tour-Homepage-PriceGuarantee%20(4).jpg?w=96&h=96&q=75"
                title="تور تهران به کیش"
                price="29,252,000"
              />
              <SliderCard
                image="https://cdn.alibaba.ir/ostorage/tour-statics/Tour-Homepage-PriceGuarantee%20(0).jpg?w=96&h=96&q=75"
                title="تور اصفهان به کیش"
                price="18,060,000"
              />
            </div>
            <div>
              <SliderCard
                image="https://cdn.alibaba.ir/ostorage/tour-statics/Tour-Homepage-PriceGuarantee%20(9).jpg?w=96&h=96&q=75"
                title="تور تهران به مشهد"
                price="18,228,000"
              />
              <SliderCard
                image="https://cdn.alibaba.ir/ostorage/tour-statics/Tour-Homepage-PriceGuarantee%20(2).jpg?w=96&h=96&q=75"
                title="تور مشهد به کیش"
                price="24,465,000"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col">
              <SliderCard
                image="https://cdn.alibaba.ir/ostorage/tour-statics/Tour-Homepage-PriceGuarantee%20(4).jpg?w=96&h=96&q=75"
                title="تور تهران به کیش"
                price="29,252,000"
              />
              <SliderCard
                image="https://cdn.alibaba.ir/ostorage/tour-statics/Tour-Homepage-PriceGuarantee%20(0).jpg?w=96&h=96&q=75"
                title="تور اصفهان به کیش"
                price="18,060,000"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
export default SliderContainer;
