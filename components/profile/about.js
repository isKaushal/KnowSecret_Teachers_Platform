import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

// slider
import Slider from "../../components/MyCustomeSlider";

// icons
import { FaMusic, FaPlaneDeparture } from "react-icons/fa";
import { BiMoviePlay } from "react-icons/bi";
import { RiBookMarkFill } from "react-icons/ri";
import { IoFootballSharp } from "react-icons/io5";

// images
import profileimg from "../../public/images/profilepage/download.jpg";

// demo list

import img1 from "../../public/images/playground/1.jpg";
import img2 from "../../public/images/playground/2.jpg";
import img3 from "../../public/images/playground/3.jpg";
import img4 from "../../public/images/playground/4.jpg";
import img5 from "../../public/images/playground/5.jpg";
import img6 from "../../public/images/playground/6.jpg";
import img7 from "../../public/images/playground/7.jpg";
import img8 from "../../public/images/playground/8.jpg";

const ImageList = [
  { src: img1, key: 1, alt: "Slider Images" },
  { src: img2, key: 2, alt: "Slider Images" },
  { src: img3, key: 3, alt: "Slider Images" },
  { src: img4, key: 4, alt: "Slider Images" },
  { src: img5, key: 5, alt: "Slider Images" },
  { src: img6, key: 6, alt: "Slider Images" },
  { src: img7, key: 7, alt: "Slider Images" },
  { src: img8, key: 8, alt: "Slider Images" },
];

export default function About() {
  const router = useRouter();
  return (
    <div className="  bg-[#272727] h-full w-full   rounded-lg p-7 pr-4 col-span-7 overflow-hidden absolute">
      <div className="main-tile2-content-wrap w-full h-full  overflow-y-scroll">
        <div className=" grid lg:flex">
          <div className=" w-full lg:w-2/5 col-span-1 lg:h-5/6 grid justify-center items-center">
            <div className="border-2 border-[#ff9d00] w-44 lg:w-56 xl:w-64  rounded-t-3xl rounded-bl-3xl lg:mt-32">
              <Image
                style={{ width: "100%", height: "100%" }}
                className="second-image lg:w-96 rounded-t-3xl rounded-bl-3xl"
                src={profileimg}
                alt=""
              />
            </div>
          </div>
          <div className=" w-full col-span-1 lg:w-3/5 lg:h-5/6 py-14">
            <h1 className="text-white text-4xl text-[25px]">
              A short story about me , my mission,
              <br />
              thinking and craft.
            </h1>
            <p className="text-white text-md my-5 pr-14  ">
              I’m a web designer who aware of the tiny moments in a persons life
              that reveal greater truths. Aliquam erat volutpat. Nullam
              imperdiet sapien felis, non lobortis odio mattis in. Quisque
              dapibus aliquet dictum. Integer dapibus ullamcorper est, ac .
            </p>
            <div className="grid lg:grid-cols-2 text-white">
              <ul className="list-item lg:col-span-1 ">
                <li>
                  Date Of Birth:- <small>Dob </small>
                </li>
                <li>
                  Address:- <small>Address </small>
                </li>
                <li>
                  Pin code:- <small>Pin </small>
                </li>
              </ul>
              <ul className="list-item lg:col-span-1 ">
                <li>
                  Email Id:- <small>Email</small>
                </li>
                <li>
                  Contact No:- <small>Contact</small>
                </li>
              </ul>
            </div>

            <Link href={`/${router.query.profileid}/profile/contact`}>
              <button
                id="GET-HIRED"
                className="button px-8 py-3 rounded-full my-5 text-white bg-[#ff9d00]  text-xl"
              >
                Get Hired
              </button>
            </Link>
          </div>
        </div>
        <div className=" relative">
          <div className="hobbies-wrap w-full lg:h-36 grid grid-cols-2  lg:flex justify-evenly">
            <div className="hobbies w-full h-36 grid col-span-1 justify-center items-center py-6">
              <div className="flex justify-center items-center text-[#ff9d00]   ">
                <FaMusic className="scale-[1.3]" />
              </div>
              <h1 className="text-white text-xl">Music</h1>
            </div>
            <div className="hobbies w-full h-36 grid col-span-1 justify-center items-center py-6">
              <div className="flex justify-center items-center text-[#ff9d00]   ">
                <FaPlaneDeparture className="scale-[1.3]" />
              </div>
              <h1 className="text-white text-xl">Travel</h1>
            </div>
            <div className="hobbies w-full h-36 grid col-span-1 justify-center items-center py-6">
              <div className="flex justify-center items-center text-[#ff9d00]   ">
                <BiMoviePlay className="scale-[1.3]" />
              </div>
              <h1 className="text-white text-xl">Movie</h1>
            </div>
            <div className="hobbies w-full h-36 grid col-span-1 justify-center items-center py-6">
              <div className="flex justify-center items-center text-[#ff9d00]   ">
                <IoFootballSharp className="scale-[1.3]" />
              </div>
              <h1 className="text-white text-xl">Sports</h1>
            </div>
            <div className="hobbies w-full h-36 grid col-span-2 lg:col-span-1 justify-center items-center py-6">
              <div className="flex justify-center items-center text-[#ff9d00]   ">
                <RiBookMarkFill className="scale-[1.3]" />
              </div>
              <h1 className="text-white text-xl">Rading</h1>
            </div>
          </div>
        </div>
        <div className="skills grid lg:grid-cols-2 lg:h-72 w-full">
          <div className="w-full col-span-1 py-10 px-3">
            <h1 className="text-white text-4xl lg:text-2xl">
              I have been able to experience & <br />
              developing this type of skill.
            </h1>
            <p className="text-white text-sm mt-8">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
              magnam fuga iusto exercitationem maiores repellendus error amet
              beatae! Nostrum consequuntur nemo reiciendis ipsam expedita quia
              quod, at placeat ea doloribus!
            </p>
          </div>

          <div className="lg:h-full w-full col-span-1 p-5 lg:p-10  ">
            <ul className="text-white flex items-center text-xl my-2">
              <li>Computer :- ⭐⭐⭐⭐⭐</li>
            </ul>
            <ul className="text-white flex items-center text-xl my-2">
              <li>Language :- ⭐⭐⭐⭐⭐</li>
            </ul>
            <ul className="text-white flex items-center text-xl my-2">
              <li>Sports :- ⭐⭐⭐⭐⭐</li>
            </ul>
            <ul className="text-white flex items-center text-xl my-2">
              <li>Photography :- ⭐⭐⭐⭐⭐</li>
            </ul>
            <ul className="text-white flex items-center text-xl my-2">
              <li>Others :- ⭐⭐⭐⭐⭐</li>
            </ul>
          </div>
        </div>
        <div className="  w-full flex justify-center items-center">
          <Slider list={ImageList} />
        </div>
      </div>
    </div>
  );
}
