import Image from "next/image";
function Description() {
  return (
    <div className="mt-10 max-w-6xl mx-auto mb-20">
      <div className="flex items-center justify-between">
        <div className="w-1/2">
          <h2 className="font-body text-[#4B5259] text-2xl font-bold">
            اقامتگاه علی‌بابا (جاباما)
          </h2>
          <p className="font-body mt-6 text-justify">
            علی‌بابا بزرگترین و معتبرترین سایت خرید اینترنتی بلیط هواپیما ، قطار
            و اتوبوس در کشور است که از سال ۱۳۹۳ کار خود را شروع کرده و در این
            مدت توانسته رضایت درصد قابل توجهی از کاربران را به دست بیاورد. در
            ابتدا، فروش بلیط پرواز داخلی در دستور کار علی‌بابا قرار داشت؛ اما به
            مرور امکان خرید سایر محصولات گردشگری نیز به علی‌بابا اضافه شد.
          </p>
          <h2 className="font-body text-[#4B5259] text-2xl font-bold mt-10">
            رتبه یک خرید اینترنتی بلیط سفر
          </h2>
          <p className="font-body mt-6 text-justify">
            علی‌بابا طی این سالها، اعتبار زیادی نزد مشتریان خود کسب کرده است.
            طبق نظرسنجی، ۹۷.۲ درصد از مشتریان علی‌بابا از خدمات این سامانه راضی
            بوده‌اند و استفاده از آن را به دوستان و آشنایان خود پیشنهاد
            داده‌اند. سرعت سادگی خرید اینترنتی بلیط هواپیما، اعتبار و خوشنامی،
            امکان استرداد آنلاین بلیط هواپیما و پشتیبانی ۲۴ ساعته در تمام روزهای
            هفته، رتبه یک فروش بلیط را از آنِ علی‌بابا کرده است.
          </p>
        </div>
        <div>
          <Image
            src="https://cdn.alibaba.ir/h/desktop/assets/images/illustration-14a71e51.png"
            alt="bag-pic"
            width={500}
            height={360}
          />
        </div>
      </div>
    </div>
  );
}
export default Description;
