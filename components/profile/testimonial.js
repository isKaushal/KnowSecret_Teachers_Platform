import { FaQuoteLeft } from "react-icons/fa";

export default function Testimonials() {
  return (
    <div
      id="MainTile5"
      className=" maintile5  container rounded-lg p-7 col-span-7 overflow-hidden"
    >
      <div className="main-tile4-content-wrap w-full h-full overflow-hidden">
        <div className="Testimonials-heading w-full h-[10%]">
          <h1 className="text-[#ff9d00] text-4xl">Testimonials</h1>
        </div>
        <div
          id="TestimonialsLoad "
          className="TestimonialsSlider h-[90%] owl-carousel owl-theme w-full lg:w-[47rem] xl:w-[65rem] 2xl:w-[77rem] h-max my-auto  "
        >
          <div className="Testimonials-cards w-full rounded-xl p-7 relative overflow-hidden">
            <div className="icons-name-wrap w-full flex justify-between">
              <div className="w-20%">
                <FaQuoteLeft className="text-[#ff9d00] text-3xl" />
              </div>
              <div className="w-[80%] justify-end text-end">
                <span className="text-xl lg:text-lg xl:text-2xl w-full text-[#ff9d00] uppercase italic">
                  shikha
                </span>
                <div className="w-full text-[#ff9d00] text-end text-xs italic uppercase ">
                  Class 12
                </div>
              </div>
            </div>
            <div className="Testimonials-pharagraph-wrap relative">
              <p className="text-center w-full text-[#cec9c9] my-8">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
                consectetur corrupti cum quis omnis, inventore maxime debitis
                natus molestias, laboriosam numquam nam necessitatibus eaque
                molestiae ullam eveniet quasi perspiciatis facere.
              </p>
            </div>
            <div className="Testimonials-images-wrap w-full bg-transparent flex justify-center items-center">
              <div className="Testimonials-image bg-white rounded-full w-20 h-20 overflow-hidden"></div>
            </div>
          </div>
        </div>
        <div className="owl-nav2 px-10">
          <div className="owl-prev2"></div>
          <div className="owl-next2"></div>
        </div>
      </div>
    </div>
  );
}
