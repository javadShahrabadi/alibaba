import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { BsDot } from "react-icons/bs";
const CardListItem = (props) => {
  return (
    <div className="bg-white border border-gray-200 shadow-md rounded-xl cursor-pointer overflow-hidden w-[285px] h-[337px] hover__anime hover:shadow-lg">
      {/* image card */}
      <div>
        <Image src={props.image} alt={props.title} width={285} height={180} />
      </div>
      <div>
        <h3 className="font-body font-semibold pr-4 py-1 text-[1rem]">
          {props.title}
        </h3>

        <div className="pr-4 flex items-start">
          <div className="flex items-center">
            <span>
              <AiFillStar className="fill-[#FDB018]" />
            </span>
            <span className="pr-1 font-body text-xs">ستاره</span>
          </div>
          <span>
            <BsDot className="text-gray-300" />
          </span>
          <p className="font-body text-xs">
            {props.time.day} شب و {props.time.night} روز
          </p>
        </div>
        <p className="pr-4">
          <span className="text-blue-500 font-bold pl-1">{props.price}</span>
          <span className="font-body text-xs">ریال</span>
        </p>
        <div className="flex items-center px-4 -mt-2">
          <small className="w-3/5 font-body text-gray-600">
            {props.description}
          </small>
          <button className="w-2/5 font-body bg-blue-500 py-2 rounded-2xl text-white font-semibold mr-auto hover__anime hover:shadow-lg hover:scale-105">
            جزئیات و خرید
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardListItem;
