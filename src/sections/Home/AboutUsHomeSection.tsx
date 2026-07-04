import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
import img from "../../assets/AboutUsHomeImage.png";
export default function AboutUsHomeSection() {
  return (
    <>
      <div className=" flex justify-between items-center flex-col lg:flex-row gap-16 ">
        <div className=" w-full lg:w-[47.29%] 2xl:w-[47.99%]  h-max relative">
          <div className="  absolute inset-0  rounded-2xl bg-white-gray-03 rotate-[1.5deg]"></div>

          <img
            src={img}
            alt="img"
            className="relative w-full  object-cover rounded-2xl"
          />
        </div>
        <div className=" w-full lg:w-[47.29%] 2xl:w-[47.99%] space-y-5 md:space-y-6 2xl:space-y-8  text-center lg:text-start ">
          <h2 className=" text-blue-01 text-[30px] md:text-[40px] 2xl:text-5xl font-bold  ">
            Local Roots. Global Standards.
          </h2>
          <p className="  md:text-base 2xl:text-[18px] text-muted-blue font-normal ">
            Loaloat Shatt Al-Arab (LSA) combines deep local knowledge with
            uncompromising international quality standards. We are the trusted
            partner for complex engineering challenges in Iraq's most demanding
            environments.
          </p>
          <Link
            to="/about"
            className="group relative mx-auto lg:mx-0 inline-flex items-center gap-2 text-base md:text-lg 2xl:text-xl text-red-01 font-semibold"
          >
            <span className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-red-01 after:transition-all after:duration-300 group-hover:after:w-full">
              Learn more about us
            </span>

            <GoArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </>
  );
}
