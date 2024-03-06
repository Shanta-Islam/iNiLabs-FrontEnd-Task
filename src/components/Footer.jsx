import { FaTwitter } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import { FaYoutube } from "react-icons/fa";
import certo from "../assets/logo/certo.png";
const Footer = () => {
  return (
    <div className="mt-24 bg-slate-900 px-48 py-24">
      <div className="flex gap-20">
        <div>
          <p className="text-2xl font-extrabold text-white">
            Scan. Detect. Remove
          </p>
          <div className="flex gap-6 mt-12">
            <p>
              <FaTwitter size={28} className="bg-white rounded" />
            </p>
            <p>
              <TiSocialFacebook size={28} className="bg-white rounded" />
            </p>
            <p>
              <FaYoutube size={28} className="bg-white rounded" />
            </p>
          </div>
          <div className="flex gap-6 text-white mt-8 mb-9 text-xs underline">
            <a>Privacy Policy</a>
            <a>Terms of Service</a>
          </div>
          <div className="text-white">
            <p className="text-xs w-80">
              Copyright © 2022 Certo Software Limited | Registered in England &
              Wales No. 10072356
            </p>
            <p className="text-xs mt-6">
              Designed & developed by Bigger Picture
            </p>
          </div>
        </div>
        <div>
          <h1 className="text-4xl font-extrabold text-white">Miro.</h1>
          <hr className="my-8 w-44" />
          <span className="flex gap-4 items-center mt-4">
            <hr className="w-4 h-px border-0 bg-amber-400" />
            <p className="text-amber-400 font-extrabold text-lg">iPhone</p>
          </span>
          <span className="flex gap-4 items-center mt-4">
            <hr className="w-4 h-px border-0 bg-amber-400" />
            <p className="text-amber-400 font-extrabold text-lg">Android</p>
          </span>
          <span className="flex gap-4 items-center mt-4">
            <hr className="w-4 h-px border-0 bg-amber-400" />
            <p className="text-amber-400 font-extrabold text-lg">Help</p>
          </span>
          <span className="flex gap-4 items-center mt-4">
            <hr className="w-4 h-px border-0 bg-amber-400" />
            <p className="text-amber-400 font-extrabold text-lg">About</p>
          </span>
          <span className="flex gap-4 items-center mt-4">
            <hr className="w-4 h-px border-0 bg-amber-400" />
            <p className="text-amber-400 font-extrabold text-lg">Insights</p>
          </span>
        </div>
        <div className="relative flex items-center justify-center text-start w-[436px] h-[240px] bg-amber-300 rounded-3xl">
          <img src={certo} alt="Certo" className="absolute mx-32" />
          <div className="relative flex flex-col items-center mt-8">
            <h1 className="text-slate-900 text-2xl font-extrabold ml-[-60px]">
              Sign up to our newsletter
            </h1>
            <p className="text-slate-900 text-sm w-[358px] mt-4">
              Receive the latest mobile security news, exclusive discounts &
              offers straight to your inbox!
            </p>
            <span className="w-[364px] h-9 mt-10">
              <input
                type="text"
                placeholder="Email Address"
                className="rounded-s-xl w-64 h-9 placeholder:px-2"
              />
              <button className="bg-slate-900 text-white px-3 w-20 h-9 rounded-e-xl">
                Submit
              </button>
            </span>
          </div>
        </div>
      </div>
      <p className="text-white text-xs w-[550px] mt-20">
        Apple, the Apple logo, and iPhone are trademarks of Apple Inc.,
        registered in the U.S. and other countries. App Store is a service mark
        of Apple Inc. Android, Google Play and the Google Play logo are
        trademarks of Google LLC.
      </p>
    </div>
  );
};

export default Footer;
