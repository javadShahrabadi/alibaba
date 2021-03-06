import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useState } from "react";
import InfoCard from "./InfoCard";
import TrainCompanyCard from "./TrainCompanyCard";
import TrainArticleCard from "./TrainArticleCard";
function InfoSection() {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="max-w-6xl mx-auto mt-20">
      <h2 className="font-body font-bold text-[#4B5259] text-2xl">بلیط قطار</h2>
      <p className="font-body text-justify mt-8">
        هر کسی که یک بار با قطار سفر کرده باشد می‌داند که قطار امن است و همین
        موضوع آن را به یکی از مناسب‌ترین وسائل نقلیه برای سفر به مقاصد دور و
        نزدیک تبدیل کرده. در سفر با قطار می‌توانید بدون نگرانی از نوسانات شرایط
        جوی، کمبود سوخت، تصادفات و... لحظات آرامی را سپری کنید. در کنار این
        موارد، موسیقی ریتمیک حرکت قطار روی ریل به خودی خود موجب آرامش سرنشینان
        می‌شود؛ حتی بعضی از مسافران ادعا کرده‌اند که این ریتم منظم موجب می‌شود
        تا خواب راحت‌تری در قطار داشته باشند.
      </p>
      <div className="flex">
        <p className={`${!showMore ? " truncate w-2/5" : "w-full"} font-body`}>
          علاوه بر امنیت، سفر با قطار مزایای دیگری هم دارد. قیمت مناسب، فضای
          صمیمی و راحت کوپه، صرف غذا در بوفه و قدم زدن در راهرو باعث می‌شود تا
          سختیِ مسیرهای طولانی به حداقل رسیده و خاطره خوشی از سفر در ذهن مسافر
          باقی بماند. بیش از 90 سال از احداث راه‌آهن و اولین سفر با قطار در
          ایران می‌گذرد، اما بسیاری از مسافران با خدمات قطارهای شبکه‌ ریلی کشور
          آشنا نیستند. به همین منظور قصد داریم شما را با امکانات و خدمات قطارهای
          ایران آشنا کنیم تا هنگام خرید آنلاین بلیط قطار، انتخاب‌های بهتری داشته
          باشید.
        </p>
        <p
          className={`text-blue-400 font-body mr-1 flex items-center cursor-pointer`}
          onClick={() => setShowMore(!showMore)}
        >
          {!showMore ? "بیشتر بخوانید" : "بستن"}
          <span className="mr-1">
            {!showMore && <FaChevronDown className="w-3 h-3" />}
            {showMore && <FaChevronUp className="w-3 h-3" />}
          </span>
        </p>
      </div>

      {/* card section */}
      <div className="grid grid-cols-3 justify-items-center mt-10 gap-x-4">
        <InfoCard
          bgPic="info__card_train-man"
          alt="model-man-pic"
          title="خرید اینترنتی بلیط قطار"
          description="خرید اینترنتی بلیط قطار مزایای زیادی دارد، از جمله: مقایسه‌ قیمت بلیط قطارهای مختلف، انتخاب دقیق ساعت حرکت قطار، انتخاب از بین قطارهای متنوع شرکت‌های ریلی، پرداخت سریع و آسان با کارت شتابی، استرداد کاملا آنلاین بلیط قطار، خرید مطمئن بلیط مقاصد پرسفر، رزرو آسان بلیط قطار در فصل‌های شلوغ و مطلع شدن از پیش‌فروش قطارها از طریق ایمیل. شما به راحتی می‌توانید با مراجعه به www.alibaba.ir بلیط قطار خود را به آسانی و با چند کلیک ساده خریداری کنید."
        />
        <InfoCard
          bgPic="info__card_train-station"
          alt="train-station-pic"
          title="استرداد آنلاین بلیط قطار"
          description="در گذشته، استرداد بلیط قطار از دغدغه‌های اصلی مسافران بود. حتی مسافرانی که بلیط را آنلاین می‌خریدند، برای استرداد آن مجبور بودند به صورت حضوری به دفاتر فروش مراجعه کنند. علی‌بابا با فراهم کردن زیرساخت‌های لازم، خدمت استرداد آنلاین بلیط قطار را به مسافران ارائه می‌کند و شما با مراجعه به حساب کاربری خود در علی‌بابا با چند کلیک ساده می‌توانید بلیط را به صورت کاملا آنلاین استرداد کنید و مبلغ آن را (پس از کسر جریمه‌ کنسلی) در حساب بانکی‌تان دریافت کنید."
        />
        <InfoCard
          bgPic="info__card_train-people"
          alt="people-pic"
          title="خرید گروهی"
          description="یکی از دغدغه‌های مسافران قطار، امکان رزرو بلیط برای سفرهای خانوادگی و گروهی است. مشتریان علی‌بابا می‌توانند تا سقف ۶ بلیط برای ۶ نفر را در یک سفارش و با یک بار پرداخت خریداری کنند. همچنین در صورتی که قصد خرید بلیط برای تعداد مسافران بیشتری را داشته باشید و می‌خواهید صندلی‌هایتان در کنار هم باشد، کافیست با پشتیبانی علی‌بابا تماس بگیرید. در کنار همه این‌ها، استرداد هر تعداد بلیط در علی‌بابا به راحتی و در کمترین زمان ممکن انجام می‌شود."
        />
      </div>
      {/* train ticket description */}

      <div className="mt-10">
        <h2 className="font-body text-2xl font-bold text-[#4B5259]">
          قیمت بلیط قطار
        </h2>
        <p className="font-body pt-2">
          سفر با قطار می‌تواند یک تصمیم اقتصادی به حساب بیاید، چرا که شما با
          انتخاب قطار می‌توانید هزینه‌های سفرتان را به طور چشمگیری کاهش دهید.
          قیمت تمام شده بلیط قطار کاملا بستگی به مسیر، شرکت ریلی و نوع قطار
          انتخابی شما دارد. بعضی از شرکت‌های ریلی امکان حمل خودرو را برای شما در
          نظر گرفته‌اند که در صورت انتخاب این گزینه، مبلغی به هزینه‌های سفر شما
          اضافه می‌شود. برای اطلاع از آخرین قیمت بلیط قطار در مسیر مورد نظر خود
          کافیست سری به سامانه علی‌بابا بزنید و با مشخص کردن مبدا، مقصد و تاریخ
          سفر، لیستی از پیشنهادات را دریافت کنید. برای شناسایی ارزان‌ترین بلیط
          قطار گزینه «مرتب‌سازی بر اساس قیمت» به کمک شما می‌آید.
        </p>
        <p className="font-body pt-2">
          سفر با قطار می‌تواند یک تصمیم اقتصادی به حساب بیاید، چرا که شما با
          انتخاب قطار می‌توانید هزینه‌های سفرتان را به طور چشمگیری کاهش دهید.
          قیمت تمام شده بلیط قطار کاملا بستگی به مسیر، شرکت ریلی و نوع قطار
          انتخابی شما دارد. بعضی از شرکت‌های ریلی امکان حمل خودرو را برای شما در
          نظر گرفته‌اند که در صورت انتخاب این گزینه، مبلغی به هزینه‌های سفر شما
          اضافه می‌شود. برای اطلاع از آخرین قیمت بلیط قطار در مسیر مورد نظر خود
          کافیست سری به سامانه علی‌بابا بزنید و با مشخص کردن مبدا، مقصد و تاریخ
          سفر، لیستی از پیشنهادات را دریافت کنید. برای شناسایی ارزان‌ترین بلیط
          قطار گزینه «مرتب‌سازی بر اساس قیمت» به کمک شما می‌آید. جایگاهی که قطار
          در حمل و نقل عمومی به خود اختصاص داده، جایگاهی میانه است. در ایران سفر
          با هواپیما را اغلب هم معنا با سفرهای لوکس و سفر با اتوبوس را سفرهایی
          مقرون به صرفه می‌دانند‌، در نتیجه سفر با قطار انتخابی بین این دو است.
          در سال‌های اخیر و با ورود قطارهای پنج ستاره مانند فدک و زندگی به
          مسیرهای ریلی، جایگاه این وسیله نقلیه متوجه تغییراتی شده است. کسانی که
          تا پیش از این سفر با هواپیما انتخاب اول‌شان بود، در صورتی که دغدغه
          زمان نداشته باشند، این قطارها را برای سفر انتخاب می‌کنند. از طرف دیگر
          قیمت مناسب بلیط قطار نسبت به هواپیما و قیمت نزدیک آن به اتوبوس سبب شده
          که در سال‌های اخیر مسافران بیشتری از این وسیله نقلیه برای سفر استفاده
          کنند. بعد از فراهم شدن امکان خرید و استرداد آنلاین بلیط قطار که
          وب‌سایت علی‌بابا برای اولین بار این خدمت را ارائه کرد، استقبال از قطار
          رشد چشمگیری داشته است.
        </p>
      </div>
      {/* reserve ticket */}
      <div className="mt-10">
        <h2 className="font-body text-2xl font-bold text-[#4B5259]">
          رزرو بلیط قطار
        </h2>
        <p className="font-body pt-2">
          رزرو بلیط قطار، سفر با قطار را راحت‌تر از همیشه کرده است. برای خرید
          اینترنتی بلیط قطار کافی است وارد وب‌سایت علی‌بابا شوید، سپس با وارد
          کردن نام شهر مبدا و مقصد و تاریخ رفت و برگشت می‌توانید تمام قطارهای
          شرکت‌های ریلی در مسیر مورد نظرتان را مشاهده کنید. بسته به ساعت حرکت،
          امکانات قطار و بودجه می‌توانید مناسب‌ترین بلیط را انتخاب کنید و با
          نهایی کردن رزرو بلیط قطار و پرداخت آن، بلیط خود را به صورت آنلاین
          دریافت کنید.
        </p>
      </div>
      {/* 4 column grid section */}
      <div className="grid grid-cols-4 mt-10 gap-x-3">
        <InfoCard
          title="کوپه دربست در قطار"
          description="یکی از تفاوت‌های قطار با سایر وسائل نقلیه عمومی کوپه‌های دربست آن است. شما می‌توانید کوپه‌های چهارنفره و شش‌نفره را دربست کنید تا به همراه خانواده یا دوستان خود سفر راحت‌تری را تجربه کنید. دربست کردن کوپه اصلا کار سختی نیست و در طی فرایند خرید اینترنتی بلیط از سایت علی‌بابا می‌توانید به آسانی بلیط قطار خود را به صورت دربست خریداری کنید. اگر گروهی سفر می‌کنید و یا اگر کودکان کم‌سن‌وسال همراه شما هستند، کوپه‌های دربست را به شما پیشنهاد می‌کنیم."
          bgPic="info__card_train-koope"
        />
        <InfoCard
          title="بلیط قطار برای سفرهای دانشجویی"
          description="سفر با قطار ارزان است و همین موضوع باعث می‌شود تا مورد توجه دانشجویان باشند. به طور معمول دانشجویانی که در شهرهای غیربومی تحصیل می‌کنند به صورت پرتکرار سفر می‌کنند و ماهانه حداقل یک بار به شهر خودشان باز می‌گردند که قطار یکی از انتخاب‌های اصلی آنهاست؛ چرا که هم قیمت به‌صرفه‌ای دارد و هم سفر راحتی را تجربه خواهند کرد."
          bgPic="info__card_train_watching-man"
        />
        <InfoCard
          title="خرید بلیط قطار برای مسیرهای پرتردد از علی‌بابا"
          description="علی‌بابا با ارائه ظرفیت کامل بر روی مسیرهای پرتردد مثل تهران – مشهد – تهران، اصفهان – تهران – اصفهان، یزد – تهران – یزد، تهران – شیراز – تهران و... امکان خرید سریع و آسان بلیط قطار، به ویژه در ایام اوج سفر مثل نوروز و تابستان را فراهم می‌کند. شما با مراجعه به سامانه علی‌بابا یا نصب اپلیکیشن اندروید یا ios علی‌بابا می‌توانید با خیال راحت بلیط سفرهای ریلی خود را از علی‌بابا خریداری کنید"
          bgPic="info__card_train_station_2"
        />
        <InfoCard
          title="بلیط قطار تهران - مشهد"
          description="تهران - مشهد پرترددترین مسیر ریلی کشور است که قطارهای تمام شرکت‌های ریلی در این مسیر مسافران را جا‌به‌جا می‌کنند. حضور بارگاه امام رضا در مشهد، برگزاری سمینارها و همایش‌های مختلف و اجرای پروژه‌های تجاری، این مسیر را به یکی از پررونق‌ترین مسیرهای ریلی تبدیل کرده است. در سفرهای زیارتی، که اغلب گروهی و به صورت خانوادگی انجام می‌شود، استقبال از قطار بسیار زیاد است. قیمت بلیط قطار تهران - مشهد بسته به نوع قطار و شرکت ریلی متفاوت است و تقریبا برای تمام سلیقه‌ها از قطارهای لوکس گرفته تا قطارهای اتوبوسی، بلیط متناسب با نوع سفر را می‌توان پیدا کرد."
          bgPic="info__card_haram-reza"
        />
      </div>
      {/* train company descriptions  */}
      <div className="mt-16">
        <h2 className="font-body text-2xl font-bold text-[#4B5259]">
          شرکت‌های ریلی در ایران
        </h2>
        <p className="pt-2 font-body">
          به صورت کلی شرکت رجا و شرکت‌های زیرمجموعه سفیر و شرکت فدک،
          تامین‌کنندگان قطارهای خطوط ریلی ایران هستند و علی‌بابا بخش اعظمی از
          بلیط این شرکت‌ها را از طریق سامانه علی‌بابا به متقاضیان عرضه می‌کند.
          شرکت‌های زیرمجموعه سفیر عبارتند از: راه آهن شرقی بنیاد (بن ریل)،
          جوپار، ریل سیر کوثر، ریل ترابر سبا، مهتاب سیر جم (مهتاب)، قطارهای
          مسافری نور (نورالرضا)، رعد و پارس لاریم.
        </p>
      </div>
      {/* train compny card */}
      <div className="grid grid-cols-4 grid-rows-2 gap-x-3 gap-y-5 mt-12">
        <TrainCompanyCard
          thumbnail="https://cdn.alibaba.ir/h/desktop/assets/images/companies/raja-95d463e4.jpg"
          title="قطارهای رجا"
        />
        <TrainCompanyCard
          thumbnail="https://cdn.alibaba.ir/h/desktop/assets/images/companies/bon-rail-b9e90489.jpg"
          title="قطارهای بین ریل"
        />
        <TrainCompanyCard
          thumbnail="https://cdn.alibaba.ir/h/desktop/assets/images/companies/fadak-train-bae61810.jpg"
          title="قطارهای نوآفرین (فدک)"
        />
        <TrainCompanyCard
          thumbnail="https://cdn.alibaba.ir/h/desktop/assets/images/companies/noor-reza-d592ac6c.jpg"
          title="قطارهای مسافری نور"
        />
        <TrainCompanyCard
          thumbnail="https://cdn.alibaba.ir/h/desktop/assets/images/companies/rail-seir-kowthar-cc5ee8ae.jpg"
          title="قطارهای ریل سیر کوثر"
        />
        <TrainCompanyCard
          thumbnail="https://cdn.alibaba.ir/h/desktop/assets/images/companies/saba-rail-75ba0a6a.jpg"
          title="قطارهای ریل ترابر سبا"
        />
        <TrainCompanyCard
          thumbnail="https://cdn.alibaba.ir/h/desktop/assets/images/companies/mahtab-f2506c75.jpg"
          title="قطارهای مهتاب سیرجم"
        />
        <TrainCompanyCard
          thumbnail="https://cdn.alibaba.ir/h/desktop/assets/images/companies/jopar-94ebda33.jpg"
          title="قطارهای جوپار"
        />
      </div>
      {/* roadmap and train features */}
      <div className="mt-20">
        <h2 className="font-body text-[#4B5259] font-bold text-2xl">
          مسیرها و امکانات قطارهای ایران
        </h2>
        <p className="font-body pt-2">
          شرکت نورالرضا (قطارهای مسافری نور) اولین شرکت در بخش خصوصی است که
          تجیزات قطارهای خود را بدون واسطه از قطعه‌سازان آلمانی، ایتالیایی و
          ژاپنی تامین کرده است. نور در حال حاضر با 54 دستگاه واگن لوکس چهارتخته
          و امکانات و خدماتی شایسته، یکی از باکیفیت‌ترین ارائه‌کننده‌های خدمات
          ریلی در کشور است. قطارهای لوکس چهار تخته شرکت ریلی نورالرضا در مسیرهای
          تهران-مشهد-تهران، تهران-شیراز-تهران، کرج-مشهد-کرج و اصفهان-مشهد-اصفهان
          تردد دارند. در سفر با قطارهای نورالرضا مسافران می‌توانند هنگام خرید
          بلیط وعده غذایی خود را هم از منوی پیشنهادی رزرو کنند و در صورتی که غذا
          را رزرو نکرده باشند امکان خرید غذا در واگن هم وجود دارد . در بدو ورود
          از مهمانان پذیرایی می‌شود و در طول مسیر می‌توانید از فروشگاه واگن
          تنقلات و خوراکی خریداری کنید. کوپه ها مجهز به مانیتور هستند و هدفون در
          اختیار مسافران قرار می‌گیرد. آب معدنی، ویلچیر و روزنامه در صورت
          درخواست به مهمانان ارائه می‌شود.
        </p>
      </div>
      {/* 3 column magazine section */}
      <div className="grid grid-cols-3 gap-x-4 mt-12">
        <TrainArticleCard
          thumbnail="https://cdn.alibaba.ir/h/desktop/assets/images/mashhad-low-cost-494cbf28.jpg"
          title="چگونه با کمترین هزینه به مشهد سفر کنیم؟"
          description="اگر می‌خواهید بلیط قطار مشهد را خریداری کنید اما نگران هزینه‌اش هستید، این نوشتار را بخوانید. برای خرید بلیط ارزان قطار تهران‌ـ مشهد، گزینه‌های مختلفی مقابل شماست؛ از قطارهای اتوبوسی و کوپه‌‌ای."
        />
        <TrainArticleCard
          thumbnail="https://cdn.alibaba.ir/h/desktop/assets/images/luxury-mashhad-45b25709.jpg"
          title="قطارهای لوکس مسیر تهران-مشهد کدام‌ها هستند؟"
          description="اگر چه اغلب شرکت‌های ریلی در مسیر پر تردد تهران-مشهد قطار دارند،قطار 5 ستاره فدک، قطار زندگی، غزال vip، قطار نورالرضا و غدیر بهترین قطارهای این مسیر هستند"
        />
        <TrainArticleCard
          thumbnail="https://cdn.alibaba.ir/h/desktop/assets/images/mashhad-low-cost-494cbf28.jpg"
          title="چرا بلیط قطار را آنلاین بخریم؟"
          description="خرید آنلاین بلیط قطار کار را برای سفر با این وسیله نقلیه ریلی آسان ساخته است. اگر قصد سفر را دارید، می‌توانید با خرید آنلاین بلیط قطار در زمان و هزینه صرفه‌جویی کنید."
        />
      </div>
    </div>
  );
}
export default InfoSection;
