import { FaChevronLeft } from "react-icons/fa";
const TourCardLink = (props) => {
  return (
    <div className="w-[350px] bg-white rounded-2xl flex items-center hover__anime hover:shadow-lg shadow-md px-4 py-4 hover:scale-105 justify-between cursor-pointer">
      <h3 className="font-body text-gray-500 mt-0.5 text-[1rem]">
        {props.title}
      </h3>
      <FaChevronLeft className="w-4 h-4 text-gray-300" />
    </div>
  );
};
export default TourCardLink;
