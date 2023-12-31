import React from "react";
import DiamondIcon from "../DiamondIcon/DiamondIcon";
import "./DiamondRating.css";

const DiamondRating = ({ value }: { value: number }) => {
  return (
    <div className="diamond-rating-wrapper">
      <div className="diamond-fg" style={{ width: `${(value ?? 5) * 25}px` }}>
        {value &&
          Array.from(Array(5).keys()).map((d) => <DiamondIcon key={d} />)}
      </div>
    </div>
  );
};

export default DiamondRating;
