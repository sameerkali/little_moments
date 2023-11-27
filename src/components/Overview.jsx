import Accordion from "../pages/Accordion";
import { accordionData } from "../utils/AccordionData";

const Overview = () => {
  return (
    <div className="flex justify-between">
      <Accordion sections={accordionData} />
      <br />
      <div className="mr-16">
        <h1 className="text-2xl mb-3">LOCATION</h1>
        <img
          className="h-52 w-60  bg-center rounded-lg "
          src="https://developers.google.com/static/maps/images/landing/hero_mobile_maps_sdks_480.png"
        />
      </div>
    </div>
  );
};

export default Overview;
