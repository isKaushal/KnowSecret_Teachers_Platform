import Image from "next/image";
import styled from "styled-components";
// icon
import { BiCurrentLocation } from "react-icons/bi";
// component
import Saction from "../components/Saction";
import CustomSelect from "../components/Select";
// image
import Blank from "../public/images/marketplace/blank-image.png";
import { useMedia } from "react-use";

const MainStyle = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Rubik:wght@400&family=Teko:wght@300&display=swap");
  font-family: "Rubik", sans-serif;
  /* font-family: "Teko", sans-serif; */
`;

const ImageSaction = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url(/images/marketplace/bg.jpg);
  background-size: cover;
  background-repeat: no-repeat;
`;
const SearchBar = styled.div`

  .InputWrap {
    transition: 0.7s;
    width: 100%;
    height: 100%;
    border: 1px solid rgba(226 232 240);

    input,
    select {
      outline: none;
      width: 100%;
      height: 100%;
      padding: 1rem;
      background: white;
    }
  }
  button {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    font-weight: 500;
    font-size: 20px;
    height: 100%;
    width: 50%;
    background-color: #ff9d00;
  }
`;
const SearchBarMobile = styled.div`

  .InputWrap {
    transition: 0.7s;
    width: 100%;
    height: 100%;
    margin: 0.5rem 0rem;

    input{
      background: #e2e8f0;
      outline: none;
      width: 100%;
      height: 100%;
      padding: 1rem;
    }
  }
  button {
    font-weight: 500;
    font-size: 20px;
    height: 100%;
    width: 100%;
    background-color: #ff9d00;
  }
`;
const FooterStyle = styled.div`
  width: 100%;
  height: 4rem;
  padding: 1rem;
  text-align: center;
  position: relative;

  &::before {
    content: "";
    top: 0;
    left: 50%;
    transform: translate(-50%);
    width: 100%;
    height: 2px;
    position: absolute;
    /* background-color: #a1bee7; */
    background: linear-gradient(90deg, #e2e8f0 0%, #8b8b8b, #e2e8f0 100%);

    /* background-color: #000; */
  }
`;

const Header = () => {
  return (
    <div className="w-full  h-[4rem] flex justify-between p-4 fixed z-10  top-0 left-0 bg-[#0000004d] ">
      <div>
        <h1 className="text-2xl  text-white  ">LOGO</h1>
      </div>
      <div className=" flex justify-center ">
        <ul className="flex">
          <li className="px-8 text-white">
            <a href="">Home</a>
          </li>
          <li className="px-8 text-white">
            <a href="">About</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

const ImageContainer = () => {
  return (
    <Saction className="pt-0 pb-0 ">
      <ImageSaction className="w-full h-[25rem] flex justify-center items-center text-lg md:text-2xl  text-white text-center lg:text-5xl capitalize leading-snug ">
        <h1 className="px-4">
          Latest online educational job opportunities around the world Your
          search starts here
        </h1>
      </ImageSaction>
    </Saction>
  );
};

const Filters = () => {

  const resolution = useMedia("(min-width:700px)",true)

  return (
    <div className="SearchBar  w-full bg-slate-200 flex justify-center  ">
      {resolution ?
        <SearchBar className="w-[80%] h-20 bg-white  rounded-lg -translate-y-2/4 shadow-xl z-[1] flex justify-between items-center  ">
          <div style={{ borderTopLeftRadius: "8px" }} className="InputWrap">
            <CustomSelect />
          </div>
          <div className="InputWrap flex">
            <div className="w-[10%] h-full flex justify-center items-center text-2xl text-[#c3cfe0]  ">
              <BiCurrentLocation />
            </div>
            <input type="text" placeholder="Your Current Location" />
          </div>
          <button>FIND</button>
        </SearchBar>
        : 
        <SearchBarMobile className="flex flex-col w-[80%] z-[1] "  >
          <div className="bg-white p-4 rounded-lg mt-4  flex flex-col  ">
            <div className="InputWrap  ">
              <CustomSelect />
            </div>
            <div className="InputWrap flex  ">
              <input className="rounded-lg"  type="text" placeholder="Your Current Location" />
            </div>
            <button className="p-4 rounded-lg" >FIND</button>
          </div>
        </SearchBarMobile>
       }
    </div>
  );
};

const ProFiles = () => {
  return (
    <div className="w-full pb-14 bg-slate-200 flex relative -z-0  justify-center ">
      <div className="w-[80%] grid justify-center grid-cols-1  sm:grid-cols-2  lg:grid-cols-3  xl:grid-cols-4">
        {/* cards */}

        {Array.from({ length: 4 }).map(() => {
          return (
            <div className="col-span-1 h-72  mt-20 rounded-lg p-4 relative  bg-white shadow-2xl sm:mx-2 ">
              <div className="w-full pl-[10%] absolute">
                <div className="w-[6rem] h-[6rem] bg-slate-200 border-[3px] -translate-y-2/3 border-white rounded-full flex justify-center items-center  ">
                  <div className=" w-[5rem] h-auto ">
                    <Image
                      className="w-full h-full"
                      placeholder="blur"
                      blurDataURL="/images/marketplace/blank-image.png"
                      src={Blank}
                      alt={"Blank"}
                      quality={100}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-10   ">
                <h1 className="text-2xl ">Kaushal Kumar Soni</h1>
                <h2 className="text-xl mt-2 uppercase text-green-500 font-bold  ">
                  Maths
                </h2>
              </div>
              <div>
                <div className="mt-8 mb-2 flex justify-between px-4">
                  <div>
                    <h5 className="">Location :</h5>
                    <h3 className="flex my-1 text-sm font-semibold  ">
                      <BiCurrentLocation className="m-1 mx-1 " /> Jaipur
                    </h3>
                  </div>
                  <div>
                    <h5 className="">Experince :</h5>
                    <h3 className="flex my-1 text-sm font-semibold   ">
                      1-2 years
                    </h3>
                  </div>
                </div>
                <div className="flex justify-end">
                  <button className=" transition-all mx-2 px-8 py-2 rounded-md text-green-500 border-2 border-green-500 my-[0.5rem]  hover:bg-green-500 hover:text-white ">
                    View
                  </button>
                </div>
              </div>
            </div>
          );
        })}

        {/* cards */}
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <FooterStyle className="bg-slate-200">
      <h5>Copyright@testntrack.com</h5>
    </FooterStyle>
  );
};

export default function MarketPlace() {
  return (
    <MainStyle className="w-screen h-screen overflow-x-hidden">
      <Header />
      <ImageContainer />
      <Filters />
      <ProFiles />
      <Footer />
    </MainStyle>
  );
}
