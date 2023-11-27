import { Link } from "react-router-dom";
import Scrolling_banner from "../pages/Scrolling_banner";

const Footer = () => {
  return (
    <>
      <Scrolling_banner />

      <footer className="h-96 bg-black ">
        <div className="flex justify-between p-16 ">
          <div className="1 text-white">
            <h1 className="text-4xl font-bold mb-10">WEBSITE</h1>
            <p className="mb-5 text-xs">Categories</p>
            <p className="mb-5 text-xs">Activity Near Me </p>
            <p className="mb-5 text-xs">Add a Place</p>
          </div>
          <div className="1 text-white">
            <h1 className="text-4xl font-bold mb-10">WEBSITE</h1>
            <p className="mb-5 text-xs">Categories</p>
            <p className="mb-5 text-xs">Activity Near Me </p>
            <p className="mb-5 text-xs">Add a Place</p>
          </div>
          <div className="1 text-white">
            <h1 className="text-4xl font-bold mb-10">WEBSITE</h1>
            <p className="mb-5 text-xs">Categories</p>
            <p className="mb-5 text-xs">Activity Near Me </p>
            <p className="mb-5 text-xs">Add a Place</p>
          </div>
        </div>
        <div className="flex justify-between text-gray-400 pl-16 pr-16">
          <p>All rights reserve by @sameerkali</p>
          <Link to={`/`}>
            Back to top
          </Link>
        </div>
        <div className="bg-black pl-16 mt-9">
          <img  src="LITTLE-MOMENTS-1.png" />
        </div>
      </footer>
    </>
  );
};

export default Footer;
