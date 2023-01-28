import Image from "next/image";

// images
import profileimg from "../../public/images/profilepage/download.jpg";
import laptopimg from "../../public/images/profilepage/centertile/home/download.png";

export default function Home({ profileDetails }) {
  return (
    <div className=" bg-[#272727] h-full w-full grid py-14 lg:p-5 container w-full rounded-lg items-center absolute lg:flex">
      <div className="MainTile1-image-wrap grid items-center lg:hidden lg:h-0">
        <div className="MainTile1-image-wrap-inner overflow-hidden w-full justify-center flex">
          <Image
            className="MainTile1-image rounded-full w-44 h-44"
            src={profileimg}
            alt=""
          />
        </div>
      </div>
      <div className="name-conatiner w-full lg:px-0 justify-between items-center h-40 lg:h-[60%] lg:flex h-initial">
        <div className="   ">
          <h2 className="WEB-DESIGNER text-center text-white  lg:text-left uppercase">
            WEB DESIGNER
          </h2>
          <h1 className="name-inner text-white text-center lg:text-left text-xl md:text-2xl">
            Hello , I’m
            <span className="main-name text-xl md:text-2xl xl:text-3xl text-[#ff9d00] ">
              {" "}
              Kaushal Kumar Soni
            </span>
          </h1>
          <h1 className="welcome-text text-white text-center text-xl lg:text-left md:text-2xl">
            Welcome to my World.
          </h1>
          <div
            id="DownloadCV-button-wrap"
            className="w-full lg:hidden grid justify-center items-center overflow-hidden"
          >
            <button
              id="navigation-button"
              className="button rounded-full w-44 h-14 text-white my-14  text-xl bg-[#ff9d00]"
            >
              Download CV
            </button>
          </div>
        </div>
        <div className="image">
          <Image
            className="name-side-image hidden lg:block lg:w-[13rem] xl:w-[16rem] 2xl:w-[20rem]  "
            priority
            src={laptopimg}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
