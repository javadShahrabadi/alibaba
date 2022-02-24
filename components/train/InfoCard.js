function InfoCard(props) {
  return (
    <div className=" bg-white rounded-xl overflow-hidden cursor-pointer hover__anime hover:scale-105 border-gray-2 shadow-md">
      <div
        className={`w-full h-[200px] ${props.bgPic} box__shadow info__card_train relative`}
      >
        <h4 className=" bottom-2 right-4 font-body text-white font-bold text-lg absolute">
          {props.title}
        </h4>
      </div>
      <div className="px-5 mt-10">
        <p className="font-body text-md font-semibold text-[#4B5259] text-justify">
          {props.description}
        </p>
      </div>
    </div>
  );
}
export default InfoCard;
