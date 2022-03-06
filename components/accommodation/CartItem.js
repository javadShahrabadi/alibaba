import Image from "next/image";
const CartItem = (props) => {
  return (
    <li className="bg-white rounded-xl overflow-hidden shadow-md cursor-pointer hover__anime hover:shadow-lg">
      <div>
        <Image src={props.image} alt={props.title} width={385} height={240} />
      </div>
      <div className="p-3">
        <h3 className="font-body text-[#4B5259]">{props.title}</h3>
        <h5 className="text-gray-400 font-body ">{props.desc}</h5>
      </div>
    </li>
  );
};
export default CartItem;
