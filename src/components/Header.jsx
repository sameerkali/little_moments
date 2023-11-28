/* eslint-disable react/no-unknown-property */
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <footer id="top" className="p-6 pb-14 bg-[#F7F5EC]">
        <div className="flex flex-row  justify-between p-1 bg-black text-white rounded-2xl">
          <div className=" gap-5  m-4 hidden sm:flex ">
            <Link to={`/review`}>
              {" "}
              <p className="hover:text-[#FE6A4D] cursor-pointer mb-3 sm:mb-0">
                Review
              </p>{" "}
            </Link>
            <Link to={`/feature`}>
              {" "}
              <p className="hover:text-[#FE6A4D] cursor-pointer mb-3 sm:mb-0">
                Activity Near Me
              </p>{" "}
            </Link>
            <Link to={`/overview`}>
              {" "}
              <p className="hover:text-[#FE6A4D] cursor-pointer  sm:mb-0">
                Add a Place
              </p>{" "}
            </Link>
          </div>
          <Link to={`/feature`}>
            <div className="m-4 p-1  flex ">
              {/* <Link to={`/`}>
                <h1 className="hover:text-[#FE6A4D] mr-9 font-bold">home</h1>
              </Link> */}

              <p className="font-bold hover:text-[#FE6A4D]">Start Exploring</p>
              <p className="relative top-[7px]">
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
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
              </p>
            </div>
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Header;
