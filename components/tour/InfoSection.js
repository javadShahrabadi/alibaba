import SliderContainer from "./SliderContainer";
function InfoSection() {
  return (
    <div className="max-w-6xl mx-auto mt-10">
      <div className="flex flex-row items-center justify-between ">
        {/* right of slider */}

        <div className="w-1/2">
          <h2 className="font-body text-[#4B5259] font-bold text-2xl">
            گارانتی بهترین قیمت
          </h2>
          <p className="font-body pt-4">
            داستان بسیار ساده است. برای اینکه مطمئن باشید بهترین قیمت تور در
            علی‌بابا ارائه شده است، می‌توانید باز هم در مورد تور جستجو کنید. اگر
            همان تور را با قیمت پایین‌تری در جایی دیگر دیدید، این موضوع را به
            علی‌بابا اطلاع دهید. پس از بررسی این موضوع، علی‌بابا با تخفیفی معادل
            دو برابر این اختلاف قیمت برایتان تور رزرو می‌کند.
          </p>
          <button
            type="button"
            className="font-body text-blue-400 font-semibold hover:bg-blue-100 hover__anime p-2 rounded-xl -mt-2 -mr-2"
          >
            بیشتر بخوانید
          </button>
        </div>
        {/* slider section */}
        <div className="w-1/2 ">
          <SliderContainer />
        </div>
      </div>
      <div className="mt-20 text-center">
        <h2 className="font-body text-[#4B5259] font-bold text-2xl">
          800 هزار تومان هدیه ویژه علی بابا
        </h2>
        <p className="pt-2 font-body max-w-xl mx-auto">
          سفر به کیش همیشه یکی از گزینه‌های روی میز است. جزیره‌ای آرام و زیبا در
          خلیج فارس که به خاطر داشتن امکانات رفاهی و تفریحی فراوانش، گردشگران را
          به وسوسه می‌اندازد که نه یک بار که چند بار، سفر به این جزیره را تجربه
          کنند. حالا اگر بخواهید تور کیش را از علی بابا رزرو کنید، علاوه بر آنکه
          خیالتان از رزرو تور با بهترین قیمت بازار راحت است، می‌توانید از هدیه
          ویژه علی بابا هم استفاده کنید. این هدیه ویژه کسانی است که از امکان
          خرید تور با بهترین قیمت استفاده کرده‌اند.
        </p>
        <button
          type="button"
          className="font-body text-blue-400 font-semibold hover:bg-blue-100 hover__anime p-2 rounded-xl "
        >
          بیشتر بخوانید
        </button>
      </div>
    </div>
  );
}
export default InfoSection;
