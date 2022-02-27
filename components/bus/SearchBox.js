import { Select } from "antd";
import { DatePicker, Space, ConfigProvider } from "antd";
import fa_IR from "antd/lib/locale/fa_IR";
import { CgArrowsExchange } from "react-icons/cg";
import { useState } from "react";

function SearchBox() {
  const { Option } = Select;

  return (
    <form className="h-[190px] border-2 border-gray-100 shadow-sm rounded-br-lg rounded-bl-lg max-w-6xl mx-auto px-14  py-8 bg-white overflow-hidden">
      {/* bottom section */}
      <div className="mt-8 flex items-center">
        <div className="flex flex-row">
          <div>
            <Select
              showSearch
              style={{
                width: 300,
                padding: "10px 10px",
                fontFamily: "Vazir",
                color: "#4b5259",
              }}
              placeholder="مبدا (شهر، پایانه)"
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
                width: 300,
                padding: "10px 10px",
                fontFamily: "Vazir",
                color: "#4b5259",
              }}
              showArrow={false}
              placeholder="مقصد ‌(شهر، پایانه)"
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
          <Space direction="horizontal" size={200}>
            <ConfigProvider locale={fa_IR}>
              <div className="flex items-end">
                <div>
                  <span className="border py-[16.75px] rounded-lg">
                    <DatePicker
                      size="large"
                      placeholder="تاریخ حرکت"
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
              </div>
            </ConfigProvider>
          </Space>
        </div>
        {/* passenger counter */}

        <button
          className="bg-[#F4B914] w-[200px] h-[55px] mr-2 font-body rounded-lg hover:bg-[#DB9A02] hover__anime"
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
