import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <footer className="p-6">
        <div className="flex flex-row justify-between p-1 bg-black text-white rounded-2xl">
          <div className="hidden h-full gap-12 lg:flex flex-row justify-around m-4 p-1">
            <p className="hover:text-[#FE6A4D]">Categories</p>
            <p className="hover:text-[#FE6A4D]">Activity Near Me</p>
            <p className="hover:text-[#FE6A4D]">Add a Place</p>
          </div>
          <div className="m-4 p-1 hover:text-[#FE6A4D]">
          <Link to={`/`}>

            <p className="font-bold ">Start Exploring ➡️</p>
          </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Header;
