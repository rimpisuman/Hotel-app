import React, { useState } from "react";
import "./ExpandableSection.css";

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
        {children ? (
          expanded ? (
            <div className="up" />
          ) : (
            <div className="down" />
          )
        ) : null}
        {title}
      </h5>
      {expanded && <div>{children}</div>}
    </div>
  );
};

export default ExpandableSection;
