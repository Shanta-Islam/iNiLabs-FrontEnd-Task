import logo from "../assets/logo/logo.png";
import { IoIosArrowDown } from "react-icons/io";
import { IoGlobe } from "react-icons/io5";
import { MdArrowRightAlt } from "react-icons/md";

const Header = () => {
  return (
    <div className="flex justify-between mx-12 mt-6">
      {/* Left  */}
      <div className="flex gap-5 items-center">
        <div>
          <img src={logo} alt="Logo" className="w-[91px] h-8" />
        </div>
        <div className="flex gap-3 mt-3">
          <span className="flex items-center gap-1">
            <p>Product</p>
            <p className="mt-1">
              <IoIosArrowDown />
            </p>
          </span>
          <span className="flex items-center gap-1">
            <p>Solutions</p>
            <p className="mt-1">
              <IoIosArrowDown />
            </p>
          </span>
          <span className="flex items-center gap-1">
            <p>Resources</p>
            <p className="mt-1">
              <IoIosArrowDown />
            </p>
          </span>
          <span>Enterprise</span>
          <span>Pricing</span>
        </div>
      </div>
      {/* Right */}
      <div className="flex items-center gap-3">
        <span className="flex items-center gap-1">
          <p>
            <IoGlobe />
          </p>
          <p>EN</p>
        </span>
        <p>Contact Sales</p>
        <p>Login</p>
        <span className="flex items-center bg-blue-500 text-white px-5 py-4 rounded-full">
          <p>Sign up free</p>
          <p>
            <MdArrowRightAlt />
          </p>
        </span>
      </div>
    </div>
  );
};

export default Header;
