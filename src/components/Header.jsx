/* eslint-disable react/no-unknown-property */
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <footer id="top" className="p-6 pb-14 bg-[#F7F5EC]">
        <div className="flex flex-row justify-between p-1 bg-black text-white rounded-2xl">
          <div className="hidden lg:flex h-full gap-12  flex-row justify-around m-4 p-1">
            <Link to={`/`}>
              {" "}
              <p className="hover:text-[#FE6A4D] cursor-pointer ">Home</p>{" "}
            </Link>
            <Link to={`/review`}>
              {" "}
              <p className="hover:text-[#FE6A4D] cursor-pointer ">
                Review
              </p>{" "}
            </Link>
            <Link to={`/feature`}>
              {" "}
              <p className="hover:text-[#FE6A4D] cursor-pointer ">
                Activity Near Me
              </p>{" "}
            </Link>
            <Link to={`/overview`}>
              {" "}
              <p className="hover:text-[#FE6A4D] cursor-pointer ">
                Add a Place
              </p>{" "}
            </Link>
          </div>
          <Link to={`/`}>
            <div className="m-4 p-1 hover:text-[#FE6A4D] flex ">
              <p className="font-bold ">Start Exploring</p>
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
