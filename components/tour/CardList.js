import React from "react";
import CardListItem from "./CardListItem";
function CardList() {
  return (
    <div className="max-w-6xl mx-auto grid grid-cols-4 gap-x-2 mt-10 mb-10">
      <CardListItem
        image="https://jabamacdn.com/image/260x190/jabama-images/image_fcc2b93e-330d-4d1c-9444-14b36f287d0e.jpg"
        title="هتل شباویز کیش"
        price="22,256,000"
        description="برای ۱ نفر شامل هتل، پرواز، خدمات"
        start={5}
        time={{ day: 1, night: 2 }}
      />
      <CardListItem
        image="https://jabamacdn.com/image/260x190/jabama-images/image_7ddca053-3047-4c24-91b7-c7ae7b9edf8f.jpg"
        title="هتل داریوش کیش"
        price="33,696,000"
        description="برای ۱ نفر شامل هتل، پرواز، خدمات"
        start={5}
        time={{ day: 1, night: 2 }}
      />
      <CardListItem
        image="https://jabamacdn.com/image/260x190/jabama-images/image_1973f44a-2d29-4d18-adf6-71fb228a1dd2.jpg"
        title="هتل میراژ کیش"
        price="27,090,000"
        description="برای ۱ نفر شامل هتل، پرواز، خدمات"
        start={5}
        time={{ day: 1, night: 2 }}
      />
      <CardListItem
        image="https://jabamacdn.com/image/260x190/jabama-images/image_1386ff9a-d480-4db2-bd41-4f328a820ceb.jpg"
        title="هتل گراند کیش"
        price="34,402,000"
        description="برای ۱ نفر شامل هتل، پرواز، خدمات"
        start={3}
        time={{ day: 1, night: 2 }}
      />
    </div>
  );
}
export default CardList;
