import Link from "next/link";
import Image from "next/image";
import { useContext, useEffect } from "react";
import NavContext from "store/nav-select-context";

const NavSearch = (props) => {
  const { path } = useContext(NavContext);

  return (
    <nav className="max-w-6xl mx-auto h-[100px]  -mt-[100px] relative rounded-tr-lg rounded-tl-lg px-16 py-6 bg-white">
      <ul className="flex flex-row items-center justify-evenly">
        <Link href="/">
          <li className="flex flex-col items-center cursor-pointer">
            <span>
              <Image src="/icons/airplane.png" width={30} height={30} />
            </span>
            <p className="text-center font-body text-[#4b5259] mt-1">
              پرواز داخلی
            </p>
            {path === "/" && (
              <div className="bg__nav-select w-full -mt-2 rounded-2xl h-[10px]" />
            )}
          </li>
        </Link>
        <Link href="/iranout">
          <li className="flex flex-col items-center cursor-pointer">
            <span>
              <Image src="/icons/airplane-global.png" width={30} height={30} />
            </span>
            <p className="text-center font-body text-[#4b5259] mt-1">
              پرواز خارجی
            </p>
            {path === "/iranout" && (
              <div className="bg__nav-select -mt-2 rounded-2xl h-[10px] w-full select__anime bg__nav_anime" />
            )}
          </li>
        </Link>
        <Link href="/train">
          <li className="flex flex-col items-center cursor-pointer">
            <span>
              <Image src="/icons/train.png" width={30} height={30} />
            </span>
            <p className="text-center font-body text-[#4b5259] mt-1">قطار</p>
            {path === "/train" && (
              <div className="bg__nav-select  -mt-2 rounded-2xl h-[10px] w-full bg__nav_anime" />
            )}
          </li>
        </Link>
        <Link href="/bus-ticket">
          <li className="flex flex-col items-center cursor-pointer">
            <span>
              <Image src="/icons/bus.png" width={30} height={30} />
            </span>
            <p className="text-center font-body text-[#4b5259] mt-1">اتوبوس</p>
            {path === "/bus-ticket" && (
              <div className="bg__nav-select -mt-2 rounded-2xl h-[10px] w-full select__anime bg__nav_anime" />
            )}
          </li>
        </Link>
        <Link href="/tour">
          <li className="flex flex-col items-center cursor-pointer">
            <span>
              <Image src="/icons/tour.png" width={30} height={30} />
            </span>
            <p className="text-center font-body text-[#4b5259] mt-1">تور</p>
            {path === "/tour" && (
              <div className="bg__nav-select -mt-2 rounded-2xl h-[10px] w-full select__anime bg__nav_anime" />
            )}
          </li>
        </Link>
        <Link href="/hotel">
          <li className="flex flex-col items-center cursor-pointer">
            <span>
              <Image src="/icons/hotel.png" width={30} height={30} />
            </span>
            <p className="text-center font-body text-[#4b5259] mt-1">هتل</p>
            {path === "/hotel" && (
              <div className="bg__nav-select -mt-2 rounded-2xl h-[10px] w-full select__anime bg__nav_anime" />
            )}
          </li>
        </Link>
        <Link href="/accommodation">
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
            {path === "/accommodation" && (
              <div className="bg__nav-select -mt-2 rounded-2xl h-[10px] w-full select__anime bg__nav_anime" />
            )}
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavSearch;
