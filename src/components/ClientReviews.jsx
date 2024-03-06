import { MdArrowRightAlt } from "react-icons/md";
import vmware from "../assets/logo/vectors/vmware.png";
import Docusign from "../assets/logo/vectors/Docusign.png";
import frog from "../assets/logo/vectors/frog.png";
import person1 from "../assets/logo/person1.png";
import person2 from "../assets/logo/person2.png";
import person3 from "../assets/logo/person3.png";

const ClientReviews = () => {
  const reviews = [
    {
      logo: vmware,
      text: "“When the pandemic hit, those of us who thrive on in-person collaboration were worried that our creativity and productivity would suffer. Miro was the perfect tool to help us with collaboration, whiteboarding, and retrospectives while remote.”",
      image: person1,
      name: "Roxanne Mustafa",
      designation: "Design Team Lead at VMware",
    },
    {
      logo: Docusign,
      text: "“Miro helps solve one of the major gaps in product design: how to manage tasks across product designers whose projects are in different tools.”",
      image: person2,
      name: "Jane Ashley",
      designation: "Head of Design at DocuSign",
    },
    {
      logo: frog,
      text: "“As we used Miro we moved from skepticism to belief to innovation, and now we have a tool that’s at the core of what we do and will continue to extend into the future.”",
      image: person3,
      name: "Laura Baird",
      designation: "Associate Design Director at frog",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center mt-28 px-40">
      <h1 className="text-5xl font-bold text-slate-900">
        Loved by the world&apos;s best teams
      </h1>
      <a
        href=""
        className="flex items-center gap-2 mt-6 text-blue-600 border border-blue-600 rounded-full py-3 px-8"
      >
        <p>See all customer stories</p>
        <p>
          <MdArrowRightAlt />
        </p>
      </a>
      <div className="flex mt-10 gap-9 relative h-[460px]">
        {reviews.map((review, i) => {
          return (
            <div key={i}>
              <img src={review.logo} alt="" />
              <p className="w-[291px] text-slate-500 mt-9">{review.text}</p>
              <div className="flex gap-4 absolute bottom-10">
                <img src={review.image} alt="" className="h-12" />
                <span className="">
                  <p className="text-sm text-slate-500">{review.name}</p>
                  <p className="text-sm text-slate-500">{review.designation}</p>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ClientReviews;
