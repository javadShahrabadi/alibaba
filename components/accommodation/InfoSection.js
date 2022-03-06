import SliderContainer from "@/components/accommodation/SliderContainer";
function InfoSection() {
  return (
    <div className="flex items-center justify-between max-w-6xl mx-auto mt-10">
      <div className="w-1/2">
        <h2 className="font-body text-[#4B5259] font-bold text-2xl">
          مرجع رزرو ویلا، اقامتگاه و سوئیت
        </h2>
        <p className="font-body pt-4 text-justify pl-8">
          اگر قصد سفر دارید و به دنبال تجربه شایسته سفر هستید، یافتن اقامتگاهی
          مناسب از نخستین اقدامات شما باید باشد. علی‌بابا با همکاری جاباما،
          معتبرترین سامانه رزرو هتل و اجاره اقامتگاه، است. در سفرهای داخلی و
          خارجی، علی‌بابا با همکاری جاباما انتخاب‌های متنوعی را در اختیارتان
          می‌گذارد. اطلاعات درباره شرایط هتل یا اقامتگاه، موقعیت مکانی، عکس‌هایی
          واضح و هزینه اقامت، داده‌هایی است که در اختیار شما گذاشته می‌شود تا
          انتخاب آگاهانه‌ای داشته باشید. علاوه بر این، پوشش سراسری هتل‌های ایران
          و پوشش گسترده هتل‌های جهان، به شما کمک می‌کند تا با تنوع قابل‌توجهی از
          هتل و اقامتگاه روبه‌رو شوید.
        </p>
      </div>
      {/* slider section */}
      <div className="w-1/2 ">
        <SliderContainer />
      </div>
    </div>
  );
}
export default InfoSection;
