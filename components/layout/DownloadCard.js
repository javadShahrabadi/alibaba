import Image from "next/image";
import { BsPhone } from "react-icons/bs";
import { FaAndroid, FaApple } from "react-icons/fa";
function DownloadCard() {
  return (
    <div className=" max-w-6xl mx-auto h-[295px] pr-32 justify-between bg-white flex  rounded-xl shadow-sm border border-gray-100">
      <div className="flex flex-col space-y-2 pt-16">
        <div>
          <h2 className="font-body text-xl font-semibold text-[#4B5259]">
            دانلود اپلیکیشن علی بابا
          </h2>
          <p className="font-body text-[#4B5259] text-md">
            با اپلیکیشن علی بابا سریع تر و مطمئن تر به سفر بروید.
          </p>
        </div>
        <button
          className="w-36 h-12 font-semibold bg-[#0077db] flex flex-row items-center text-white font-body px-4 py-1 rounded-xl hover:bg-[#2C569E] hover__anime"
          type="button"
        >
          <span>
            <BsPhone className="w-5 h-5 ml-2" />
          </span>
          راهنمای دانلود
        </button>
        <p className="flex item-center pt-2 text-gray-400 font-body">
          <span>
            <FaApple className="w-5 h-5 ml-2" />
          </span>
          <span>
            <FaAndroid className="w-5 h-5 ml-2" />
          </span>
          قابلیت نصب روی Android و ios
        </p>
      </div>
      <div className="relative">
        <div className="relative left-0 top-0 ">
          <Image
            src="https://cdn.alibaba.ir/h/desktop/assets/images/app-mobile/diagonal-ovals-0315dd86.png"
            width={686}
            height={318}
            alt="download-card-banner"
          />
        </div>
        <div className="absolute top-0 left-44 pt-3.5">
          <Image
            src="https://cdn.alibaba.ir/h/desktop/assets/images/app-mobile/app-mobile@1x-09aa7fed.webp"
            width={369}
            height={280}
            alt="alibaba-application-show-pic"
          />
        </div>
      </div>
    </div>
  );
}
export default DownloadCard;
