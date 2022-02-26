import Image from "next/image";

function TrainArticleCard(props) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer hover__anime hover:scale-105">
      {/* magazine thumbnail */}
      <div>
        <Image
          src={props.thumbnail}
          alt={props.title}
          width={382}
          height={180}
        />
      </div>
      {/* Card middle section */}
      <div className="flex flex-row items-center py-2 px-4">
        <Image
          src="https://cdn.alibaba.ir/h/desktop/assets/images/logo-alibaba-square-logo-small-1fb61159.svg"
          alt="alibaba-icon-svg"
          width={16}
          height={16}
        />
        <span className="font-body text-gray-500 font-semibold text-xs pr-1">
          مجله گردشگری علی بابا
        </span>
      </div>
      {/* Card Info Section */}
      <div className="py-2 px-4">
        <h2 className="font-body text-gray-500 font-bold text-[1rem] ">
          {props.title}
        </h2>
        <p className="pt-2 text-gray-500 font-body text-justify">
          {props.description}
        </p>
      </div>
    </div>
  );
}
export default TrainArticleCard;
