import Image from "next/image";
import { FaChevronLeft } from "react-icons/fa";
function TrainCompanyCard(props) {
  return (
    <div className="bg-white rounded-xl shadow-md hover__anime hover:scale-105 cursor-pointer overflow-hidden">
      {/* Card Image */}
      <div className="">
        <Image
          src={props.thumbnail}
          alt={props.title}
          width={284}
          height={180}
        />
      </div>
      {/* Card info section */}
      <div className="py-2 px-4 flex flex-row items-center justify-between">
        <h3 className="font-body font-bold text-[#4B5259] text-[16px]">
          {props.title}
        </h3>
        <i>
          <FaChevronLeft className="w-3 h-3 text-[#4B5259]" />
        </i>
      </div>

    </div>
  );
}
export default TrainCompanyCard;
