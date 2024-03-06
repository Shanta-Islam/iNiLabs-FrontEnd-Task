import { MdArrowRightAlt } from "react-icons/md";
import workingWays from "../assets/images/workingWays.png";

const WaysWeWork = () => {
  return (
    <div className="flex justify-center items-center mt-14">
      <img src={workingWays} alt="Ways We Work" />
      <div className="absolute right-72">
        <h1 className="text-center text-2xl font-bold text-slate-900">
          The Ways We Work
        </h1>
        <p className="text-lg text-slate-900 mt-1">
          How has our relationship with work changed?
        </p>
        <button className="flex text-center gap-1 pt-2 pb-3 px-[26px] bg-blue-500 rounded-full text-white w-48 h-10 mx-auto mt-2">
          <p className="text-sm">View the report</p>
          <a href="" className="mt-1">
            <MdArrowRightAlt />
          </a>
        </button>
      </div>
    </div>
  );
};

export default WaysWeWork;
