import Image from "next/image";
function SliderCard(props) {
  return (
    <div className="flex flex-row items-center">
      <div className="ml-2 cursor-pointer">
        <Image
          src={props.image}
          alt={props.title}
          width={96}
          height={96}
          className="rounded-xl shrink-0"
        />
      </div>
      <div className="flex flex-col">
        <h3 className="font-bold text-[#4B5259] font-body">{props.title}</h3>
        <p>
          <span className="text-gray-400 font-body text-xs pl-1">
            برای 1 نفر
          </span>
          <span className="text-blue-400 pl-1 font-bold">{props.price}</span>
          <span className="text-gray-400 font-body text-xs">ریال</span>
        </p>
      </div>
    </div>
  );
}

export default SliderCard;
