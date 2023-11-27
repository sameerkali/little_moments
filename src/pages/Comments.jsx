import { RiStarSFill } from "react-icons/ri";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa6";

const Comments = () => {
  return (
    <>
      <div className="flex justify-between pl-16 pr-16 mt-5 mb-5">
        <div className="">
          <p className="text-[13px] font-bold">LAILA JOHN</p>
          <p className="text-[13px] text-gray-400">MUMBAI</p>
        </div>
        <div className=" flex flex-col w-[40vw]">
          <div className="flex flex-row mb-7">
            <p className="flex flex-row relative top-[11px] mr-5 text-[1.3rem] ">
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
            </p>
            <p className="text-[1.7rem] font-bold">The Best Out There!</p>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis animi
            tenetur eveniet dignissimos. Minus minima sequi pariatur deleniti
            omnis consequatur. Quasi ex non, quo fugiat molestiae maiores modi
            dicta at saepe fugit dolor ullam ab quaerat voluptate impedit quia
            dolorum praesentium. Explicabo eos provident sit praesentium, quis
            dolor deserunt incidunt?
          </p>
        </div>
        <div className=" font-bold">
          <p>May 12, 2023</p>
        </div>
      </div>
      <div className=" ml-16 mr-16 mb-7 h-[2px] w-100 bg-gray-900"></div>

      {/* ======================================================================== */}
      <div className="flex justify-between pl-16 pr-16 mt-5 mb-5">
        <div className="">
          <p className="text-[13px] font-bold">LAILA JOHN</p>
          <p className="text-[13px] text-gray-400">MUMBAI</p>
        </div>
        <div className=" flex flex-col w-[40vw]">
          <div className="flex flex-row mb-7">
            <p className="flex flex-row relative top-[11px] mr-5 text-[1.3rem] ">
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
            </p>
            <p className="text-[1.7rem] font-bold">The Best Out There!</p>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis animi
            tenetur eveniet dignissimos. Minus minima sequi pariatur deleniti
            omnis consequatur. Quasi ex non, quo fugiat molestiae maiores modi
            dicta at saepe fugit dolor ullam ab quaerat voluptate impedit quia
            dolorum praesentium. Explicabo eos provident sit praesentium, quis
            dolor deserunt incidunt?
          </p>
        </div>
        <div className=" font-bold">
          <p>May 12, 2023</p>
        </div>
      </div>
      <div className=" ml-16 mr-16 mb-7 h-[2px] w-100 bg-gray-900"></div>

      {/* ======================================================================== */}
      <div className="flex justify-between pl-16 pr-16 mt-5 mb-5">
        <div className="">
          <p className="text-[13px] font-bold">LAILA JOHN</p>
          <p className="text-[13px] text-gray-400">MUMBAI</p>
        </div>
        <div className=" flex flex-col w-[40vw]">
          <div className="flex flex-row mb-7">
            <p className="flex flex-row relative top-[11px] mr-5 text-[1.3rem] ">
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
            </p>
            <p className="text-[1.7rem] font-bold">The Best Out There!</p>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis animi
            tenetur eveniet dignissimos. Minus minima sequi pariatur deleniti
            omnis consequatur. Quasi ex non, quo fugiat molestiae maiores modi
            dicta at saepe fugit dolor ullam ab quaerat voluptate impedit quia
            dolorum praesentium. Explicabo eos provident sit praesentium, quis
            dolor deserunt incidunt?
          </p>
        </div>
        <div className=" font-bold">
          <p>May 12, 2023</p>
        </div>
      </div>
      <div className=" ml-16 mr-16 mb-7 h-[2px] w-100 bg-gray-900"></div>
      {/* ======================================================================== */}
      <div className="flex justify-end mr-16 mb-7">
        <button className="p-5 mr-2 border-2  hover:bg-[#FFC801] rounded-full">
          <FaCaretLeft />
        </button>
        <button className="p-5  bg-[#FFC801] rounded-full">
          <FaCaretRight />
        </button>
      </div>
    </>
  );
};

export default Comments;
