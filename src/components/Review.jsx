import Comments from '../pages/Comments'

const Review = () => {
  return (
    <>
      <div className="1 flex justify-between p-16">
        <div className="left">
          <h1 className="text-[4rem] font-bold">REVIEWS</h1>
          <div className="flex">
            <h2 className="text-[3rem] top-[-.8rem] relative  mr-3 font-bold">
              5.0
            </h2>
            <div>
              <p>⭐⭐⭐⭐⭐</p>
              <p>1,298 reviews</p>
            </div>
          </div>
        </div>
        <div className="mt-24">
          <button className=" p-4 bg-[#0074FE] text-white rounded-lg hover:bg-[#FE6A4D]">
            write a review ➡️{" "}
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
