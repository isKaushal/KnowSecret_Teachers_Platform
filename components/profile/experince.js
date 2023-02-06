import Image from "next/image";
import { useState } from "react";
import { useMedia } from "react-use";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import ExperinceIcon from "../../public/images/profilepage/centertile/experince/experince.png";

export default function Experince({ profileDetails }) {
  return (
    <div className=" maintile3 rounded-lg p-7 pr-2     ">
      <div className="education-wrap-outer w-full h-full overflow-x-hidden ">
        <div className="Education w-full h-10">
          <h1 className="text-[#ff9d00] uppercase flex  lg:text-left text-4xl my-2">
            <Image className="w-[40px] mr-2" src={ExperinceIcon} alt="" />
            Experience
          </h1>
        </div>
        <div className="relative">
          {/* slider here */}
          <div
            id="Experince-main"
            className=" grid grid-cols-1 lg:mt-14 w-full h-full "
          >
            <div className="Education-main grid lg:grid-cols-2 lg:grid-rows-2 relative  ">
              {/* <div className="Experince-main grid lg:grid-cols-2 lg:grid-rows-2 relative overflow-hidden  "> */}
              {/* {profileDetails.experince.map((data, index) => {
                return (
                  <div
                    className="table-rows  col-span-1 lg:px-[5rem] py-[1rem] lg:py-[4rem] relative   "
                    key={index}
                  >
                    <h1 className="text-[#ff9d00] text-lg">{data.year}</h1>
                    <h1 className="text-white lg:text-2xl">
                      {data.organization}
                    </h1>
                    <h2 className="text-white lg:text-xl">
                      {data.designation}
                    </h2>
                    <h3 className="text-white lg:text-xl">{data.subject}</h3>
                  </div>
                );
              })} */}
              <div className=" col-span-1 px-[5rem] py-[1rem] lg:py-[4rem]  ">
                <h1 className="text-[#ff9d00] text-lg">Year1</h1>
                <h1 className="text-white lg:text-2xl">Organization</h1>
                <h2 className="text-white lg:text-xl">Designation</h2>
                <h1 className="text-white lg:text-2xl">Subject</h1>
              </div>
              <div className=" col-span-1 px-[5rem] py-[1rem] lg:py-[4rem]  ">
                <h1 className="text-[#ff9d00] text-lg">Year2</h1>
                <h1 className="text-white lg:text-2xl">Organization</h1>
                <h2 className="text-white lg:text-xl">Designation</h2>
                <h1 className="text-white lg:text-2xl">Subject</h1>
              </div>
              <div className=" col-span-1 px-[5rem] py-[1rem] lg:py-[4rem]  ">
                <h1 className="text-[#ff9d00] text-lg">Year3</h1>
                <h1 className="text-white lg:text-2xl">Organization</h1>
                <h2 className="text-white lg:text-xl">Designation</h2>
                <h1 className="text-white lg:text-2xl">Subject</h1>
              </div>
              <div className=" col-span-1 px-[5rem] py-[1rem] lg:py-[4rem]  ">
                <h1 className="text-[#ff9d00] text-lg">Year4</h1>
                <h1 className="text-white lg:text-2xl">Organization</h1>
                <h2 className="text-white lg:text-xl">Designation</h2>
                <h1 className="text-white lg:text-2xl">Subject</h1>
              </div>
            </div>
          </div>
          {/* slider here */}
        </div>
      </div>
    </div>
  );
}