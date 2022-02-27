import Image from "next/image";
function CompanyLogo(props) {
  return (
    <div className="flex flex-col items-center">
      {/* logo Image */}
      <div>
        <Image src={props.Logo} alt={props.alt} width={60} height={45} />
      </div>
      {/* Company Name */}
      <div>
        <h4>{props.Name}</h4>
      </div>
    </div>
  );
}
export default CompanyLogo;
