import Image from "next/image";
import { useState } from "react";
import { useMedia } from "react-use";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import ExperinceIcon from "../../public/images/profilepage/centertile/experince/experince.png";

export default function Experince({ profileDetails }) {
  return (
    <div className=" maintile3 rounded-lg p-7 pr-2     ">
      <div className="education-wrap-outer w-full h-full overflow-x-hidden ">
        <div className="Education w-full h-10">
          <h1 className="text-[#ff9d00] uppercase flex  lg:text-left text-4xl my-2">
            <Image className="w-[40px] mr-2" src={ExperinceIcon} alt="" />
            Experience
          </h1>
        </div>
        <div className="relative">
          {/* slider here */}
          <div
            id="Experince-main"
            className=" grid grid-cols-1 lg:mt-14 w-full h-full "
          >
            <div className="Education-main grid lg:grid-cols-2 lg:grid-rows-2 relative  ">
              {/* <div className="Experince-main grid lg:grid-cols-2 lg:grid-rows-2 relative  "> */}
              {/* {profileDetails.experince.map((data, index) => {
                return (
                  <div
                    className="table-rows  col-span-1 lg:px-[5rem] py-[1rem] lg:py-[4rem] relative   "
                    key={index}
                  >
                    <h1 className="text-[#ff9d00] text-lg">{data.year}</h1>
                    <h1 className="text-white lg:text-2xl">
                      {data.organization}
                    </h1>
                    <h2 className="text-white lg:text-xl">
                      {data.designation}
                    </h2>
                    <h3 className="text-white lg:text-xl">{data.subject}</h3>
                  </div>
                );
              })} */}
              <div className=" col-span-1 px-[5rem] py-[1rem] lg:py-[4rem]  ">
                <h1 className="text-[#ff9d00] text-lg">Year1</h1>
                <h1 className="text-white lg:text-2xl">Organization</h1>
                <h2 className="text-white lg:text-xl">Designation</h2>
                <h1 className="text-white lg:text-2xl">Subject</h1>
              </div>
              <div className=" col-span-1 px-[5rem] py-[1rem] lg:py-[4rem]  ">
                <h1 className="text-[#ff9d00] text-lg">Year2</h1>
                <h1 className="text-white lg:text-2xl">Organization</h1>
                <h2 className="text-white lg:text-xl">Designation</h2>
                <h1 className="text-white lg:text-2xl">Subject</h1>
              </div>
              <div className=" col-span-1 px-[5rem] py-[1rem] lg:py-[4rem]  ">
                <h1 className="text-[#ff9d00] text-lg">Year3</h1>
                <h1 className="text-white lg:text-2xl">Organization</h1>
                <h2 className="text-white lg:text-xl">Designation</h2>
                <h1 className="text-white lg:text-2xl">Subject</h1>
              </div>
              <div className=" col-span-1 px-[5rem] py-[1rem] lg:py-[4rem]  ">
                <h1 className="text-[#ff9d00] text-lg">Year4</h1>
                <h1 className="text-white lg:text-2xl">Organization</h1>
                <h2 className="text-white lg:text-xl">Designation</h2>
                <h1 className="text-white lg:text-2xl">Subject</h1>
              </div>
            </div>
          </div>
          {/* slider here */}
        </div>
      </div>
    </div>
  );
}

// const variants = {
//   enter: (direction = Number) => {
//     return {
//       x: direction > 0 ? 1000 : -1000,
//       opacity: 0,
//     };
//   },
//   center: {
//     zIndex: 1,
//     x: 0,
//     opacity: 1,
//   },
//   exit: (direction = Number) => {
//     return {
//       zIndex: 0,
//       x: direction < 0 ? 1000 : -1000,
//       opacity: 0,
//     };
//   },
// };

// const swipeConfidenceThreshold = 10000;
// const swipePower = (offset = Number, velocity = Number) => {
//   return Math.abs(offset) * velocity;
// };

// const Example = ({ profileDetails }) => {
//   const [[page, direction], setPage] = useState([0, 0]);

//   const paginate = (newDirection = Number) => {
//     setPage([page + newDirection, newDirection]);
//   };

//   return (
//     <div className="w-full h-full">
//       <div className="w-full h-full">
//         <AnimatePresence initial={false} custom={direction}>
//           <motion.div
//             className=" absolute "
//             key={page}
//             custom={direction}
//             variants={variants}
//             initial="enter"
//             animate="center"
//             exit="exit"
//             transition={{
//               x: { type: "spring", stiffness: 300, damping: 30 },
//               opacity: { duration: 0.2 },
//             }}
//             drag="x"
//             dragConstraints={{ left: 0, right: 0 }}
//             dragElastic={1}
//             onDragEnd={(e, { offset, velocity }) => {
//               const swipe = swipePower(offset.x, velocity.x);

//               if (swipe < -swipeConfidenceThreshold) {
//                 paginate(1);
//               } else if (swipe > swipeConfidenceThreshold) {
//                 paginate(-1);
//               }
//             }}
//           >
//             <div className="Education-main grid lg:grid-cols-2 lg:grid-rows-2 relative  ">

//               {profileDetails.experince.map((data, index) => {
//                 if (index < 4) {
//                   return (
//                     <div
//                       className="table-rows  col-span-1 lg:px-[5rem] py-[1rem] lg:py-[4rem]   "
//                       key={index}
//                     >
//                       <h1 className="text-[#ff9d00] text-lg">{data.year}</h1>
//                       <h1 className="text-white lg:text-2xl">
//                         {data.organization}
//                       </h1>
//                       <h2 className="text-white lg:text-xl">
//                         {data.designation}
//                       </h2>
//                       <h3 className="text-white lg:text-xl">{data.subject}</h3>
//                     </div>
//                   );
//                 }
//               })}
//             </div>
//           </motion.div>
//         </AnimatePresence>
//       </div>
//       <div className="z-[10] absolute mt-[30rem]  justify-center items-center  w-full flex  ">
//         <div
//           className="text-center rounded-full p-3 px-[5rem]  text-[#ff9d00] "
//           onClick={() => paginate(-1)}
//         >
//           <FaChevronLeft />
//         </div>
//         <div
//           className="text-center rounded-full p-3 px-[5rem]  text-[#ff9d00] "
//           onClick={() => paginate(1)}
//         >
//           <FaChevronRight />
//         </div>
//       </div>
//     </div>
//   );
// };
