import { useState } from "react";
import Image from "next/image";

// images

import Logo from "../public/images/profilepage/logo.png";
import Img from "../public/images/profilepage/download.jpg";

const firstdata = {
  image: "image",
  username: "Kaushal Kumar Soni ",
  contact: "9799170635",
  email: "kaushalkumar@gmail.com",
  faculty: "maths",
  dataofbirth: "31.12.2001",
  address: "nehru nagar panipech jaipur",
  workshops: [
    {
      workshopname: "Demo name 1",
      workshopplace: "Delhi",
    },
    {
      workshopname: "Demo name 2",
      workshopplace: "Delhi",
    },
    {
      workshopname: "Demo name 3",
      workshopplace: "Delhi",
    },
    {
      workshopname: "Demo name 4",
      workshopplace: "Delhi",
    },
  ],
  rating: {
    computer: "2",
    language: "3",
    sports: "4",
    photography: "1",
    others: "2",
  },
  hobbies: "Music, Travel, Movie, Sports, Reading",
  awards: [{ award: "one" }, { award: "two" }, { award: "three" }],
  education: [
    {
      year: "2015",
      university: "rajasthan university",
      degree: "bakwass degree",
    },
    {
      year: "2016",
      university: "rajasthan university",
      degree: "bakwass degree",
    },
    {
      year: "2017",
      university: "rajasthan university",
      degree: "bakwass degree",
    },
    {
      year: "2018",
      university: "rajasthan university",
      degree: "bakwass degree",
    },
  ],
  experince: [
    {
      year: "2015",
      organization: "testntrack institute",
      designation: "principal",
      subject: "science",
    },
    {
      year: "2016",
      organization: "testntrack institute",
      designation: "principal",
      subject: "science",
    },
    {
      year: "2017",
      organization: "testntrack institute",
      designation: "principal",
      subject: "science",
    },
    {
      year: "2018",
      organization: "testntrack institute",
      designation: "principal",
      subject: "science",
    },
    {
      year: "2019",
      organization: "testntrack institute",
      designation: "principal",
      subject: "science",
    },
    {
      year: "2020",
      organization: "testntrack institute",
      designation: "principal",
      subject: "science",
    },
    {
      year: "2021",
      organization: "testntrack institute",
      designation: "principal",
      subject: "science",
    },
    {
      year: "2022",
      organization: "testntrack institute",
      designation: "principal",
      subject: "science",
    },
  ],
  testimonials: [
    {
      image: "",
      studentname: "shikha khandal",
      studentclass: "10",
    },
    {
      image: "",
      studentname: "shikha khandal",
      studentclass: "11",
    },
    {
      image: "",
      studentname: "shikha khandal",
      studentclass: "12",
    },
    {
      image: "",
      studentname: "shikha khandal",
      studentclass: "13",
    },
  ],
};

const AdminLogoBar = () => {
  return (
    <div className=" h-[10%] p-4 flex justify-between bg-[#272727] ">
      <Image src={Logo} alt="" />
      <input
        type="text"
        placeholder="Search. . ."
        className="h-[2.5rem] p-4 my-auto bg-black rounded-full outline-none text-white "
      />
    </div>
  );
};

const AdminSidebar = () => {
  return (
    <div className="w-[20%] bg-[#272727] p-8  ">
      <h1 className="text-xl text-white  ">PROFILES</h1>
    </div>
  );
};

const ProfilsSaction = () => {
  const [profileActivationButton, setprofileActivationButton] = useState(false);

  return (
    <div className="w-[90%] bg-transparient p-4 overflow-x-hidden ">
      <div className=" grid grid-cols-2  ">
        <div className="m-2 shadow-2xl p-4 rounded-xl bg-[#272727] col-span-1  ">
          <div className="flex  w-full p-2 h-[30%] ">
            <div className="w-[30%]  ">
              <Image
                src={Img}
                alt={firstdata.username}
                className="w-[4.5rem] h-[4.5rem] rounded-full  "
              />
            </div>
            <div>
              <h1 className="text-2xl uppercase text-white   ">
                {firstdata.username}
              </h1>
              <h3 className="text-lg uppercase text-white   ">
                faculty of {firstdata.faculty}
              </h3>
            </div>
          </div>
          <div className=" w-full h-[45%] p-2 pt-0   ">
            <h3 className="text-white leading-[1.9rem] capitalize  ">
              address :-{" "}
              <span className="text-[#ff9d00]">{firstdata.address}</span>
            </h3>
            <h3 className="text-white leading-[1.9rem] capitalize  ">
              contact :-{" "}
              <span className="text-[#ff9d00]">{firstdata.contact}</span>
            </h3>
            <h3 className="text-white leading-[1.9rem] capitalize  ">
              data of birth :-{" "}
              <span className="text-[#ff9d00]">{firstdata.dataofbirth}</span>
            </h3>
            <h3 className="text-white leading-[1.9rem]   ">
              Email :- <span className="text-[#ff9d00]">{firstdata.email}</span>
            </h3>
            <h3 className="text-white leading-[1.9rem] capitalize  ">
              hobbies :-{" "}
              <span className="text-[#ff9d00]">{firstdata.hobbies}</span>
            </h3>
          </div>
          <div className="h-[25%] flex justify-between w-full p-2  ">
            <div className="text-white my-auto flex  ">
              Status
              <div
                style={{
                  backgroundColor:
                    profileActivationButton === false ? "#ff0000" : "#04ff04",
                  boxShadow:
                    profileActivationButton === false
                      ? "1px 1px 20px 6px #ff0000"
                      : "1px 1px 20px 6px  #04ff04",
                }}
                className={"  w-1.5 h-1.5 my-auto mx-4 rounded-full"}
              ></div>
            </div>
            <div className="h-full ">
              <button className=" transition-all mx-2 px-8 py-2 rounded-md text-[#ff9d00] border-2 border-[#ff9d00] my-[0.5rem]  hover:bg-[#ff9d00] hover:text-white ">
                View
              </button>

              <button
                onClick={() =>
                  setprofileActivationButton(!profileActivationButton)
                }
                className={` transition-all mx-2 px-8 py-2 rounded-md text-[#ff9d00] border-2 border-[#ff9d00] my-[0.5rem]  hover:bg-[#ff9d00] hover:text-white `}
              >
                {profileActivationButton === false ? "Activate" : "Dactivate"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Admin() {
  return (
    <div className="w-screen h-screen bg-black overflow-hidden  ">
      <AdminLogoBar />
      <div className="flex w-full h-[90%] ">
        <AdminSidebar />
        <ProfilsSaction />
      </div>
    </div>
  );
}
