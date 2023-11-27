/* eslint-disable react/prop-types */
import { FaPlusCircle } from "react-icons/fa";
import { FaCircleMinus } from "react-icons/fa6";

import { useState } from "react";

const accordionStyles = {
  maxWidth: "60vw"
};

const accordionTitleStyles = {
  display: "flex",
  justifyContent: "space-between",
  cursor: "pointer",
  padding: "5px"
  //   background: "#21aeca"
};

const accordionContentStyles = {
  padding: "5px"
  //   background: "#39b9d2"
};

const AccordionSection = ({
  section,
  isActiveSection,
  setActiveIndex,
  sectionIndex
}) => {
  const toggleSection = () => {
    const nextIndex = isActiveSection ? null : sectionIndex;
    setActiveIndex(nextIndex);
  };
  return (
    <div>
      <div className="ml-16" style={accordionTitleStyles} onClick={toggleSection}>
        <div className="font-bold text-3xl">{section.title}</div>
        <div>{isActiveSection ? <FaCircleMinus /> : <FaPlusCircle />}</div>
      </div>
      {isActiveSection && (
        
        <div className="ml-16"  style={accordionContentStyles}>{section.content}  <div className=" mt-7 h-[2px] w-100 bg-gray-900"></div> </div>
        
      )}
    </div>
  );
};

const Accordion = ({ sections }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div style={accordionStyles}>
      {sections.map((section, index) => (
        <AccordionSection
          section={section}
          key={index}
          isActiveSection={index === activeIndex}
          setActiveIndex={setActiveIndex}
          sectionIndex={index}
        />
      ))}
    </div>
  );
};

export default Accordion;
