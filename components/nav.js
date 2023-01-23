import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";

// icons
import { SlNote } from "react-icons/sl";
import { HiOutlineAcademicCap, HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineMenu, AiOutlineUser, AiOutlineHome } from "react-icons/ai";

// components
import NavigationControls from "../components/context";
// style sheets

// images
import teacherPhoto from "../public/images/profileimage/download.jpg";
import logo from "../public/images/profileimage/logo.png";

// for demo

// styles

const NavigationWrap = styled.div`
  .mainTransition {
    transition: 1s ease-in-out;
  }

  .custom-transition {
    transition: 0.4s ease-in-out;
  }

  .nav-titles {
    transform: translateY(-4px);
    opacity: 0;
    transition: 0.3s ease-in-out;
  }
  .navicons {
    color: #ff9d00;
    font-size: 20px;
    transform: translateY(0px);
    transition: 0.3s ease-in-out;
  }

  .navigation-icons:hover .nav-titles {
    transform: translateY(0px);
    opacity: 1;
  }

  .navigation-icons:hover .navicons {
    transform: translateY(-4px);
  }

  /* js className toggles */

  .nav-titles-hover {
    transition: 0.3s ease-in-out !important ;
    transform: translateY(0px) !important;
    opacity: 1 !important;
  }

  /* js className toggles */

  .user-email,
  .user-address > i {
    color: #ffc40080;
  }

  .svg-wrap > .svg {
    color: #ffc40080;
  }
`;

