import styled from "styled-components";
import { useRouter } from "next/router";
import { useEffect, useState, useContext } from "react";
import { motion } from "framer-motion";

// components
import NavigationControls from "./context";

const AnimationClass = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: PopUp 1s forwards;

  @keyframes PopUp {
    0% {
      transform: scale(0.5);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

const CenterSection = styled.div`
  height: 100%;
  transition: 1s ease-in-out;

  .mainTransition {
    transition: 1s ease-in-out;
  }

  .maintile1,
  .maintile2,
  .maintile3,
  .maintile4,
  .maintile5,
  .maintile6 {
    height: 100%;
    width: 100%;
    background-color: #272727;
  }

  /* color: #ff9d00; yellow */
  /* color: #272727; card */
  display: flex;
  justify-content: center;
  align-items: center;

  /* main tile no2 Start */
  /* main tile no2 */

  #main-tile2 {
    transition: 1s ease-in-out;
    width: 62rem;
    background-color: #272727;
  }

  .second-image {
    transform: translateX(-2rem) translateY(2rem);
  }

  .list-item {
    line-height: 45px;
    font-size: 19px;
  }

  small {
    color: #b0b0b0;
  }

  /* .hobbies{
    display: none;
} */

  .hobbies > i {
    color: #ff9d00;
  }

  .hobbies-wrap::before {
    content: "";
    position: absolute;
    width: 98%;
    height: 1px;
    display: block;
    background: linear-gradient(
      0.25turn,
      rgb(39, 39, 39),
      rgb(255, 157, 0),
      rgb(39, 39, 39)
    );
  }

  .hobbies-wrap::after {
    content: "";
    width: 98%;
    top: 100%;
    height: 1px;
    position: absolute;
    display: block;
    background: linear-gradient(
      0.25turn,
      rgb(39, 39, 39),
      rgb(255, 157, 0),
      rgb(39, 39, 39)
    );
  }

  /* dots in key Frames css */

  /* main tile no2 */
  /* main tile no2 End */

  /* main tile no3 Start */
  /* main tile no3 */

  #main-tile3 {
    transition: 1s ease-in-out;
    width: 62rem;
    background-color: #272727;
  }
  .Education-main2::before {
    content: "";
    width: 1px;
    left: 50%;
    height: 100%;
    display: block;
    position: absolute;
    background: linear-gradient(
      rgb(39, 39, 39),
      rgb(255, 157, 0),
      rgb(39, 39, 39)
    );
  }
  .Education-main2::after {
    content: "";
    width: 100%;
    top: 50%;
    height: 1px;
    display: block;
    position: absolute;
    background: linear-gradient(
      0.25turn,
      rgb(39, 39, 39),
      rgb(255, 157, 0),
      rgb(39, 39, 39)
    );
  }

  /* main tile no3 */
  /* main tile no3 End */
  /*for education experince yellow lines*/

  @media screen and (min-width: 1024px) {
    .Education-main::before {
      content: "";
      width: 1px;
      left: 50%;
      height: 100%;
      display: block;
      position: absolute;
      background: linear-gradient(
        rgb(39, 39, 39),
        rgb(255, 157, 0),
        rgb(39, 39, 39)
      );
    }
    .Education-main::after {
      content: "";
      width: 100%;
      left: 50%;
      top: 50%;
      transform: translate(-50%);
      height: 1px;
      display: block;
      position: absolute;
      background: linear-gradient(
        0.25turn,
        rgb(39, 39, 39),
        rgb(255, 157, 0),
        rgb(39, 39, 39)
      );
    }
    .Experince-main::before {
      content: "";
      width: 1px;
      left: 50%;
      height: 100%;
      display: block;
      position: absolute;
      background: linear-gradient(
        rgb(39, 39, 39),
        rgb(255, 157, 0),
        rgb(39, 39, 39)
      );
    }

    .table-rows::after {
      content: "";
      width: 100%;
      left: 50%;
      top: 100%;
      transform: translate(-50%);
      height: 1px;
      display: block;
      position: absolute;
      background: linear-gradient(
        0.25turn,
        rgb(39, 39, 39),
        rgb(255, 157, 0),
        rgb(39, 39, 39)
      );
    }
  }

  /*for education experince yellow lines*/
  /* main tile no4 Start */
  /* main tile no4 */

  #main-tile4 {
    transition: 1s ease-in-out;
    width: 62rem;
    background-color: #272727;
  }

  .send {
    transition: 0.3s ease-in-out;
  }

  .send:hover {
    background-color: #ff9d00;
    color: white;
  }

  @media screen and (min-width: 1024px) {
  }

  /* main tile no4 */
  /* main tile no4 End */
  /* main tile no5 Start */
  /* main tile no5 */

  #main-tile5 {
    transition: 1s ease-in-out;
    width: 62rem;
    background-color: #272727;
  }

  .Testimonials-heading::after {
    content: "";
    width: 50%;
    height: 1px;
    margin-top: 0.5rem;
    display: block;
    background: linear-gradient(0.25turn, rgb(255, 157, 0) 0%, rgb(39, 39, 39));
  }

  .Testimonials-cards {
    /*demo width margin*/
    margin: 0rem 1rem;
    width: 50%;
    /*demo width margin*/
    background-color: #272727;
    box-shadow: 1px 1px 10px;

    ::before {
      content: "";
      width: 10rem;
      height: 28rem;
      transform: translate(-50%, -50%) rotate(340deg);
      display: block;
      background-color: #ffffff14;
      position: absolute;
      top: 80%;
      left: 0;
    }
  }

  .icons-name-wrap > i {
    color: #ff9d00;
    font-size: 2rem;
  }

  /* main tile no5 */
  /* main tile no5 End */
`;

export default function CenterContent({ children }) {
  const router = useRouter();
  const { globalNavBehaviour, setGlobalnavBehaviour } =
    useContext(NavigationControls);

  const ExpendChecker = globalNavBehaviour;
  const [centerTileWidth, setCenterTileWidth] = useState();
  const [centerTileInitial, setCenterTileAnimte] = useState();

  useEffect(() => {
    const resolution = window.innerWidth;
    console.log(resolution);
    if (resolution >= 1024) {
      setCenterTileWidth("49.5rem");
      setCenterTileAnimte("38rem");
    }

    if (resolution >= 1280) {
      setCenterTileWidth("66rem");
      setCenterTileAnimte("50rem");
    }

    if (resolution >= 1536) {
      setCenterTileWidth("80rem");
      setCenterTileAnimte("61rem");
    }
  });

  const initialsState = {
    width: centerTileInitial,
  };

  const centerAnimate = {
    width: centerTileWidth,
  };

  return (
    <CenterSection>
      <motion.div
        animate={ExpendChecker ? centerAnimate : initialsState}
        transition={{ delay: "0.5" }}
        className="lg:w-[38rem] xl:w-[50rem] 2xl:w-[61rem] tiles-wrap center-tiles-wrap w-full lg:mx-4 h-[100%] lg:h-[100%] flex justify-center items-center relative"
      >
        <AnimationClass key={router.asPath}>{children}</AnimationClass>
      </motion.div>
    </CenterSection>
  );
}
