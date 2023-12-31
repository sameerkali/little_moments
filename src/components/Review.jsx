/* eslint-disable react/no-unknown-property */
import Comments from "../pages/Comments";

const Review = () => {
  return (
    <>
      <div className="bg-[#F7F5EC]  sm:justify-between justify-center sm:p-16 flex flex-col sm:flex-row">
        <div className="left">
          <h1 className="sam_bold text-[6rem] sm:text-[8rem] font-bold ml-16 sm:ml-0">REVIEWS</h1>
          <div className="ml-16 sm:ml-0 flex">
            <h2 className="text-[3rem] sam_bold top-[-.5rem] relative  mr-3 font-bold">
              5.0
            </h2>
            <div>
              <p>⭐⭐⭐⭐⭐</p>
              <p>1,298 reviews</p>
            </div>
          </div>
        </div>
        <div className="mt-24 ">
          <button className="ml-16 sm:ml-0 mb-16 sam_shadow_5 p-4 bg-[#0074FE] text-white rounded-lg hover:bg-[#FE6A4D] ">
            write a review
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2 relative top-[6px]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* this is black bar between comments */}
      <div className=" ml-16 mr-16 mb-7 h-[2px] w-100 bg-gray-900"></div>
      <Comments />
    </>
  );
};

export default Review;
