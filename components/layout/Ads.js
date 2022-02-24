import Image from "next/image";
function Slider() {
  return (
    <div className="max-w-6xl mx-auto mt-8 px-3 xl:px-0 ">
      <div className="w-full h-full">
        <Image
          src="https://cdn.alibaba.ir/h/desktop/assets/images/breaking-news/grand-prize-d-89c8cac3.png"
          alt="Ads-pic"
          width={1200}
          height={180}
          className="rounded-lg cursor-pointer"
        />
      </div>
    </div>
  );
}
export default Slider;
