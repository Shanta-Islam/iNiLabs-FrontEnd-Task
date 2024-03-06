import work from "../assets/images/work.png";
import { MdArrowRightAlt } from "react-icons/md";

const WorkTogether = () => {
  return (
    <div className="flex gap-10 justify-center">
      <div className="items-center justify-center my-auto">
        <h1 className="text-5xl font-bold text-slate-900 w-[440px]">
          Work Together,
          <br />
          wherever you work
        </h1>
        <p className="text-slate-500 w-[453px] pt-4">
          In the office, remote, or a mix of the two, with Miro, your team can
          connect, collaborate, and co-create in one space no matter where you
          are.
        </p>
        <a href="" className="flex items-center gap-2 mt-10 text-blue-600">
          <p>Learn More</p>
          <p>
            <MdArrowRightAlt />
          </p>
        </a>
      </div>
      <div>
        <img src={work} alt="Work" className="h-[535px] w-[550px]"/>
      </div>
    </div>
  );
};

export default WorkTogether;
