import Image from "next/image";

function CardSlider(props) {
  return (
    <div className="w-[460px] h-[230px] xl:w-[565px] xl:h-[270px] ml-5">
      <Image
        src={props.image}
        alt={props.title}
        width={530}
        height={240}
        className="rounded-lg cursor-pointer"
      />
    </div>
  );
}
export default CardSlider;
