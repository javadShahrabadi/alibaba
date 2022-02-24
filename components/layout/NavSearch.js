import { Badge, Space } from "antd";
import Image from "next/image";
const NavSearch = () => {
  return (
    <nav className="max-w-6xl mx-auto h-[100px]  -mt-[100px] relative rounded-tr-lg rounded-tl-lg px-16 py-6 bg-white">
      <ul className="flex flex-row items-center justify-evenly">
        <li className="flex flex-col items-center cursor-pointer">
          <span>
            <Image src="/icons/airplane.png" width={30} height={30} />
          </span>
          <p className="text-center font-body text-[#4b5259] mt-1">
            پرواز داخلی
          </p>
        </li>
        <li className="flex flex-col items-center cursor-pointer">
          <span>
            <Image src="/icons/airplane-global.png" width={30} height={30} />
          </span>
          <p className="text-center font-body text-[#4b5259] mt-1">
            پرواز خارجی
          </p>
        </li>
        <li className="flex flex-col items-center cursor-pointer">
          <span>
            <Image src="/icons/train.png" width={30} height={30} />
          </span>
          <p className="text-center font-body text-[#4b5259] mt-1">قطار</p>
        </li>
        <li className="flex flex-col items-center cursor-pointer">
          <span>
            <Image src="/icons/bus.png" width={30} height={30} />
          </span>
          <p className="text-center font-body text-[#4b5259] mt-1">اتوبوس</p>
        </li>
        <li className="flex flex-col items-center cursor-pointer">
          <span>
            <Image src="/icons/tour.png" width={30} height={30} />
          </span>
          <p className="text-center font-body text-[#4b5259] mt-1">تور</p>
        </li>
        <li className="flex flex-col items-center cursor-pointer">
          <span>
            <Image src="/icons/hotel.png" width={30} height={30} />
          </span>
          <p className="text-center font-body text-[#4b5259] mt-1">هتل</p>
        </li>
        <li className="flex flex-col items-center cursor-pointer relative">
          <div className="">
            <div>
              <Image src="/icons/home.png" width={30} height={30} />
            </div>
            <small className="font-body bg-[#84e199] text-white font-bold px-0.5 py-0.5 rounded-lg absolute top-1 left-0 -ml-2">
              جدید
            </small>
          </div>

          <p className="text-center font-body text-[#4b5259] mt-1">
            ویلا و اقامتگاه
          </p>
        </li>
      </ul>
    </nav>
  );
};

export default NavSearch;
