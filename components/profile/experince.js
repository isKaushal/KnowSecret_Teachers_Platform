import Image from "next/image"
import ExperinceIcon from "../../public/images/centertile/experince/experince.png"


export default function Experince(){

    return(

        <div
          className=" maintile3 rounded-lg p-7 absolute overflow-hidden"
        >
          <div className="education-wrap-outer w-full h-full">
            <div className="Education w-full h-10">
              <h1 className="text-[#ff9d00] uppercase flex  lg:text-left text-4xl my-2">
                <Image className="w-[40px] mr-2"   src={ExperinceIcon} alt=""  />
                Experience
              </h1>
            </div>
            <div className="relative">
              <div
                id="Education-main"
                className="Education-main grid grid-cols-1 lg:mt-14 w-full h-full"
              >
                <div className=" grid lg:grid-cols-2 lg:grid-rows-2">
                  <div className="table-rows col-span-1 px-[5rem] py-[1rem] lg:py-[4rem]  ">
                    <h1 className="text-[#ff9d00] text-lg">Year</h1>
                    <h1 className="text-white lg:text-2xl">Organization</h1>
                    <h2 className="text-white lg:text-xl">Designation</h2>
                    <h1 className="text-white lg:text-2xl">Subject</h1>
                  </div>
                  <div className="table-rows col-span-1 px-[5rem] py-[1rem] lg:py-[4rem]  ">
                    <h1 className="text-[#ff9d00] text-lg">Year</h1>
                    <h1 className="text-white lg:text-2xl">Organization</h1>
                    <h2 className="text-white lg:text-xl">Designation</h2>
                    <h1 className="text-white lg:text-2xl">Subject</h1>
                  </div>
                  <div className="table-rows col-span-1 px-[5rem] py-[1rem] lg:py-[4rem]  ">
                    <h1 className="text-[#ff9d00] text-lg">Year</h1>
                    <h1 className="text-white lg:text-2xl">Organization</h1>
                    <h2 className="text-white lg:text-xl">Designation</h2>
                    <h1 className="text-white lg:text-2xl">Subject</h1>
                  </div>
                  <div className="table-rows col-span-1 px-[5rem] py-[1rem] lg:py-[4rem]  ">
                    <h1 className="text-[#ff9d00] text-lg">Year</h1>
                    <h1 className="text-white lg:text-2xl">Organization</h1>
                    <h2 className="text-white lg:text-xl">Designation</h2>
                    <h1 className="text-white lg:text-2xl">Subject</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


    )
} 