import TourCardLink from "./TourCardLink";
function AnotherTourInfo() {
  return (
    <div className="max-w-6xl mx-auto mt-10">
      <div>
        <h2 className="font-body text-2xl font-bold">سایر تورهای علی‌بابا</h2>
        <p className="font-body pt-2">
          برای افرادی که به تازگی پا به عرصه ی گردشگری گذاشته‌اند، سفر با تور
          بهترین گزینه است. چرا که راهنمایان تور به خاطر تجربه‌های زیادی که
          دارند، اطلاعات خیلی دقیقی از مقصد گردشگری دارند و استفاده از دانش
          آن‌ها می تواند ناشناخته‌هایی از مقصد رویایی‌تان را به شما نشان دهد و
          صد در صد دانستن برخی اطلاعات بهتر از این است که شما فقط آن منطقه را
          ببینید. تور خارجی و داخلی علی‌بابا خاطره یک سفر رویایی را برای شما به
          ارمغان خواهند آورد.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-y-3 gap-x-5 mt-14">
        <TourCardLink title="تور کیش" />
        <TourCardLink title="تور استانبول" />
        <TourCardLink title="تور کیش از کرمان" />
        <TourCardLink title="تور کیش از شیراز" />
        <TourCardLink title="تور کیش از اصفهان" />
        <TourCardLink title="تور کیش از تبریز" />
        <TourCardLink title="تور کیش از مشهد" />
        <TourCardLink title="تور کیش از اهواز" />
      </div>
    </div>
  );
}
export default AnotherTourInfo;
