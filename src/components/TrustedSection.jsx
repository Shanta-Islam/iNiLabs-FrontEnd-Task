import Walmart from "../assets/logo/vectors/Walmart.png";
import cisco from "../assets/logo/vectors/cisco.png";
import Volvo from "../assets/logo/vectors/Volvo.png";
import deloitte from "../assets/logo/vectors/deloitte.png";
import okta from "../assets/logo/vectors/okta.png";

const TrustedSection = () => {
  return (
    <div className="mt-16">
      <p className="text-center text-lg text-slate-500 ">
        Trusted by 45M+ users
      </p>
      <div className="flex items-center justify-center my-[60px]">
        <img src={Walmart} alt="Walmart" />
        <img src={cisco} alt="Cisco" />
        <img src={Volvo} alt="Volvo" />
        <img src={deloitte} alt="Deloitte" />
        <img src={okta} alt="Okta" />
      </div>
    </div>
  );
};

export default TrustedSection;
