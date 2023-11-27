import { Banner_button, Banner_button_2 } from "./Banner_button";
import "./Scrolling_banner.css";

const Scrolling_banner = () => {
  return (
    <>
      <div className="logos">
        <div className="logos-slide">
          <Banner_button />
          <p className="p" style={{marginLeft: "10rem", marginRight: "10rem"}}>LIKE NEVER BEFORE</p>
          <Banner_button_2 />
        </div>
        <div className="logos-slide">
          <Banner_button />
          <p className="p" style={{marginLeft: "10rem", marginRight: "10rem"}}>LIKE NEVER BEFORE</p>
          <Banner_button_2 />
        </div>
        <div className="logos-slide">
          <Banner_button />
          <p className="p" style={{marginLeft: "10rem", marginRight: "10rem"}}>LIKE NEVER BEFORE</p>
          <Banner_button_2 />
        </div>
      </div>
    </>
  );
};

export default Scrolling_banner;
