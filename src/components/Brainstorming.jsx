import Brainstorm from "../assets/images/Brainstorm.png";
import { MdArrowRightAlt } from "react-icons/md";
const Brainstorming = () => {
  return (
    <div className="flex flex-col mt-[60px] mx-auto justify-center items-center">
      <div className="ml-[-70px]">
        <h1 className="text-slate-900 text-5xl font-bold ml-[-12px]">
          Built for the way you work
        </h1>
        <div className="flex mt-9 text-sm gap-12 text-slate-900">
          <p>Brainstorming</p>
          <p>Diagramming</p>
          <p>Meetings & Workshops</p>
          <p>Scrum Events</p>
          <p>Mapping</p>
          <p>Research & Design</p>
          <p>Strategic Planning</p>
        </div>
      </div>
      <div className="flex gap-5 mt-7">
        <div>
          <h1 className="text-lg text-slate-900">Brainstorming</h1>
          <p className="w-80 mt-[26px] text-slate-600">
            Unleash creative ideas and build on them with the help of sticky
            notes, images, mind maps, videos, drawing capabilities — the list
            goes on.
          </p>
          <a href="" className="flex items-center gap-2 mt-10 text-blue-600">
            <p>Learn More</p>
            <p>
              <MdArrowRightAlt />
            </p>
          </a>
        </div>
        <div>
          <img src={Brainstorm} alt="Brainstorm" />
        </div>
      </div>
    </div>
  );
};

export default Brainstorming;
