import connect from "../assets/images/connect.png";
import { MdArrowRightAlt } from "react-icons/md";
const ConnectSection = () => {
  return (
    <div className="flex gap-10 justify-center">
      <div>
        <img src={connect} alt="Connect" className="w-[550px] h-[498px]" />
      </div>
      <div className="items-center justify-center my-auto">
        <h1 className="text-5xl font-bold text-slate-900 w-[440px]">
          Connect <br /> your tools,
          <br />
          sclose your tabs
        </h1>
        <p className="text-slate-500 w-[453px] pt-4">
          Whether you want to edit your Google Docs, resolve Jira issues, or
          collaborate over Zoom, Miro has 100+ integrations with tools you
          already use and love.
        </p>
        <a href="" className="flex items-center gap-2 mt-10 text-blue-600">
          <p>Learn More</p>
          <p>
            <MdArrowRightAlt />
          </p>
        </a>
      </div>
    </div>
  );
};

export default ConnectSection;
