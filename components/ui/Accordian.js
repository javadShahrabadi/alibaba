import {
  FaChevronDown,
  FaGalacticSenate,
  FaQuestion,
  FaChevronUp,
} from "react-icons/fa";
import { useState } from "react";
function Accordian(props) {
  const [hoverControl, setHoverControl] = useState(false);
  const [show, setShow] = useState(false);

  return (
    <div
      className={`mt-3 max-w-6xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 px-5 cursor-pointer overflow-hidden py-5 hover__anime w-full ${
        show ? "h-[190px]" : "h-[70px]"
      }`}
      onMouseEnter={() => setHoverControl(true)}
      onMouseLeave={() => setHoverControl(false)}
      onMouseDown={() => setShow(!show)}
    >
      <div className="w-full flex flex-row items-center justify-between">
        <div>
          <div className="flex flex-row items-center">
            {/* question icon */}
            <div className="p-2 rounded-full bg-[#E8F9FC]">
              <FaQuestion className="w-4 h-4 text-[#4AB7C8] " />
            </div>
            {/* title */}
            <div className="mr-2">
              <span className="text-[#4B5259] font-body font-extrabold text-[1rem]">
                {props.title}
              </span>
            </div>
          </div>
        </div>
        <div
          className={`w-8 h-8 flex items-center justify-center rounded-full hover__anime ${
            hoverControl ? "bg-[#E8F9FC]" : null
          }`}
        >
          {show ? (
            <>
              <FaChevronUp
                className={`w-4 h-4 text-[#4B5259] ${
                  hoverControl ? "text-[#4AB7C8] hover__anime" : null
                }`}
              />
            </>
          ) : (
            <>
              <FaChevronDown
                className={`w-4 h-4 text-[#4B5259] ${
                  hoverControl ? "text-[#4AB7C8] hover__anime" : null
                }`}
              />
            </>
          )}
        </div>
      </div>
      <div className="mt-10 font-body text-md text-gray-400 font-bold ">
        <p>{props.description}</p>
      </div>
    </div>
  );
}
export default Accordian;
