import { Select } from "antd";
import { DatePicker, Space, ConfigProvider, Popover } from "antd";
import fa_IR from "antd/lib/locale/fa_IR";
import { CgArrowsExchange } from "react-icons/cg";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useContext } from "react";
import NavSelectContext from "store/nav-select-context";
function SearchBox() {
  const { Option } = Select;
  const [roomCounter, setRoomCounter] = useState(1);
  const [passengerCounter, setPassengerCounter] = useState(2);
  const [adultCounter, setAdultCounter] = useState(2);
  const [babyCounter, setBabyCounter] = useState(0);
  const navCtx = useContext(NavSelectContext);
  console.log(navCtx);

  //  counter handler

  const minusAdultHandler = () => {
    if (adultCounter === 0) {
      return setAdultCounter(0);
    }
    setAdultCounter(adultCounter - 1);
    setPassengerCounter(passengerCounter - 1);
  };
  const plusAdultHandler = () => {
    setAdultCounter(adultCounter + 1);
    setPassengerCounter(passengerCounter + 1);
  };
  const minusBabyHandler = () => {
    if (babyCounter === 0) {
      return setBabyCounter(0);
    }
    setBabyCounter(babyCounter - 1);
    setPassengerCounter(passengerCounter - 1);
  };
  const plusBabyHandler = () => {
    setBabyCounter(babyCounter + 1);
    setPassengerCounter(passengerCounter + 1);
  };

  const content = (
    <div className="py-2 px-4 text-right">
      <h2 className="font-body text-[1rem] font-bold text-[#4B5259]">
        اتاق اول
      </h2>
      {/* counter section */}
      <div className="flex flex-col pt-1">
        <div className="flex flex-row">
          <div>
            <h3 className="font-semibold font-body text-gray-400 text-[13px]">
              بزرگسال (12 سال به بالا)
            </h3>
          </div>
          {/* minus and plus section */}
          <div className="flex mr-5">
            <span
              className="flex text-white bg-blue-500 p-1 rounded-lg cursor-pointer w-5 h-5 items-center justify-center ml-2 hover__anime hover:bg-blue-600"
              onClick={minusAdultHandler}
            >
              <FaMinus className="w-3 h-3" />
            </span>
            <span className="text-gray-400 font-semibold ml-2">
              {adultCounter}
            </span>
            <span
              className="flex text-white bg-blue-500 p-1 rounded-lg cursor-pointer w-5 h-5 items-center justify-center hover__anime hover:bg-blue-600"
              onClick={plusAdultHandler}
            >
              <FaPlus className="w-3 h-3" />
            </span>
          </div>
        </div>
        <div className="flex flex-row mt-2 justify-between">
          <div>
            <h3 className="font-semibold font-body text-gray-400 text-[13px]">
              کودک (تا 12 سال)
            </h3>
          </div>
          {/* minus and plus section */}
          <div className="flex mr-5">
            <span
              className="flex text-white bg-blue-500 p-1 rounded-lg cursor-pointer w-5 h-5 items-center justify-center ml-2 hover__anime hover:bg-blue-600"
              onClick={minusBabyHandler}
            >
              <FaMinus className="w-3 h-3" />
            </span>
            <span className="text-gray-400 font-semibold ml-2">
              {babyCounter}
            </span>
            <span
              className="flex text-white bg-blue-500 p-1 rounded-lg cursor-pointer w-5 h-5 items-center justify-center hover__anime hover:bg-blue-600"
              onClick={plusBabyHandler}
            >
              <FaPlus className="w-3 h-3" />
            </span>
          </div>
        </div>
        <button className="text-right text-blue-500 font-body flex items-center mt-2 hover__anime hover:bg-blue-50 rounded-xl w-[90px] px-1">
          <span className="pl-1">
            <FaPlus className="w-3 h-3" />
          </span>
          افرودن اتاق
        </button>
      </div>
      <div className="w-full border-b border-gray-200 my-4" />
      <div className="flex justify-center">
        <button className="font-body bg-blue-500 py-2 px-4 rounded-lg text-white font-bold hover__anime hover:bg-blue-600">
          تایید - {passengerCounter} مسافر و {roomCounter} اتاق
        </button>
      </div>
    </div>
  );
  // -----------------------

  // -----------------------
  return (
    <form className="h-[200px] border-2 border-gray-100 shadow-sm rounded-br-lg rounded-bl-lg max-w-6xl mx-auto px-14  py-8 bg-white overflow-hidden">
      {/* bottom section */}
      <div className="mt-8 flex items-center">
        <div className="flex flex-row">
          <div>
            <Select
              showSearch
              style={{
                width: 200,
                padding: "10px 10px",
                fontFamily: "Vazir",
                color: "#4b5259",
              }}
              placeholder="مبدا (شهر)"
              optionFilterProp="children"
              bordered={false}
              showArrow={false}
              className="border font-body rounded-tr-lg rounded-br-lg border-l-none "
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
              filterSort={(optionA, optionB) =>
                optionA.children
                  .toLowerCase()
                  .localeCompare(optionB.children.toLowerCase())
              }
            >
              <Option value="1" className="font-body">
                تهران
              </Option>
              <Option value="2" className="font-body">
                اهواز
              </Option>
              <Option value="3" className="font-body">
                شیراز
              </Option>
              <Option value="4" className="font-body">
                مشهد
              </Option>
              <Option value="5" className="font-body">
                بندرعباس
              </Option>
              <Option value="6" className="font-body">
                اصفهان
              </Option>
              <Option value="7" className="font-body">
                تبریز
              </Option>
              <Option value="8" className="font-body">
                کیش
              </Option>
            </Select>
          </div>

          <div>
            <Select
              showSearch
              style={{
                width: 200,
                padding: "10px 10px",
                fontFamily: "Vazir",
                color: "#4b5259",
              }}
              showArrow={false}
              placeholder="مقصد ‌(شهر)"
              bordered={false}
              className="border font-body rounded-tl-lg rounded-bl-lg"
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
              filterSort={(optionA, optionB) =>
                optionA.children
                  .toLowerCase()
                  .localeCompare(optionB.children.toLowerCase())
              }
            >
              <Option value="1" className="font-body">
                تهران
              </Option>
              <Option value="2" className="font-body">
                اهواز
              </Option>
              <Option value="3" className="font-body">
                شیراز
              </Option>
              <Option value="4" className="font-body">
                مشهد
              </Option>
              <Option value="5" className="font-body">
                بندرعباس
              </Option>
              <Option value="6" className="font-body">
                اصفهان
              </Option>
              <Option value="7" className="font-body">
                تبریز
              </Option>
              <Option value="8" className="font-body">
                کیش
              </Option>
            </Select>
            <span>
              <CgArrowsExchange className="text-gray-500 w-6 h-6 relative -mt-10 -mr-3 bg-white border rounded-full" />
            </span>
          </div>
        </div>

        {/* go and back date select */}
        <div className="mr-2">
          <Space direction="horizontal">
            <ConfigProvider locale={fa_IR}>
              <div className="flex items-end">
                <div>
                  <span className="border py-[16.75px] rounded-tr-lg rounded-br-lg border-l-0">
                    <DatePicker
                      placeholder="تاریخ رفت"
                      className="font-body"
                      style={{
                        padding: "12px 12px",
                        fontFamily: "Vazir",
                        color: "#4b5259",
                        marginTop: "5px",
                      }}
                      bordered={false}
                    />
                  </span>
                </div>
                <div>
                  <span className="border py-[16.75px] rounded-tl-lg rounded-bl-lg">
                    <DatePicker
                      placeholder="تاریخ برگشت"
                      style={{
                        padding: "12px 12px",
                        fontFamily: "Vazir",
                        color: "#4b5259",
                      }}
                      bordered={false}
                    />
                  </span>
                </div>
              </div>
            </ConfigProvider>
          </Space>
        </div>
        {/* passenger counter */}
        <Popover trigger="click" placement="bottom" content={content}>
          <button
            className="w-40 h-[55px] rounded-lg  font-body mr-2 text-right pr-5 text-[#4B5259] border border-gray-200"
            type="button"
          >
            {passengerCounter} مسافر , {roomCounter} اتاق
          </button>
        </Popover>
        <button
          className="bg-[#F4B914] w-[130px] h-[55px] mr-2 font-body rounded-lg hover:bg-[#DB9A02] hover__anime"
          type="button"
          onClick={(e) => e.preventDefault()}
        >
          جست و جو
        </button>
      </div>
    </form>
  );
}
export default SearchBox;
