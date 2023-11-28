/* eslint-disable react/jsx-no-target-blank */
import { Link } from "react-router-dom";
import Scrolling_banner from "../pages/Scrolling_banner";

const Footer = () => {
  return (
    <>
      <Scrolling_banner />

      <footer className="h-96 bg-black ">
        <div className="flex justify-between pt-16 pl-16 pr-16 mb-[-2rem]">
          <div className="1 text-white">
            <h1 className="sam_bold text-[5rem] font-bold mb-10">WEBSITE</h1>
            <p className="mb-5 text-xs">Categories</p>
            <p className="mb-5 text-xs">Activity Near Me </p>
            <p className="mb-5 text-xs">Add a Place</p>
          </div>
          <div className="1 text-white">
            <h1 className="sam_bold text-[5rem] font-bold mb-10">IMPORTANT</h1>
            <p className="mb-5 text-xs">Turms & Conditions</p>
            <p className="mb-5 text-xs">Privacy Policy </p>
            <p className="mb-5 text-xs">Turms of Usage</p>
          </div>
          <div className="1 text-white">
            <h1 className="sam_bold text-[5rem] font-bold mb-10">CONTACT</h1>
            <p className="mb-5 text-xs">Noida, India</p>
            <p className="mb-5 text-xs">+91 9639 35 6395 </p>
          </div>
        </div>
        <div className="flex justify-between text-gray-400 pt-28 pb-9  pl-16 pr-16 bg-black">
          <a href="https://github.com/sameerkali" target="_blank">
            All rights reserve by @sameerkali
          </a>
          <a href="#">Back to top</a>
        </div>
        <div className="bg-black pl-16 ">
          <img src="LITTLE-MOMENTS-1.png" />
        </div>
      </footer>
    </>
  );
};

export default Footer;
