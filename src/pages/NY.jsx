import { Details } from "../utils/Utils";

import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";

const Ny = () => {
  return (
    <>
      <div className="bg-[#F7F5EC]  flex justify-between pl-16 pr-16  ">
        <div>
          <img
            className="w-[50rem] h-[28rem] rounded-lg object-none"
            src={`ny_02.jpg`}
          />
          <button className="relative left-[42rem] top-[-26rem] rounded-2xl   pl-6 pr-6 pt-1 pb-1 bg-yellow-400  font-bold">
            Popular
          </button>
          <button className="relative left-[-4rem] top-[-4rem] rounded-2xl   text-[2rem] text-white  font-bold">
            PLACE
          </button>
        </div>
        <div className="flex">
          <div className="mr-3 ">
            <img
              className="w-[17rem] h-[13.6rem] rounded-lg mb-3"
              src={`ny_01.jpg`}
            />
            <img
              className="w-[17rem] h-[13.6rem] rounded-lg"
              src={`ny_03.jpg`}
            />
          </div>
          <div className="">
            <img
              className="w-[17rem] h-[13.6rem] rounded-lg mb-3"
              src={`ny_04.jpg`}
            />
            <img
              className="w-[17rem] h-[13.6rem] rounded-lg "
              src={`ny_05.jpg`}
            />
          </div>
        </div>
      </div>
      <div className="flex bg-[#F7F5EC] justify-between border-2 sam_shadow_1 m-16 rounded-xl  p-5 ">
        <div className="">
          <p>
            {Details[1]?.rating}{" "}
            <span className="text-gray-400">(89k Reviews)</span>
          </p>
          <p className="text-[3.4rem] font-bold">{Details[1]?.title}</p>
          <p className="font-bold">{Details[1]?.description}</p>

          <div className="flex flex-row pt-7 font-bold pb-7 ">
            <p className=" pr-5 flex flex-row">
              <FaLocationDot /> {Details[1]?.location}
            </p>
            <p className="pl-5 flex flex-row ">
              <FaPhone /> {Details[1]?.phone}
            </p>
          </div>
        </div>
        <hr />
        <div className="right">
          <div className="flex">
            <button className="p-5 sam_shadow_2 rounded-xl border-2 hover:bg-[#FE6A4D]  mr-3 ">
              <CiHeart />
            </button>
            <button className="p-5 border-2 sam_shadow_3 rounded-xl hover:bg-[#FE6A4D] ">
              <CiShare2 />
            </button>
          </div>
          <p className="mt-7 font-bold">{Details[1]?.date}</p>
        </div>
      </div>
    </>
  );
};

export default Ny;

// {Details[0].images.map((img, i) => (
//     <img key={i} src={img} />
//   ))}
