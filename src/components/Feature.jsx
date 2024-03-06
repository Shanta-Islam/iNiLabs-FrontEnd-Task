import { MdArrowRightAlt } from "react-icons/md";

const Feature = () => {
  return (
    <div className="mt-6 mx-[150px] items-center justify-center">
      <h1 className="text-center font-bold text-5xl w-[451px] ml-[336px] text-slate-900 pt-7">
        Collaborate without constraints
      </h1>
      <div className="flex justify-center gap-8 px-[10] py-5">
        <div className="pt-[23px] pr-[25px] pb-[44px] pl-[24px]">
          <h1 className="text-2xl font-bold text-slate-900 pb-7">
            Free forever
          </h1>
          <p className="w-[313px] text-slate-600">
            Our free plan gives you unlimited team members, 3 boards, and 300+
            expert-made templates. Signing up with your work email lets you
            bring in your team faster. See our&nbsp;
            <a className="text-blue-500" href="">
              pricing plans
            </a>
            &nbsp;for more features.
          </p>
        </div>
        <div className="pt-[23px] pr-[25px] pb-[44px] pl-[24px]">
          <h1 className="text-2xl font-bold text-slate-900 pb-7">
            Easy integrations
          </h1>
          <p className="w-[313px] text-slate-600">
            Miro has 100+ powerful integrations with tools you already use like
            G Suite, Slack, and Jira, so your workflow is seamless. View the
            full list in our&nbsp;
            <a className="text-blue-500" href="">
              Marketplace
            </a>
            .
          </p>
        </div>
        <div className="pt-[23px] pr-[25px] pb-[44px] pl-[24px]">
          <h1 className="text-2xl font-bold text-slate-900 pb-7">
            Security first
          </h1>
          <p className="w-[313px] text-slate-600">
            We treat your data like you would — with the utmost care. We follow
            industry-leading security standards and give you tools to protect
            intellectual property. Learn more at our&nbsp;
            <a className="text-blue-500" href="">
              Trust Center
            </a>
            .
          </p>
        </div>
      </div>
      <button className="flex items-center gap-1 py-[10px] px-7 bg-blue-500 rounded-full text-white w-44 h-12 mx-auto">
        <p>Sign up free</p>
        <p>
          <MdArrowRightAlt />
        </p>
      </button>
    </div>
  );
};

export default Feature;
