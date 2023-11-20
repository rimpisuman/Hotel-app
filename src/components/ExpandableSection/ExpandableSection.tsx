import React, { useState } from "react";

export interface IExpandableSection {
  title: string;
  children: any;
}

const ExpandableSection = ({ title, children }: IExpandableSection) => {
  const [expanded, setExpanded] = useState(true);
  return (
    <div className="expandable">
      <h5
        className="heading"
        onClick={() => {
          setExpanded(!expanded);
        }}
      >
        {children ? (expanded ? "-" : "+") : null}
        {title}
      </h5>
      {expanded && <div>{children}</div>}
    </div>
  );
};

export default ExpandableSection;
