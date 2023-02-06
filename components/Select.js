import { useState, useMemo } from "react";
import countryList from "react-select-country-list";
import styled from "styled-components";

const SelectWrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export default function () {
  // in filter
  const [value, setValue] = useState();
  const [searchData, setSearchData] = useState("");
  // in filter
  // country list
  const options = useMemo(() => countryList().getData(), []);
  // country list
  // for toggle list
  const [country, setcountry] = useState(false);
  // for toggle list
  // for selcted country
  const [selectedId, setselectedId] = useState()
  // for selcted country
  const ArrayDataToInput = (label, target) => {
    setValue(label);
    setcountry(false)
  };

  const CountryFilterInput = () => {};

  const filterCountryText = (event) => {
    setSearchData(event.target.value);
  };

  return (
    <SelectWrap className="  rounded-l-lg">
      <input
        value={value}
        className=" rounded-lg  lg:rounded-l-lg  "
        placeholder="Select Country"
        onChange={CountryFilterInput}
        onMouseEnter={() => setcountry(true)}
        onMouseLeave={() => setcountry(false)}
      />
      <div
        onMouseEnter={() => setcountry(true)}
        onMouseLeave={() => setcountry(false)}
        className={
          country
            ? "w-full h-[25rem] rounded-lg p-4 mt-1 absolute overflow-hidden bg-white transition-all "
            : "w-full h-0 rounded-lg bg-white absolute overflow-hidden  opacity-0 transition-all "
        }
      >
        <div className="shadow-lg" >
          <input
            type="text"
            onChange={filterCountryText}
            className="w-full p-2 border-2 border-[#ff9d00] rounded-lg mb-4   "
            placeholder="Search. . ."
          />
        </div>
        <div className="overflow-y-scroll h-[80%] ">
          {options
            .filter((data) => {
              const ValueCaseSwitcher = searchData.toLowerCase();
              const ListCaseSwitcher = data.label.toLowerCase();

              return ListCaseSwitcher.startsWith(ValueCaseSwitcher);
            })
            .map((data) => {
              return (
                <div
                  key={data.value}
                  onClick={() => ArrayDataToInput(data.label)}
                  className={`cursor-pointer m-1 p-2 rounded-md bg-slate-100 `}
                >
                  {data.label}
                </div>
              );
            })}
        </div>
      </div>
    </SelectWrap>
  );
}
