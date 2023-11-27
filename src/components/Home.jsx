import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";

import { Details } from "../utils/Utils";
import Overview from "./Overview";
import Review from "./Review";
import Feature_cards from "./Feature_cards";

const Home = () => {
  console.log(Details[1]?.location);
  console.log(Details[0]?.date);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 m-16 ">
        {Details[0].images.map((img, i) => (
          <img key={i} src={img} />
        ))}
      </div>
      <div className="flex justify-between border-2 border-black shadow-md  m-16 rounded-xl  p-5">
        <div className="">
          <p>
            {Details[0]?.rating}{" "}
            <span className="text-gray-400">(231 Reviews)</span>
          </p>
          <p className="text-[3.4rem] font-bold">{Details[0]?.title}</p>
          <p className="font-bold">{Details[0]?.description}</p>

          <div className="flex flex-row pt-7 font-bold pb-7 ">
            <p className=" pr-5 flex flex-row">
              <FaLocationDot /> {Details[0]?.location}
            </p>
            <p className="pl-5 flex flex-row ">
              <FaPhone /> {Details[0]?.phone}
            </p>
          </div>
        </div>
        <hr />
        <div className="right">
          <div className="flex">
            <button className="p-5 rounded-xl border-2 hover:bg-[#FE6A4D]  mr-3 shadow-2xl">
              <CiHeart />
            </button>
            <button className="p-5 border-2 rounded-xl hover:bg-[#FE6A4D] shadow-2xl">
              <CiShare2 />
            </button>
          </div>
          <p className="mt-7 font-bold">{Details[0]?.date}</p>
        </div>
      </div>

      <Overview />
      <Review />
      <Feature_cards/>
    </>
  );
};

export default Home;