export default function NavigationBar() {
  // for access router
  const router = useRouter();
  // for access router

  // for set navigation default width
  const [navigationWidth, setnavigationWidth] = useState(false);
  useEffect(() => {
    const resolution = window.innerWidth;
    console.log(resolution);
    if (resolution >= 1024) {
      setnavigationWidth("17rem");
    }

    if (resolution >= 1280) {
      setnavigationWidth("20rem");
    }
  });
  // for set navigation default width

  // for mobile nav Behaviour
  const [navOpen, setNavOpen] = useState(false);
  // for mobile nav Behaviour

  // global state by context
  const { globalNavBehaviour, setGlobalnavBehaviour } =
    useContext(NavigationControls);
  // global state by context

  // for set pc navigation Behaviour
  const [navBehaviour, setnavBehaviour] = useState(false);
  // for set pc navigation Behaviour

  // for collect data from href links
  function CustomLink({ children, href, navBehaviourControl }) {
    if (router.asPath === href) {
      setGlobalnavBehaviour(navBehaviourControl);
      setnavBehaviour(navBehaviourControl);
    }

    const clickhandle = () => {
      setNavOpen(false);
    };

    return (
      <Link href={href} onClick={clickhandle}>
        {children}
      </Link>
    );
  }
  // for collect data from href links

  return (
    <NavigationWrap className=" h-[10%] lg:h-full ">
      <div className="nav-button w-full flex justify-between items-center relative pr-4 lg:hidden">
        <Image width="auto" height="auto" priority src={logo} alt="" />
        <div className="bars-wrap">
          <div
            onClick={() => setNavOpen(!navOpen)}
            className="nav-button-inner bg-[#4b4b4b] flex justify-center z-10 items-center w-[3rem] h-[3rem] rounded-lg"
          >
            <AiOutlineMenu className="text-[#ff9d00]  scale-[1.5]" />
          </div>
          <div>
            <div
              style={navOpen ? { height: "23.5rem" } : { height: "0" }}
              className="dropdown custom-transition  bg-[#4b4b4b] absolute z-20 rounded-lg items-center ml-[-0.8rem] mt-[0.5rem] overflow-hidden"
            >
              {/* <!-- its empty --> */}
              <div className="empty py-2 w-full"></div>
              {/* <!-- its empty --> */}

              <CustomLink href={`/${router.query.profileid}/profile/home`}>
                <div
                  id="home"
                  className="navigation-icons py-2 cursor-pointer gsap1 w-[100%] flex flex-col justify-center items-center "
                >
                  <AiOutlineHome className="navicons" />
                  <small
                    id="hometitle"
                    className="nav-titles text-[#b0b0b0] text-center mt-1 font-bold"
                  >
                    Home
                  </small>
                </div>
              </CustomLink>

              <CustomLink href={`/${router.query.profileid}/profile/about`}>
                <div
                  id="user"
                  className="navigation-icons py-2 cursor-pointer gsap1 w-[100%] flex flex-col justify-center items-center "
                >
                  <AiOutlineUser className="navicons" />
                  <small
                    id="usertitle"
                    className="nav-titles text-[#b0b0b0] text-center mt-1 font-bold"
                  >
                    About
                  </small>
                </div>
              </CustomLink>

              <CustomLink href={`/${router.query.profileid}/profile/education`}>
                <div
                  id="Education"
                  className="navigation-icons py-2 cursor-pointer gsap1 w-[100%] flex flex-col justify-center items-center "
                >
                  <HiOutlineAcademicCap className="navicons" />
                  <small
                    id="clipbordtitle"
                    className="nav-titles text-[#b0b0b0] text-center mt-1 font-bold"
                  >
                    Education
                  </small>
                </div>
              </CustomLink>

              <CustomLink href={`/${router.query.profileid}/profile/experince`}>
                <div
                  id="Experience"
                  className="navigation-icons py-2 cursor-pointer gsap2 w-[100%] flex flex-col justify-center items-center "
                >
                  <SlNote className="navicons" />
                  <small className="nav-titles text-[#b0b0b0] text-center mt-1 font-bold">
                    Experience
                  </small>
                </div>
              </CustomLink>

              <CustomLink
                href={`/${router.query.profileid}/profile/testimonials`}
              >
                <div
                  id="openbook"
                  className="navigation-icons cursor-pointer gsap2 w-[100%] py-2 flex flex-col justify-center items-center "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="openbook"
                    fill="none"
                    className="navicons flex w-full justify-center h-5 stroke-[#ff9d00]"
                    style={{ strokeWidth: "8" }}
                    version="1.1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 123.961 123.961"
                  >
                    <path d="M49.8,29.032c3.1-1.3,4.4-5,3-8l-4.9-10.3c-1.4-2.899-4.8-4.2-7.8-2.899c-8.5,3.6-15.8,8.3-21.6,14   C11.4,28.532,6.6,36.232,4,44.732c-2.6,8.601-4,20.3-4,35.2v30.7c0,3.3,2.7,6,6,6h39.3c3.3,0,6-2.7,6-6v-39.3c0-3.301-2.7-6-6-6   H26.5c0.2-10.101,2.6-18.2,7-24.301C37.1,36.133,42.5,32.133,49.8,29.032z" />
                    <path d="M120.4,29.032c3.1-1.3,4.399-5,3-8l-4.9-10.199c-1.4-2.9-4.8-4.2-7.8-2.9c-8.4,3.6-15.601,8.3-21.5,13.9   c-7.101,6.8-12,14.5-14.601,23c-2.6,8.399-3.899,20.1-3.899,35.1v30.7c0,3.3,2.7,6,6,6H116c3.3,0,6-2.7,6-6v-39.3   c0-3.301-2.7-6-6-6H97.1c0.2-10.101,2.601-18.2,7-24.301C107.7,36.133,113.1,32.133,120.4,29.032z" />
                  </svg>
                  <small
                    id="openbooktitle"
                    className="nav-titles text-[#b0b0b0] text-center mt-1 font-bold"
                  >
                    Testimonials
                  </small>
                </div>
              </CustomLink>

              <CustomLink href={`/${router.query.profileid}/profile/contact`}>
                <div
                  id="location"
                  className="navigation-icons py-2 cursor-pointer gsap2 w-[100%] flex flex-col justify-center items-center "
                >
                  <HiOutlineLocationMarker className="navicons" />
                  <small
                    id="locationtitle"
                    className="nav-titles text-[#b0b0b0] text-center mt-1 font-bold"
                  >
                    Contact
                  </small>
                </div>
              </CustomLink>
            </div>
          </div>
        </div>
      </div>
      <div className="main-inner h-full justify-center items-center hidden lg:flex  ">
        {/* <!-- navigation bar --> */}
        <motion.div
          // initial={{width:navigationWidth}}
          animate={
            navBehaviour ? { width: "5.5rem" } : { width: navigationWidth }
          }
          transition={{ delay: "0.5" }}
          id="navigation"
          className=" bg-[#272727]     lg:w-[17rem] xl:w-[20rem]  lg:block lg:rounded-lg overflow-hidden lg:h-full "
        >
          <motion.div
            initial={{ height: "65%" }}
            animate={navBehaviour ? { height: "34%" } : { height: "65%" }}
            id="navigation-image-wrap"
            className="navigation-image-wrap grid py-5 pb-0 justify-center items-center"
          >
            <div className="w-full grid justify-center items-center">
              <motion.div
                transition={{ delay: "0.5" }}
                initial={{ width: "11rem" }}
                animate={
                  navBehaviour ? { width: "4.5rem" } : { width: "11rem" }
                }
                id="main-navigation-wrap"
                className="nav-Image-wrap w-[11rem]  flex justify-center rounded-full overflow-hidden items-center"
              >
                <Image
                  className="nav-image w-full h-full"
                  alt=""
                  priority
                  width="auto"
                  height="auto"
                  src={teacherPhoto}
                />
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: "1" }}
              transition={navBehaviour ? null : { delay: "0.8" }}
              animate={navBehaviour ? { opacity: 0 } : { opacity: "1" }}
              className="grid h-[8rem] overflow-hidden "
            >
              <h1
                id="navigation-name"
                className="na-name w-full text-white text-center text-2xl xl:text-3xl overflow-hidden"
              >
                Kaushal Kumar Soni
              </h1>
              <div
                id="DownloadCV-button-wrap"
                className=" w-full grid justify-center items-center overflow-hidden"
              >
                <button
                  id="navigation-button"
                  className="button bg-[#ff9d00]  rounded-full w-44 h-14 text-white text-xl"
                >
                  Download CV
                </button>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ height: "35%" }}
            animate={navBehaviour ? { height: "65%" } : { height: "35%" }}
            id="navigation-buttons"
            className="navigation-buttons w-full justify-center h-[35%]  p-2 items-center grid grid-rows-2"
          >
            <motion.div
              transition={navBehaviour ? null : { delay: "0.5" }}
              initial={{ display: "grid" }}
              animate={
                navBehaviour ? { display: "block" } : { display: "grid" }
              }
              id="navigation-button-wrap"
              className="navigation-button-wrap w-full grid  justify-center items-center grid-cols-3"
            >
              <CustomLink
                navBehaviourControl={false}
                href={`/${router.query.profileid}/profile/home`}
              >
                <div
                  id="home"
                  className="navigation-icons cursor-pointer gsap1 w-[100%] p-4 xl:p-[1.5rem] 2xl:p-4  flex flex-col justify-center items-center "
                >
                  <AiOutlineHome id="home" className="navicons" />

                  <small
                    id="hometitle"
                    className="nav-titles text-[#b0b0b0] text-center mt-1 font-bold"
                  >
                    Home
                  </small>
                </div>
              </CustomLink>
              <CustomLink
                navBehaviourControl={true}
                href={`/${router.query.profileid}/profile/about`}
              >
                <div
                  id="about"
                  className="navigation-icons cursor-pointer gsap1 w-[100%] p-4 xl:p-[1.5rem] 2xl:p-4  flex flex-col justify-center items-center "
                >
                  <AiOutlineUser id="about" className="navicons" />
                  <small
                    id="usertitle"
                    className="nav-titles text-[#b0b0b0] text-center mt-1 font-bold"
                  >
                    About
                  </small>
                </div>
              </CustomLink>
              <CustomLink
                navBehaviourControl={true}
                href={`/${router.query.profileid}/profile/education`}
              >
                <div
                  id="education"
                  className="navigation-icons cursor-pointer gsap1 w-[100%] p-4 xl:p-[1.5rem] 2xl:p-4  flex flex-col justify-center items-center "
                >
                  <HiOutlineAcademicCap id="education" className="navicons" />
                  <small
                    id="clipbordtitle"
                    className="nav-titles text-[#b0b0b0] text-center mt-1 font-bold"
                  >
                    Education
                  </small>
                </div>
              </CustomLink>
            </motion.div>
            <motion.div
              transition={navBehaviour ? null : { delay: "0.5" }}
              initial={{ display: "grid" }}
              animate={
                navBehaviour ? { display: "block" } : { display: "grid" }
              }
              id="navigation-button-wrap"
              className="navigation-button-wrap w-full grid justify-center items-center grid-cols-3"
            >
              <CustomLink
                navBehaviourControl={true}
                href={`/${router.query.profileid}/profile/experince`}
              >
                <div
                  id="experience"
                  className="navigation-icons cursor-pointer gsap2 w-[100%] p-4 xl:p-[1.5rem] 2xl:p-4  flex flex-col justify-center items-center "
                >
                  <SlNote id="experience" className="navicons" />
                  <small className="nav-titles text-[#b0b0b0] text-center mt-1 font-bold">
                    Experience
                  </small>
                </div>
              </CustomLink>
              <CustomLink
                navBehaviourControl={true}
                href={`/${router.query.profileid}/profile/testimonials`}
              >
                <div
                  id="testimonials"
                  className="navigation-icons cursor-pointer gsap2 w-[100%] p-4 xl:p-[1.5rem] 2xl:p-4  flex flex-col justify-center items-center "
                >
                  {/* <FaQuoteLeft className="navicons" /> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="testimonials"
                    fill="none"
                    className="navicons flex w-full justify-center h-5 stroke-[#ff9d00]"
                    version="1.1"
                    style={{ strokeWidth: "8" }}
                    x="0px"
                    y="0px"
                    viewBox="0 0 123.961 123.961"
                  >
                    <path d="M49.8,29.032c3.1-1.3,4.4-5,3-8l-4.9-10.3c-1.4-2.899-4.8-4.2-7.8-2.899c-8.5,3.6-15.8,8.3-21.6,14   C11.4,28.532,6.6,36.232,4,44.732c-2.6,8.601-4,20.3-4,35.2v30.7c0,3.3,2.7,6,6,6h39.3c3.3,0,6-2.7,6-6v-39.3c0-3.301-2.7-6-6-6   H26.5c0.2-10.101,2.6-18.2,7-24.301C37.1,36.133,42.5,32.133,49.8,29.032z" />
                    <path d="M120.4,29.032c3.1-1.3,4.399-5,3-8l-4.9-10.199c-1.4-2.9-4.8-4.2-7.8-2.9c-8.4,3.6-15.601,8.3-21.5,13.9   c-7.101,6.8-12,14.5-14.601,23c-2.6,8.399-3.899,20.1-3.899,35.1v30.7c0,3.3,2.7,6,6,6H116c3.3,0,6-2.7,6-6v-39.3   c0-3.301-2.7-6-6-6H97.1c0.2-10.101,2.601-18.2,7-24.301C107.7,36.133,113.1,32.133,120.4,29.032z" />
                  </svg>
                  <small
                    id="openbooktitle"
                    className="nav-titles text-[#b0b0b0] text-center mt-1 font-bold"
                  >
                    Testimonials
                  </small>
                </div>
              </CustomLink>
              <CustomLink
                navBehaviourControl={false}
                href={`/${router.query.profileid}/profile/contact`}
              >
                <div
                  id="contact"
                  className="navigation-icons cursor-pointer gsap2 w-[100%] p-4 xl:p-[1.5rem] 2xl:p-4 flex flex-col justify-center items-center "
                >
                  <HiOutlineLocationMarker id="contact" className="navicons" />
                  <small
                    id="locationtitle"
                    className="nav-titles text-[#b0b0b0] text-center mt-1 font-bold"
                  >
                    Contact
                  </small>
                </div>
              </CustomLink>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </NavigationWrap>
  );
}
