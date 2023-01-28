import { HiAcademicCap } from "react-icons/hi";

export default function Education({ profileDetails }) {
  return (
    <div
      id="MainTile3"
      className="maintile3  rounded-lg p-7 absolute flex justify-center items-center"
    >
      <div className="custome-wrap h-full w-full">
        <div className="education-wrap-outer">
          <div className="w-full h-10 uppercase flex ">
            <HiAcademicCap className="text-white text-[40px] mr-2 mt-1  " />
            <h1 className="text-[#ff9d00] lg:text-left text-4xl">Education</h1>
          </div>
          <div className="relative">
            <div
              id="Education-main"
              className=" Education-main grid lg:grid-cols-1 lg:mt-14 w-full lg:h-full"
            >
              <div className="education-wrap w-full grid lg:grid-cols-2 lg:grid-rows-2 relative">
                {/* {profileDetails.education.map((data) => {
                  return (
                    <div className="table-rows col-span-1 px-[5rem] py-[1rem] lg:py-[4rem]  ">
                      <h1 className="text-[#ff9d00] text-lg">{data.year}</h1>
                      <h1 className="text-white lg:text-2xl">
                        {data.university}
                      </h1>
                      <h1 className="text-white lg:text-2xl">{data.degree}</h1>
                    </div>
                  );
                })} */}
                <div className=" col-span-1 lg:px-[5rem] py-[1rem] lg:py-[4rem]  ">
                  <h1 className="text-[#ff9d00] text-lg">Year</h1>
                  <h1 className="text-white lg:text-2xl">university</h1>
                  <h1 className="text-white lg:text-2xl">degree</h1>
                </div>
                <div className=" col-span-1 lg:px-[5rem] py-[1rem] lg:py-[4rem]  ">
                  <h1 className="text-[#ff9d00] text-lg">Year</h1>
                  <h1 className="text-white lg:text-2xl">university</h1>
                  <h1 className="text-white lg:text-2xl">degree</h1>
                </div>
                <div className=" col-span-1 lg:px-[5rem] py-[1rem] lg:py-[4rem]  ">
                  <h1 className="text-[#ff9d00] text-lg">Year</h1>
                  <h1 className="text-white lg:text-2xl">university</h1>
                  <h1 className="text-white lg:text-2xl">degree</h1>
                </div>
                <div className=" col-span-1 lg:px-[5rem] py-[1rem] lg:py-[4rem]  ">
                  <h1 className="text-[#ff9d00] text-lg">Year</h1>
                  <h1 className="text-white lg:text-2xl">university</h1>
                  <h1 className="text-white lg:text-2xl">degree</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
