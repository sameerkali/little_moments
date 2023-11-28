import Accordion from "../pages/Accordion";
import '../pages/font.css'
import { accordionData } from "../utils/AccordionData";

const Overview = () => {
  return (
    <div className="flex sm:flex-row flex-col-reverse  justify-between">
      <Accordion sections={accordionData} />
      <br />
      <div className="mr-16">
        <h1 className="sam_bold_overview text-2xl font-bold mb-3 ml-14 sm:ml-0 ">LOCATION</h1>
        <img
          className=" ml-14 sm:ml-0 h-52 w-72 sam_shadow_4  bg-center rounded-lg "
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3tiNOO4g8aA0JWZgzNiVFgXXBuoEzQBHdxQ"
        />
      </div>
    </div>
  );
};

export default Overview;
