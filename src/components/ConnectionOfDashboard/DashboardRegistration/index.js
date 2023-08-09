import React, { useState } from "react";
import { DashboardList, DashboardUser, StarIcon, StarIcons, StartIcon } from "../../../AssetsMain/icons";
import { Select } from "antd";
import { Box, TextField } from "@material-ui/core";

import "./style.css";

const DashboardRegistration = () => {
  const [naturalPerson, setNaturalPerson] = useState(true);

  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };

  return (
    <div className="max-w-[1280px] w-full flex justify-center items-center m-auto">
      <div className="w-full h-fit px-4 md:px-0">
        <div className="text-xl md:text-3xl font-medium mt-[20px] mb-[30px] text-center">
          Регистрация продавца
        </div>
        <div className="w-full md:w-[484px] flex justify-between items-center bg-dashboardBtnBg rounded-lg mx-auto mb-[30px]">
          <button
            onClick={() => setNaturalPerson(true)}
            className={`group w-1/2 flex items-center justify-center font-medium text-[10px] ll:text-xs md:text-sm px-1 ll:px-2 py-[10px] md:px-[25px] md:py-3
                 ${
                   naturalPerson
                     ? "border border-fullBlue text-fullBlue rounded-lg"
                     : ""
                 }`}
          >
            {/* <img src={dashboardUser} alt="" /> */}
            <DashboardUser
              className={`${naturalPerson ? "text-fullBlue" : ""}`}
            />
            <span className="ml-[4px] md:ml-2">ФИЗИЧЕСКОЕ ЛИЦО</span>
          </button>
          <button
            onClick={() => setNaturalPerson(false)}
            className={`w-1/2 flex items-center justify-center font-medium text-[10px] ll:text-xs md:text-sm px-1 ll:px-2 py-[10px] md:px-[25px] md:py-3
                  ${
                    !naturalPerson
                      ? "border border-fullBlue text-fullBlue rounded-lg"
                      : ""
                  }`}
          >
            {/* <img src={dashboardList} alt="" /> */}
            <DashboardList
              className={`${naturalPerson ? "text-fullBlue" : ""}`}
            />
            <span className="ml-[4px] md:ml-2">ЮРИДИЧЕСКОЕ ЛИЦО</span>
          </button>
        </div>
        <form action="#">
          {naturalPerson ? (
            <div className="w-full flex items-center">
              <div className="mx-auto">
                <div className="mb-4">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="workOne"
                      name="type_work"
                      value="1"
                      className="w-[18px] h-[18px] cursor-pointer"
                    />
                    <label
                      for="workOne"
                      className="ml-[10px] font-medium text-[13px] md:text-base cursor-pointer"
                    >
                      Индивидуальный предприниматель
                    </label>
                  </div>
                  <p className="text-xs md:text-sm text-dashboardLightTextColor font-normal ml-7">
                    поставьте галочку, если вы являетесь индивидуальным
                    предпринимателем{" "}
                  </p>
                </div>
                <div className="mb-4">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="workTwo"
                      name="type_work"
                      value="2"
                      className="w-[18px] h-[18px] cursor-pointer"
                    />
                    <label
                      for="workTwo"
                      className="ml-[10px] font-medium text-[13px] md:text-base cursor-pointer"
                    >
                      Самозаняты
                    </label>
                  </div>
                  <p className="text-xs md:text-sm text-dashboardLightTextColor font-normal ml-7">
                    поставьте галочк, если вы cамозаняты{" "}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full md:w-[484px] rounded-lg mx-auto">
              <Select
                className="w-full text-base"
                showSearch
                placeholder="Тип предприятия"
                optionFilterProp="children"
                size="large"
                onChange={onChange}
                onSearch={onSearch}
                filterOption={(input, option) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                options={[
                  {
                    value: "Индивидуальный предприниматель",
                    label: "Индивидуальный предприниматель",
                  },
                  {
                    value: "Самозанятый",
                    label: "Самозанятый",
                  },
                  {
                    value: "Общество с ограниченной ответственностью (ООО)",
                    label: "Общество с ограниченной ответственностью (ООО)",
                  },
                  {
                    value: "Частное предприятие (ЧП)",
                    label: "Частное предприятие (ЧП)",
                  },
                  {
                    value: "Совместное предприятие (СП)",
                    label: "Совместное предприятие (СП)",
                  },
                  {
                    value: "Семейное предприятие (СП)",
                    label: "Семейное предприятие (СП)",
                  },
                  {
                    value: "Совместное предприятие ООО (СП ООО)",
                    label: "Совместное предприятие ООО (СП ООО)",
                  },
                  {
                    value: "Акционерное общество (АО)",
                    label: "Акционерное общество (АО)",
                  },
                ]}
              />

              <div className="w-full md:w-[484px] mt-5">
                <p className="flex items-center text-base font-AeonikProRegular text-[#303030]">
                  Наименование организации
                  <span className="ml-[5px]"><StarIcon /></span>
                </p>
                <input type="text" placeholder="Name..." className="w-full font-AeonikProRegular text-base border border-[#e5e5e5] mt-[10px] rounded-lg px-[15px] py-3" />
              </div>

            </div>
          )}

          <div className="w-full border mt-[30px] mb-[40px] md:my-[80px]"></div>

          {/* FORM SECTION FOR DESCROP VERSION */}
          <div className="hidden md:block">
            <div className="w-full">
              {/* 1 */}
              <div className="w-full flex items-center gap-x-[50px] mb-[25px]">
                <Box
                className="flex items-center"
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: "71ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    type="text"
                    id="standard-basic"
                    label="Имя"
                    fullWidth
                    fontSize={"12px"}
                    variant="standard"
                  />
                </Box>
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: "71ch" },
                  }}
                  noValidate
                  autoComplete="off"
                  size="small"
                >
                  <TextField
                    type="text"
                    id="standard-basic"
                    fullWidth
                    size="small"
                    label="Фамилия"
                    variant="standard"
                  />
                </Box>
              </div>
              {/* 2 */}
              <div className="w-full flex items-center gap-x-[50px] mb-[25px]">
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: "71ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    type="email"
                    id="standard-basic"
                    label="Email"
                    variant="standard"
                  />
                </Box>
                <Box
                  component="form"
                  sx={{
                    "& > :not(style) ": { m: 1, width: "71ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                  className="w-full [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    type="number"
                    id="standard-basic"
                    label={`Номер телефона  `}
                    variant="standard"
                    fullWidth
                    placeholder="+998 (97) 740-23-99"
                    
                  />
                </Box>
              </div>
              {/* 3 */}
              <div className="w-full flex items-center gap-x-[50px]">
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: "71ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    type="password"
                    id="standard-basic"
                    label="Пароль"
                    variant="standard"
                  />
                </Box>
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: "71ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    type="password"
                    id="standard-basic"
                    className="w-full"
                    label="Повторите пароль"
                    variant="standard"
                    fullWidth
                  />
                </Box>
              </div>
            </div>
          </div>

          {/* FORM SECTION FOR MOBILE VERSION */}
          <div className="block md:hidden">
            <div className="inputsRow flex pb-5">
              <div className="inputWrap flex-grow flex flex-col-reverse">
                <input
                  required
                  name="name"
                  className="n-input w-full text-gray-800 text-xs not-italic font-normal rounded-lg p-2"
                  type="text"
                />
                <div className="inputText text-gray-800 text-xs not-italic font-normal pr-4 bg-no-repeat mb-[5px]">
                  Имя
                </div>
              </div>
              <div className="inputWrap flex-grow flex flex-col-reverse">
                <input
                  required
                  name="lastname"
                  className="n-input w-full text-gray-800 text-xs not-italic font-normal rounded-lg p-2"
                  type="text"
                />
                <div className="inputText text-gray-800 text-xs not-italic font-normal pr-4 bg-no-repeat mb-[5px]">
                  Фамилия
                </div>
              </div>
            </div>
            <div className="inputsRow flex pb-5">
              <div className="inputWrap flex-grow flex flex-col-reverse">
                <input
                  required
                  name="email"
                  className="n-input w-full text-gray-800 text-xs not-italic font-normal rounded-lg p-2"
                  type="email"
                />
                <div className="inputText text-gray-800 text-xs not-italic font-normal pr-4 bg-no-repeat mb-[5px]">
                  Email
                </div>
              </div>
              <div className="inputWrap flex-grow flex flex-col-reverse">
                <input
                  required
                  name="tel"
                  className="n-input w-full text-gray-800 text-xs not-italic font-normal rounded-lg p-2"
                  type="number"
                />
                <div className="inputText text-gray-800 text-xs not-italic font-normal pr-4 bg-no-repeat mb-[5px]">
                  Номер телефона
                </div>
              </div>
            </div>
            <div className="inputsRow flex">
              <div className="inputWrap flex-grow flex flex-col-reverse">
                <input
                  required
                  name="password"
                  className="n-input w-full text-gray-800 text-xs not-italic font-normal rounded-lg p-2"
                  type="password"
                />
                <div className="inputText text-gray-800 text-xs not-italic font-normal pr-4 bg-no-repeat mb-[5px]">
                  Пароль
                </div>
              </div>
              <div className="inputWrap flex-grow flex flex-col-reverse">
                <input
                  required
                  name="password"
                  className="n-input w-full text-gray-800 text-xs not-italic font-normal rounded-lg p-2"
                  type="password"
                />
                <div className="inputText text-gray-800 text-xs not-italic font-normal pr-4 bg-no-repeat mb-[5px]">
                  Повторите пароль
                </div>
              </div>
            </div>
          </div>
        </form>
        <button className="w-full md:w-[358px] flex items-center justify-center mx-auto font-medium bg-fullBlue text-base text-white py-[12px] md:py-[15px] mt-[50px] md:mt-[90px] rounded-xl mb-[88px] md:mb-8">
          Зарегистрироваться
        </button>
      </div>
    </div>
  );
};

export default DashboardRegistration;
