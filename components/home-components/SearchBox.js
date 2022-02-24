import { Select } from "antd";
import { DatePicker, Space, ConfigProvider, Popover } from "antd";
import fa_IR from "antd/lib/locale/fa_IR";
import { CgArrowsExchange } from "react-icons/cg";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

function SearchBox() {
  const { Option } = Select;
  const [passengerCounter, setPassengerCounter] = useState(1);
  const [adultCount, setAdultCount] = useState(1);
  const [childCount, setChildCount] = useState(0);
  const [babyCount, setBabyCount] = useState(0);
  const content = (
    <ul className="flex flex-col space-y-4">
      <li className="flex flex-row font-body items-center">
        <h4 className="text-[#4B5259]">بزرگسال (۱۲ سال به بالا)</h4>
        <div className="flex flex-row mr-5">
          <button
            className="w-5 h-5 bg-[#F4B914] flex items-center justify-center rounded-md cursor-pointer"
            type="button"
            onClick={() => {
              setPassengerCounter(passengerCounter + 1);
              return setAdultCount(adultCount + 1);
            }}
          >
            <span>
              <FaPlus className="text-white" />
            </span>
          </button>
          <span className="mx-5">{adultCount}</span>
          <button
            className="w-5 h-5 bg-[#F4B914] flex items-center justify-center rounded-md cursor-pointer"
            onClick={() => {
              if (adultCount === 0) {
                return setAdultCount(0);
              }
              setPassengerCounter(passengerCounter - 1);
              return setAdultCount(adultCount - 1);
            }}
          >
            <FaMinus className="text-white" />
          </button>
        </div>
      </li>
      <li className="flex flex-row font-body items-center justify-between">
        <h4 className="text-[#4B5259]">کودک (۲ تا ۱۲ سال)</h4>
        <div className="flex flex-row mr-5">
          <button
            className="w-5 h-5 bg-[#F4B914] flex items-center justify-center rounded-md cursor-pointer"
            onClick={() => {
              setPassengerCounter(passengerCounter + 1);
              return setChildCount(childCount + 1);
            }}
          >
            <FaPlus className="text-white" />
          </button>
          <span className="mx-5">{childCount}</span>
          <button
            className="w-5 h-5 bg-[#F4B914] flex items-center justify-center rounded-md cursor-pointer"
            onClick={() => {
              if (childCount === 0) {
                return setChildCount(0);
              }
              setPassengerCounter(passengerCounter - 1);
              return setChildCount(childCount - 1);
            }}
          >
            <FaMinus className="text-white" />
          </button>
        </div>
      </li>
      <li className="flex flex-row font-body items-center justify-between">
        <h4 className="text-[#4B5259]">نوزاد (۱۰ روز تا ۲ سال)</h4>
        <div className="flex flex-row mr-5">
          <button
            className="w-5 h-5 bg-[#F4B914] flex items-center justify-center rounded-md cursor-pointer"
            onClick={() => {
              setPassengerCounter(passengerCounter + 1);
              return setBabyCount(babyCount + 1);
            }}
          >
            <FaPlus className="text-white" />
          </button>
          <span className="mx-5">{babyCount}</span>
          <button
            className="w-5 h-5 bg-[#F4B914] flex items-center justify-center rounded-md cursor-pointer"
            onClick={() => {
              if (babyCount === 0) {
                return setBabyCount(0);
              }
              setPassengerCounter(passengerCounter - 1);
              return setBabyCount(babyCount - 1);
            }}
          >
            <FaMinus className="text-white" />
          </button>
        </div>
      </li>
    </ul>
  );

  return (
    <form className="h-[200px] border-2 border-gray-100 shadow-sm rounded-br-lg rounded-bl-lg max-w-6xl mx-auto px-14  py-8 bg-white overflow-hidden">
      <div>
        <Select
          defaultValue="رفت و برگشت"
          style={{ width: 120 }}
          bordered={false}
          className="font-body text-[#4b5259] border border-gray-200 rounded-full"
        >
          <Option className="font-body" value="یک طرفه">
            یک طرفه
          </Option>
          <Option className="font-body" value="رفت و برگشت">
            رفت و برگشت
          </Option>
        </Select>
      </div>
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
            {passengerCounter} مسافر
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
