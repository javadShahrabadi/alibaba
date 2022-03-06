import CartItem from "./CartItem";

const CartContainer = () => {
  return (
    <div className="max-w-6xl mx-auto mt-10">
      <h2 className="font-body text-[#4B5259] text-2xl font-bold pr-2">
        سفر با خیال راحت
      </h2>
      <ul className="grid grid-cols-3 mt-8 gap-x-2">
        <CartItem
          image="https://cdn.alibaba.ir/h/desktop/assets/images/nezafat-18fd27ec.png"
          title="تضمین نظافت و پاکیزگی اقامتگاه ها"
          desc="خدمات ضدعفونی و اقامتگاه و کیف حاوی وسایل بهداشتی"
        />
        <CartItem
          image="https://cdn.alibaba.ir/h/desktop/assets/images/roostagardi-ea2624e7.png"
          title="روستاگردی با اقامتگاه های جاباما"
          desc="کشف فرهنگ های دیده نشده و زندگی با مردم بومی"
        />
        <CartItem
          image="https://cdn.alibaba.ir/h/desktop/assets/images/kaari-79976434.png"
          title="اقامتگاه های مناسب سفرهای کاری"
          desc="اقامتگاه های اقتصادی برای مدت زمان کوتاه"
        />
      </ul>
    </div>
  );
};
export default CartContainer;
