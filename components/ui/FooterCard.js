import Image from "next/image";
function FooterCard(props) {
  return (
    <div className="h-[120px]  w-[360px] flex flex-row items-center space-x-4">
      <div className="w-24 h-24 shrink-0">
        <Image src={props.image} width={176} height={176} alt={props.title} />
      </div>
      <div className="flex flex-col">
        <h3 className="text-lg font-bold text-[#4B5259] font-body">
          {props.title}
        </h3>
        <p className="font-body text-[#4B5259] text-sm">{props.text}</p>
      </div>
    </div>
  );
}
export default FooterCard;
