import Image from "next/image";
import { BsDownload } from "react-icons/bs";
function BtnFooter(props) {
  return (
    <div
      type="button"
      className="border border-gray-200 h-[40px] mr-2 w-[120px] flex items-center px-2 rounded-xl cursor-pointer hover__anime hover:scale-105"
    >
      {props.image && (
        <Image
          src={props.image}
          width={26}
          height={26}
          alt={props.title}
          className="shrink-0"
        />
      )}
      {props.icon && <BsDownload className="w-4 h-4 -mt-1" />}
      <span className="text-[14px] font-body mr-1 text-[#4B5259] mt-0.5">
        {props.title}
      </span>
    </div>
  );
}
export default BtnFooter;
