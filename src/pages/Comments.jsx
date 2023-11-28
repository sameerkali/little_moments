import { RiStarSFill } from "react-icons/ri";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa6";

const Comments = () => {
  return (
    <div className="bg-[#F7F5EC] mt-[-2rem] pb-4">
      <div className="flex justify-around sm:justify-between  mt-5 mb-5">
        <div className="">
          <p className="text-[13px] font-bold hidden sm:flex">LAILA JOHN</p>
          <p className="text-[13px] text-gray-400 hidden sm:flex">MUMBAI</p>
        </div>
        <div className=" flex flex-col w-[40vw]">
          <div className="flex flex-row mb-7">
            <p className="hidden sm:flex flex-row relative top-[11px] mr-5 text-[1.3rem] ">
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
            </p>
            <p className="text-[1.7rem] font-bold ml-[-5rem] sm:ml-0">The Best Out There!</p>
          </div>
          <p className="ml-[-5rem] sm:ml-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis animi
            tenetur eveniet dignissimos. Minus minima sequi pariatur deleniti
            omnis consequatur. Quasi ex non, quo fugiat molestiae maiores modi
            dicta at saepe fugit dolor ullam ab quaerat voluptate impedit quia
            dolorum praesentium. Explicabo eos provident sit praesentium, quis
            dolor deserunt incidunt?
          </p>
        </div>
        <div className=" font-bold">
          <p className="hidden sm:flex">May 12, 2023</p>
        </div>
      </div>
      <div className="ml-5 mr-5 sm:ml-16 sm:mr-16 mb-7 h-[2px] w-100 bg-gray-900"></div>

      {/* ======================================================================== */}
      <div className="flex justify-around sm:justify-between  mt-5 mb-5">
        <div className="">
          <p className="text-[13px] font-bold hidden sm:flex">LAILA JOHN</p>
          <p className="text-[13px] text-gray-400 hidden sm:flex">MUMBAI</p>
        </div>
        <div className=" flex flex-col w-[40vw]">
          <div className="flex flex-row mb-7">
            <p className="ml-[-5rem] sm:ml-0 hidden sm:flex flex-row relative top-[11px] mr-5 text-[1.3rem] ">
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
            </p>
            <p className="text-[1.7rem] font-bold ml-[-5rem] sm:ml-0">The Best Out There!</p>
          </div>
          <p className="ml-[-5rem] sm:ml-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis animi
            tenetur eveniet dignissimos. Minus minima sequi pariatur deleniti
            omnis consequatur. Quasi ex non, quo fugiat molestiae maiores modi
            dicta at saepe fugit dolor ullam ab quaerat voluptate impedit quia
            dolorum praesentium. Explicabo eos provident sit praesentium, quis
            dolor deserunt incidunt?
          </p>
        </div>
        <div className=" font-bold">
          <p className="hidden sm:flex">May 12, 2023</p>
        </div>
      </div>
      <div className="ml-5 mr-5 sm:ml-16 sm:mr-16 mb-7 h-[2px] w-100 bg-gray-900"></div>
      {/* ======================================================================== */}
      <div className="flex justify-around sm:justify-between  mt-5 mb-5">
        <div className="">
          <p className="text-[13px] font-bold hidden sm:flex">LAILA JOHN</p>
          <p className="text-[13px] text-gray-400 hidden sm:flex">MUMBAI</p>
        </div>
        <div className=" flex flex-col w-[40vw]">
          <div className="flex flex-row mb-7">
            <p className=" ml-[-5rem] sm:ml-0 hidden sm:flex flex-row relative top-[11px] mr-5 text-[1.3rem] ">
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
            </p>
            <p className="text-[1.7rem] font-bold ml-[-5rem] sm:ml-0">The Best Out There!</p>
          </div>
          <p className="ml-[-5rem] sm:ml-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis animi
            tenetur eveniet dignissimos. Minus minima sequi pariatur deleniti
            omnis consequatur. Quasi ex non, quo fugiat molestiae maiores modi
            dicta at saepe fugit dolor ullam ab quaerat voluptate impedit quia
            dolorum praesentium. Explicabo eos provident sit praesentium, quis
            dolor deserunt incidunt?
          </p>
        </div>
        <div className=" font-bold">
          <p className="hidden sm:flex">May 12, 2023</p>
        </div>
      </div>
      <div className="ml-5 mr-5 sm:ml-16 sm:mr-16 mb-7 h-[2px] w-100 bg-gray-900"></div>
      {/* ======================================================================== */}
      <div className="flex justify-end mr-16 mb-7">
        <button className="p-5 sam_shadow_6 mr-2 border-2  hover:bg-[#FFC801] rounded-full">
          <FaCaretLeft />
        </button>
        <button className="p-5 sam_shadow_7 bg-[#FFC801] rounded-full">
          <FaCaretRight />
        </button>
      </div>
    </div>
  );
};

export default Comments;
