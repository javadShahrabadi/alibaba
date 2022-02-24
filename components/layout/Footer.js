import Image from "next/image";
import FooterCard from "@/components/ui/FooterCard";
import BtnFooter from "@/components/ui/BtnFooter";
import {
  FaChevronLeft,
  FaChevronDown,
  FaTelegramPlane,
  FaYoutube,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { BsDot } from "react-icons/bs";
import LogoCardFooter from "@/components/ui/LogoCardFooter";
function Footer() {
  return (
    <footer className="w-full bg-white h-[600px] mt-28 border-t border-gray-200">
      <section className="max-w-6xl mx-auto mt-10">
        <div className="flex flex-row items-center justify-between">
          <FooterCard
            image="/images/rate.webp"
            title="رتبه یک سفر"
            text="معتبرترین عرضه‌کننده محصولات گردشگری در ایران"
          />
          <FooterCard
            image="/images/laptop.webp"
            title="همسفر هر سفر"
            text="ارائه تمامی خدمات سفر (پرواز، قطار، اتوبوس، هتل و تور)"
          />
          <FooterCard
            image="/images/message.webp"
            title="همسفر همه لحظات سفر"
            text="پشتیبانی و همراهی ۲۴ ساعته در تمامی مراحل سفر"
          />
        </div>
        <div className="flex flex-row justify-between items-center mt-8">
          <div>
            <h2 className="text-[#4B5259] font-body text-lg font-bold">
              اپلیکیشن علی‌بابا
            </h2>
            <div className="flex flex-row items-center">
              <p className="text-[#4B5259] font-body mt-1">
                با نصب اپلیکیشن علی‌بابا بلیط همه سفرها در جیب شماست.
              </p>
              <button
                type="button"
                className="flex font-body items-center -mt-3 mr-1 text-blue-400 hover__anime hover:bg-blue-50 p-1 rounded-xl text-sm"
              >
                مشاهده همه قابلیت ها
                <span>
                  <FaChevronLeft className="w-3 h-3 mr-1" />
                </span>
              </button>
            </div>
          </div>
          <div className="flex flex-row items-end">
            <BtnFooter
              image="https://cdn.alibaba.ir/h/desktop/assets/images/app-markets/logo-store-bazar-cb09f55a.svg"
              title="کافه بازار"
            />
            <BtnFooter
              image="https://cdn.alibaba.ir/h/desktop/assets/images/app-markets/logo-store-myket-99dcd02e.svg"
              title="مایکت"
            />
            <BtnFooter
              image="https://cdn.alibaba.ir/h/desktop/assets/images/app-markets/logo-store-sibapp-11ae58c3.svg"
              title="سیب اپ"
            />
            <BtnFooter icon="FaDownload" title="دانلود مستقیم" image="" />
          </div>
        </div>
        <div className="border-t border-gray-200 w-full mt-6    " />
        {/* bottom of divider */}
        <div className="flex flex-row mt-10">
          {/* right */}
          <div className="w-1/2">
            <div className="flex flex-row items-start justify-between">
              <div>
                <h3 className="font-body text-[#000] font-bold text-[16px]">
                  علی بابا
                </h3>
                <ul className="mt-4 flex flex-col space-y-2 font-body text-[#4B5259] text-[14px]">
                  <li className="cursor-pointer">درباره ما</li>
                  <li className="cursor-pointer">تماس با ما</li>
                  <li className="cursor-pointer">چرا علی‌بابا</li>
                  <li className="cursor-pointer">علی بابا پلاس</li>
                  <li className="cursor-pointer">مجله علی‌بابا</li>
                </ul>
              </div>
              <div>
                <h3 className="font-body text-[#000] font-bold text-[16px]">
                  راهنما
                </h3>
                <ul className="mt-4 flex flex-col space-y-2 font-body text-[#4B5259] text-[14px]">
                  <li className="cursor-pointer">راهنمای خرید</li>
                  <li className="cursor-pointer">راهنمای استرداد بلیط</li>
                  <li className="cursor-pointer">قوانین و مقررات</li>
                  <li className="cursor-pointer">پرسش و پاسخ</li>
                </ul>
              </div>
              <div>
                <h3 className="font-body text-[#000] font-bold text-[16px]">
                  اطلاعات تکمیلی
                </h3>
                <ul className="mt-4 flex flex-col space-y-2 font-body text-[#4B5259] text-[14px]">
                  <li className="cursor-pointer">باشگاه مشتریان</li>
                  <li className="cursor-pointer">فروش سازمانی</li>
                  <li className="cursor-pointer">همکاری با آژانس ها</li>
                  <li className="cursor-pointer">فرصت های شغلی</li>
                </ul>
              </div>
            </div>
            {/* tag section */}
            <div className="flex flex-row font-body text-gray-500 items-center text-[12px]">
              <span className="cursor-pointer">بلیط چارتر</span>
              <BsDot className="w-4 h-4" />
              <span className="cursor-pointer">تور کیش</span>
              <BsDot className="w-4 h-4" />
              <span className="cursor-pointer">تور استانبول</span>
              <BsDot className="w-4 h-4" />
              <span className="cursor-pointer">اجاره ویلا جاباما</span>
              <BsDot className="w-4 h-4" />
              <span className="cursor-pointer">بلیط قطار</span>
              <BsDot className="w-4 h-4" />
              <span className="cursor-pointer">خرید بلیط هواپیمای خارجی</span>
              <BsDot className="w-4 h-4" />
              <span className="cursor-pointer">اطلاعات</span>
            </div>
            <button
              type="button"
              className="flex font-body items-center mt-1 text-blue-400 hover__anime hover:bg-blue-50  rounded-xl text-sm py-1 px-2 -mr-1"
            >
              بیشتر
              <span>
                <FaChevronDown className="w-3 h-3 mr-1" />
              </span>
            </button>
          </div>

          {/* left */}
          <div className="w-1/2 text-left">
            {/* logo */}
            <div>
              <Image
                src="https://cdn.alibaba.ir/h/desktop/assets/images/shawl_logotype-d8721a14.svg"
                width={189}
                height={30}
              />
            </div>
            {/* telephone info */}
            <div className="mt-4">
              <p className="font-body text-[#4B5259] text-sm">
                تلفن پشتیبانی:
                <span className="px-2">۴۳۹۰۰۰۰۰-۰۲۱ </span>|
                <span className="pr-2">۴۹۲۷۵۰۰۰-۰۲۱</span>
              </p>
              <address className="mt-2 text-[#4B5259] font-body">
                دفتر فروش: قیطریه، بلوار اندرزگو، نبش کوچه‌ی بلوچ شمالی، پلاک ۴
              </address>
            </div>

            {/* logo section */}
            <div className="flex flex-row flex-end justify-end mt-10">
              <LogoCardFooter
                logo="https://cdn.alibaba.ir/h/desktop/assets/images/footer/ecunion-8b792f56.png"
                alt="سازمان هواپیمایی کشوری"
              />
              <LogoCardFooter
                logo="https://cdn.alibaba.ir/h/desktop/assets/images/footer/samandehi-6e2b448a.png"
                alt="logo-samandehi"
              />
              <LogoCardFooter
                logo="https://cdn.alibaba.ir/h/desktop/assets/images/footer/passenger-rights-dd64d114.svg"
                alt="حقوق مسافر"
              />
              <LogoCardFooter
                logo="https://cdn.alibaba.ir/h/desktop/assets/images/footer/aira-682b7c43.png"
                alt="دامنه نرخ بلیط شرکت‌های هواپیمایی"
              />
              <LogoCardFooter
                logo="https://cdn.alibaba.ir/h/desktop/assets/images/footer/state-airline-f45c55b2.svg"
                alt="سازمان هواپیمایی کشوری"
              />
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 w-full mt-6" />
        {/* ----------- */}
        <div className="flex flex-row items-center justify-between pt-4">
          <div>
            <p className="text-[12px] font-body text-gray-500">
              کلیه حقوق این سرویس (وب‌سایت و اپلیکیشن‌های موبایل) محفوظ و متعلق
              به شرکت سفرهای علی‌بابا می‌باشد. (نسخه 1.50.4)
            </p>
          </div>
          <div>
            <ul className="flex flex-row items-center">
              <li className="cursor-pointer mr-4">
                <FaTelegramPlane className="w-7 h-7 text-gray-500 hover:fill-[#F4B914] hover__anime" />
              </li>
              <li className="cursor-pointer mr-4">
                <FaYoutube className="w-7 h-7 text-gray-500 hover:fill-[#F4B914] hover__anime" />
              </li>
              <li className="cursor-pointer mr-4">
                <FaTwitter className="w-7 h-7 text-gray-500 hover:fill-[#F4B914] hover__anime" />
              </li>
              <li className="cursor-pointer mr-4">
                <svg
                  viewBox="0 0 32 32"
                  width="24"
                  height="24"
                  title="Aparat logo"
                  fill="#6b7280"
                  className="hover:fill-[#F4B914] hover__anime block"
                >
                  <path
                    d="M28.057 25.12l-.853 3.202a4.955 4.955 0 01-6.06 3.515l-3.02-.814a15.185 15.185 0 009.933-5.904v.001zM16.007 2.127c7.66.004 13.871 6.214 13.871 13.873a13.873 13.873 0 01-16.586 13.604A13.881 13.881 0 012.39 18.703a13.867 13.867 0 015.905-14.24 13.877 13.877 0 017.71-2.335l.002-.001zM.892 18.415a15.172 15.172 0 005.606 9.527l-2.81-.749A4.952 4.952 0 01.17 21.135l.722-2.72zm19.825-.112a3.96 3.96 0 10-1.497 7.779 3.96 3.96 0 001.497-7.779zm-9.943-1.915a3.96 3.96 0 10-1.506 7.775 3.96 3.96 0 001.506-7.775zm5.48-2.02a1.76 1.76 0 10-.656 3.46 1.76 1.76 0 00.657-3.46zm6.482-6.544a3.961 3.961 0 00-1.5 7.778 3.94 3.94 0 002.974-.607 3.96 3.96 0 001.658-4.08 3.96 3.96 0 00-3.132-3.091zm2.43-3.86l3.152.837a4.953 4.953 0 013.522 6.044l-.866 3.277a15.168 15.168 0 00-5.808-10.159v.001zm-12.38 1.945a3.962 3.962 0 10-1.496 7.782 3.962 3.962 0 001.496-7.782zM7.107.673A4.957 4.957 0 0110.868.17l2.946.768a15.176 15.176 0 00-9.746 5.524l.735-2.776A4.953 4.953 0 017.107.673z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </li>
              <li className="cursor-pointer mr-4 ">
                <FaInstagram className="w-7 h-7 text-gray-500 hover:fill-[#F4B914] hover__anime" />
              </li>
              <li className="cursor-pointer mr-4">
                <FaLinkedin className="w-7 h-7 text-gray-500 hover:fill-[#F4B914] hover__anime" />
              </li>
            </ul>
          </div>
        </div>
      </section>
    </footer>
  );
}
export default Footer;
