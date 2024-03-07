import prospects from "../assets/images/prospects.png";
import figma from "../assets/logo/vectors/figma.png";
import diamond from "../assets/logo/vectors/diamond.png";
import N from "../assets/logo/vectors/N.png";
import { MdArrowRightAlt } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
import { SiAdobexd } from "react-icons/si";

const Prospects = () => {
  return (
    <div className="flex flex-col mt-[60px] justify-center mx-64">
      <div>
        <h1 className="text-slate-900 text-5xl font-bold">
          Built for all kinds of teams
        </h1>
        <div className="flex mt-9 text-sm gap-12 text-slate-900 ">
          <p>UX & Design</p>
          <p>Marketing</p>
          <p>Product Management</p>
          <p>Engineering</p>
          <p>Consultants</p>
          <p>Agile Coaches</p>
          <p>Sales</p>
        </div>
      </div>
      <div className="flex gap-5 mt-7">
        <div className="mt-5">
          <span className="flex gap-2 items-center">
            <p>
              <FaCheck className="text-slate-900" />
            </p>
            <p className="text-slate-500 text-lg">Built low-fi wireframes</p>
          </span>
          <span className="flex gap-2">
            <p>
              <FaCheck className="text-slate-900 mt-2" />
            </p>
            <p className="text-slate-500 text-lg w-60">
              Involve stakeholders in the design process
            </p>
          </span>
          <span className="flex gap-2">
            <p>
              <FaCheck className="text-slate-900 mt-2" />
            </p>
            <p className="text-slate-500 text-lg w-48">
              Run engaging design workshops
            </p>
          </span>
          <a href="" className="flex items-center gap-2 mt-10 text-blue-600">
            <p>Learn More</p>
            <p>
              <MdArrowRightAlt />
            </p>
          </a>
          <div className="mt-16">
            <p className="text-lg text-slate-500">
              Integrate your favourite tools
            </p>
            <div className="flex items-center gap-3 mt-3">
              <img src={diamond} alt="Diamond" />
              <SiAdobexd size={24} className="bg-pink-500 text-fuchsia-950" />
              <img src={figma} alt="Figma" />
              <img src={N} alt="N" />
            </div>
          </div>
        </div>
        <div>
          <img src={prospects} alt="Prospects" />
        </div>
      </div>
    </div>
  );
};

export default Prospects;
