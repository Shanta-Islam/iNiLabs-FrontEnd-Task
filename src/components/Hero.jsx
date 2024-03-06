import heroImage from "../assets/images/heroImage.png";
import capterra from "../assets/logo/vectors/capterra.png";
import getApp from "../assets/logo/vectors/getApp.png";
import vector1 from "../assets/logo/vectors/vector1.png";
import { GoArrowRight } from "react-icons/go";
import { IoStar } from "react-icons/io5";
import { IoStarHalf } from "react-icons/io5";

const Hero = () => {
  return (
    <div className="flex py-12 mx-36 justify-between">
      {/* right */}
      <div>
        <h1 className="grid text-slate-900 font-bold text-5xl w-[376px] h-28 leading-[56px]">
          Take ideas from better to best
        </h1>
        <p className="w-[428px] h-12 mt-4 text-slate-900">
          Miro is your team&apos;s visual platform to connect, collaborate, and
          create — together.
        </p>
        <input
          type="email"
          name=""
          id=""
          placeholder="Enter your work email"
          className="border border-gray-500 text-gray-600 placeholder:text-gray-600 rounded-full w-[440px] h-12 pl-6 mt-12"
        />
        <span className="flex gap-1 items-center justify-center bg-blue-500 text-white px-5 py-4 rounded-full w-[440px] h-[51px] mt-[10px]">
          <p className="">Sign up free</p>
          <p>
            <GoArrowRight />
          </p>
        </span>
        <p className="mt-2 text-gray-500 text-sm">
          Collaborate with your team within minutes
        </p>
        <div className="flex gap-3 mt-10">
          <div className="py-[14px]">
            <span className="flex gap-1">
              <p>
                <IoStar className="text-yellow-500" />
              </p>
              <p>
                <IoStar className="text-yellow-500" />
              </p>
              <p>
                <IoStar className="text-yellow-500" />
              </p>
              <p>
                <IoStar className="text-yellow-500" />
              </p>
              <p>
                <IoStarHalf className="text-yellow-500" />
              </p>
            </span>
            <p className="text-xs text-slate-900">Based on 5149+ reviews:</p>
          </div>
          <div className="flex gap-[14px] items-center">
            <img src={vector1} alt="vector1" className="h-[18px] w-[17px]" />
            <img src={getApp} alt="getApp" className="h-[13px] w-[49px]" />
            <img src={capterra} alt="capterra" className="h-[14px] w-[57px]" />
          </div>
        </div>
      </div>
      {/* left */}
      <div>
        <img src={heroImage} alt="Hero Image" className="w-[640px] h-[463px]" />
      </div>
    </div>
  );
};

export default Hero;
