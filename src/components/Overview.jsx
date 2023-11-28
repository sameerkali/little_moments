import Accordion from "../pages/Accordion";
import { accordionData } from "../utils/AccordionData";

const Overview = () => {
  return (
    <div className="flex justify-between">
      <Accordion sections={accordionData} />
      <br />
      <div className="mr-16">
        <h1 className="text-2xl font-bold mb-3">LOCATION</h1>
        <img
          className="h-52 w-72 sam_shadow_4  bg-center rounded-lg "
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3tiNOO4g8aA0JWZgzNiVFgXXBuoEzQBHdxQ"
        />
      </div>
    </div>
  );
};

export default Overview;
