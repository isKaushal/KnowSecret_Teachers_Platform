import  {useEffect, useState} from "react";
import Image from "next/image";
import styled from "styled-components";
import { GoX } from "react-icons/go";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

// images

import Logo from "../public/images/profilepage/logo.png";
import Img from "../public/images/profilepage/download.jpg";

const MainStyle = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Rubik:wght@400&family=Teko:wght@300&display=swap");
  font-family: "Rubik", sans-serif;
`;

const TransitionDiv = styled.span`
  transition: 0.3s all;
`;

const Sidebar = styled.div`
  transition: 0.3s all;
  position: relative;

  width: ${(props) => (props.Expend === true ? "25%" : 0)};
  padding: ${(props) => (props.Expend === true ? "1rem" : 0)};

  .demo {
    cursor: pointer;
    overflow: hidden;
    font-size: 25px;
    color: white;
    position: absolute;
    top: 35%;
    left: 100%;
    width: 15px;
    height: 5rem;
    display: flex;
    align-items: center;
    background-color: #272727;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }

  .pageTrack {
    position: relative;
    ::before {
      transition: 0.2s all;
      content: "";
      width: 100%;
      height: 50%;
      left: ${(props) => (props.Expend === true ? "1rem" : 0)};
      top: ${(props) => props.position};
      background-color: #ff9d00;
      position: absolute;
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
    }
  }
`;

const firstdata = {
  image: "image",
  username: "Kaushal Kumar Soni ",
  contact: "9799170635",
  email: "kaushalkumar@gmail.com",
  faculty: "maths",
  dateofbirth: "31.12.2001",
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

const AdminSidebar = ({ expend, setExpend }) => {
  const [position, setposition] = useState("0%");
  const CheckPosition = ({ position, children, className }) => {
    const onClick = () => {
      setposition(position);
    };
    return (
      <div className={className} onClick={onClick}>
        {children}
      </div>
    );
  };

  return (
    <Sidebar Expend={expend} position={position} className="bg-[#272727] ">
      <div onClick={() => setExpend(true)} className="demo">
        &#8250;
      </div>
      <div className="w-full my-4  flex justify-end text-white text-2xl  ">
        <GoX className="cursor-pointer" onClick={() => setExpend(false)} />
      </div>
      <div className="pageTrack w-full  ">
        <CheckPosition
          className=" overflow-hidden z-[10] relative w-full h-full cursor-pointer  "
          position="0%"
        >
          <h1 className="text-xl my-4  text-center  text-white  ">PROFILES</h1>
        </CheckPosition>
        <CheckPosition
          className=" overflow-hidden z-[10] relative w-full h-full cursor-pointer  "
          position="50%"
        >
          <h1 className="text-xl my-4  text-center  text-white  ">QUERY</h1>
        </CheckPosition>
      </div>
    </Sidebar>
  );
};

const ProfilsSaction = ({ expend }) => {
  const [profileActivationButton, setprofileActivationButton] = useState(false);

  return (
    <TransitionDiv
      className={`w-[100%] bg-transparient p-4 overflow-x-hidden `}
    >
      <div className=" grid grid-cols-3">
        {/* cards */}

        {Array.from({ length: 6 }).map(() => {
          return (
            <div className="m-1.5 p-4 rounded-md bg-[#272727] col-span-1  ">
              <div className="flex  w-full p-2 h-[30%] ">
                <div className="w-[25%]  ">
                  <Image
                    src={Img}
                    alt={firstdata.username}
                    className="w-[4.5rem] h-[4.5rem] rounded-full  "
                  />
                </div>
                <div>
                  <h1 className=" text-2xl uppercase text-white   ">
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
                  date of birth :-{" "}
                  <span className="text-[#ff9d00]">
                    {firstdata.dateofbirth}
                  </span>
                </h3>
                <h3 className="text-white leading-[1.9rem]   ">
                  Email :-{" "}
                  <span className="text-[#ff9d00]">{firstdata.email}</span>
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
                        profileActivationButton === false
                          ? "#ff0000"
                          : "#04ff04",
                      boxShadow:
                        profileActivationButton === false
                          ? "1px 1px 20px 6px #ff0000"
                          : "1px 1px 20px 6px  #04ff04",
                    }}
                    className={"  w-1.5 h-1.5 my-auto mx-4 rounded-full"}
                  ></div>
                </div>
                <div className="h-full ">
                  <button
                    className={` transition-all ${
                      expend ? "mx-1" : "mx-2"
                    } px-8 py-2 rounded-md text-[#ff9d00] border-2 border-[#ff9d00] my-[0.5rem]  hover:bg-[#ff9d00] hover:text-white `}
                  >
                    View
                  </button>
                  <button
                    onClick={() =>
                      setprofileActivationButton(!profileActivationButton)
                    }
                    className={` transition-all ${
                      expend ? "mx-1" : "mx-2"
                    } px-8 py-2 rounded-md text-[#ff9d00] border-2 border-[#ff9d00] my-[0.5rem]  hover:bg-[#ff9d00] hover:text-white `}
                  >
                    {profileActivationButton === false
                      ? "Activate"
                      : "Dactivate"}
                  </button>
                </div>
              </div>
            </div>
          );
        })}

        {/* cards */}
      </div>
    </TransitionDiv>
  );
};

export default function Admin() {
  const [expend, setExpend] = useState(false);
  const session = useSession();
  const Router = useRouter();
  if (session.status === "unauthenticated") {
    Router.push("/");
  }

  return (
    <MainStyle className="w-screen h-screen bg-black overflow-hidden  ">
      <AdminLogoBar />
      <div className="flex w-full h-[90%] ">
        <AdminSidebar expend={expend} setExpend={setExpend} />
        <ProfilsSaction expend={expend} />
      </div>
    </MainStyle>
  );
}
