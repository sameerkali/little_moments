import { Details } from "../utils/Utils";
import "./font_pages.css";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";
import { Link } from "react-router-dom";

const Detail = () => {
  return (
    <>
      <Link to={`/feature`}>
        <div className=" flex   bg-[#F7F5EC]    justify-between pl-16 pr-16   ">
          <div>
            <img
              className="w-[50rem] h-[28rem] rounded-lg object-none"
              src={`tokiyo_image_01.jpg`}
            />
            <button className="relative left-[42rem]  top-[-26rem] hidden sm:flex rounded-2xl pl-6 pr-6 pt-1 pb-1 bg-yellow-400  font-bold">
              Popular
            </button>
            <button className="sam_bold relative left-[1rem] top-[-4rem] rounded-2xl sm:left-[2.5rem] sm:top-[-8rem] sm:text-[4rem]   text-[2rem] text-white  font-bold">
              PLACE
            </button>
          </div>
          <div className="lg:flex hidden ">
            <div className="mr-3 ">
              <img
                className="w-[17rem] h-[13.6rem] rounded-lg mb-3"
                src={`tokiyo_image_02.jpg`}
              />
              <img
                className="w-[17rem] h-[13.6rem] rounded-lg"
                src={`tokiyo_image_03.jpg`}
              />
            </div>
            <div className="">
              <img
                className="w-[17rem] h-[13.6rem] rounded-lg mb-3"
                src={`tokiyo_image_04.jpg`}
              />
              <img
                className="w-[17rem] h-[13.6rem] rounded-lg "
                src={`tokiyo_image_05.jpg`}
              />
            </div>
          </div>
        </div>
      </Link>
      <div className="flex bg-[#F7F5EC] justify-between border-2 sam_shadow_1 m-16 rounded-xl  p-5 ">
        <div className="">
          <p>
            {Details[0]?.rating}{" "}
            <span className="text-gray-400">(231 Reviews)</span>
          </p>
          <p className="sam_bold text-[3.4rem] font-bold">
            {Details[0]?.title}
          </p>
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
            <button className="p-5 sam_shadow_2 rounded-xl border-2 hover:bg-[#FE6A4D]  mr-3 hidden sm:flex">
              <CiHeart />
            </button>
            <button className="p-5 border-2 sam_shadow_3 rounded-xl hover:bg-[#FE6A4D] hidden sm:flex ">
              <CiShare2 />
            </button>
          </div>
          <p className="mt-7 font-bold hidden sm:flex">{Details[0]?.date}</p>
        </div>
      </div>
    </>
  );
};

export default Detail;

// {Details[0].images.map((img, i) => (
//     <img key={i} src={img} />
//   ))}
