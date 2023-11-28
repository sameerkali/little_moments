import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "./card_shadow.css";

const Cards = () => {
  return (
    <>
      <div className="card_holder sm:flex-row flex-col flex justify-between">
        {/* 1 */}
        <Link to={`/ny`}>
          <div className="mb-9 sm:mb-0 sam_shadow_8 max-w-sm bg-white border border-gray-200 rounded-lg shadow  dark:border-gray-700">
            <img
              className="rounded-t-lg h-[15rem] w-[25rem] "
              src="ny_01.jpg"
              alt=""
            />
            <button className="hidden sm:flex relative left-[16rem]  top-[-14rem] rounded-2xl pl-6 pr-6 pt-1 pb-1 bg-yellow-400  font-bold">
              Popular
            </button>
            <button className="relative left-[1rem] top-[-5rem] rounded-2xl   text-[2rem] text-white  font-bold">
              PLACE
            </button>
            <div className="">
              {/* 1 */}
              <div className=" p-1 heading flex justify-between mt-0 sm:mt-[-5rem] ml-2 mr-2">
                <p>⭐ 4.9 stars</p>
                <p>November 69, 2023</p>
              </div>
              {/* 2 */}
              <h1 className="ml-5"> NewYork</h1>
              <p className="ml-5">$22.00</p>
              {/* 3 */}
              <div className="lower ml-5">
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
          </div>
        </Link>
        {/* 2 */}
        <Link to={`/moldives`}>
          <div className="mb-9 sm:mb-0 sam_shadow_8 max-w-sm bg-white border border-gray-200 rounded-lg shadow  dark:border-gray-700">
            <img
              className="rounded-t-lg h-[15rem] w-[25rem] "
              src="maldives_03.jpg"
              alt=""
            />

            <div className="">
              {/* 1 */}
              <div className=" p-1 heading flex justify-between ml-2 mr-2">
                <p>⭐ 4.0 stars</p>
                <p>November 17, 2023</p>
              </div>
              {/* 2 */}
              <h1 className="ml-5"> MOLDIVES</h1>
              <p className="ml-5">$25.00</p>
              {/* 3 */}
              <div className="lower ml-5">
                <div className="flex flex-col pt-7 font-bold pb-7 ">
                  <p className="  flex ">
                    <FaLocationDot />{" "}
                    <span className="relative top-[-5px]  ml-3">
                    male, maldives
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
          </div>
        </Link>

        {/* 3 */}
        <Link to={`/kashmir`}>
          <div className="mb-9 sm:mb-0 sam_shadow_8 max-w-sm bg-white border border-gray-200 rounded-lg shadow  dark:border-gray-700">
            <img
              className="rounded-t-lg h-[15rem] w-[25rem]"
              src="kashmir_01.jpg"
              alt=""
            />
            <div className="">
              {/* 1 */}
              <div className=" p-1 heading flex justify-between ml-2 mr-2">
                <p>⭐ 4.9 stars</p>
                <p>November 9, 2023</p>
              </div>
              {/* 2 */}
              <h1 className="ml-5"> KASHMIR</h1>
              <p className="ml-5">$99.00</p>
              {/* 3 */}
              <div className="lower ml-5">
                <div className="flex flex-col pt-7 font-bold pb-7 ">
                  <p className="  flex ">
                    <FaLocationDot />{" "}
                    <span className="relative top-[-5px]  ml-3">
                    gulbarg, kashmir India
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
          </div>
        </Link>
      </div>
    </>
  );
};

export default Cards;

{
  /* <>
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
    </> */
}
