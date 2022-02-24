import Image from "next/image";
function LogoCardFooter(props) {
  return (
    <div className="w-[86px] h-[78.5px] border border-gray-200 rounded-xl flex items-center justify-center cursor-pointer mr-2 hover__anime hover:scale-105">
      <Image src={props.logo} width={69} height={69} alt={props.alt} />
    </div>
  );
}
export default LogoCardFooter;
