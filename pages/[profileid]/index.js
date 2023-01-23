import styled from "styled-components";
import Image from "next/image";
// image
import Svg from "../../public/images/errorpage/11-01.svg"
// image

const ErrorPageStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #bfcdd6;
  padding: 1rem;
    width: 100vw;
    height: 100vh;

  .dot > :nth-child(1) {
    animation: animate 1.5s linear infinite;
  }

  .dot > :nth-child(2) {
    animation: animate 1.5s linear infinite;
    animation-delay: 0.2s;
  }

  .dot > :nth-child(3) {
    animation: animate 1.5s linear infinite;
    animation-delay: 0.4s;
  }

  .dot > :nth-child(4) {
    animation: animate 1.5s linear infinite;
    animation-delay: 0.6s;
    color: red;
  }

  @keyframes animate {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }
`;

export default function Pages() {
  return (
    <ErrorPageStyle>
      <div className=" w-full  lg:p-8 ">
        <div className="inner-wrap justify-center items-center flex w-full">
          <div className="w-[40%] mt-[-8rem] h-full flex justify-center items-center">
            <Image className="w-[70%]" src={Svg} alt="" />
          </div>
          <div className="w-[60%] h-full items-end grid">
            <div className="w-full justify-center">
              <div className="grid justify-center items-center">
                <div className="overflow-hidden">
                  <h1 className="text-5xl text-[#45494c] font-bold">
                    404 Server Error
                  </h1>
                </div>
                <h3 className="text-4xl flex w-full text-[#7b7d7e] font-bold text-center">
                  Oops, Something went wrong
                  <div className="dot">
                    <span>.</span>
                    <span>.</span>
                    <span>.</span>
                    <span>!</span>
                  </div>
                </h3>
                <div className="grid w-full">
                  <div className="button-wrap flex w-full items-center h-[8rem]">
                    <a href="/">
                      <button className="bg-blue-500 w-28 h-10 rounded-lg text-white my">
                        Login Page
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ErrorPageStyle>
  );
}
