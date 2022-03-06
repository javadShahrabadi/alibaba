import Image from "next/image";
import { FaChevronLeft } from "react-icons/fa";
const HotelCardItem = (props) => {
  return (
    <li className="w-[380px] h-[80px] bg-white rounded-xl shadow-sm p-4 cursor-pointer hover__anime hover:shadow-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Image src={props.image} alt={props.title} width={38} height={38} />
          <h3 className="font-body font-semibold text-[#4B5259] pr-4 mt-3">
            {props.title}
          </h3>
        </div>

        <div>
          <FaChevronLeft className="w-4 h-4 text-gray-400 mt-2" />
        </div>
      </div>
    </li>
  );
};
export default HotelCardItem;
