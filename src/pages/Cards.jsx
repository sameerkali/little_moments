import { FaLocationDot, FaPhone } from "react-icons/fa6";

const Cards = () => {
  return (
    <>
      <card  className="w-96 h-auto">
        <div className=" w-96 ">
          <img src="ny_01.jpg" />
        </div>
        <div className="">
          <div className="w-96  heading flex justify-between ml-2 mr-2">
            <p>⭐ 4.9 stars</p>
            <p>November 69, 2023</p>
          </div>

          <h1> NewYork</h1>
          <p>$22.00</p>
          <div className="lower">
            <div className="flex flex-col pt-7 font-bold pb-7 ">
              <p className="  flex ">
                <FaLocationDot />{" "}
                <span className="relative top-[-5px]  ml-3">
                  NewYork, United States
                </span>
              </p>
              <p className="relative top-[11px] flex  ">
                <FaPhone />{" "}
                <span className="relative top-[-5px] ml-3 ">
                  +91 9639356395
                </span>
              </p>
            </div>
          </div>
        </div>
      </card>
    </>
  );
};

export default Cards;
