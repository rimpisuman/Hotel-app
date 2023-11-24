import React, { useState, useEffect } from "react";
import DiamondIcon from "../DiamondIcon/DiamondIcon";
import "./QualityRating.css";
import { IHotels } from "../../pages/Home/HomeScreen";
import hotels from "../../Data/hotel.json";
export interface IRating {
  setFilteredData: (hotels: IHotels[]) => void;
}

export interface IRatingItem {
  value: number;
  label: string;
  isChecked: boolean;
}

const QualityRating = ({ setFilteredData }: IRating) => {
  const [ratingList, setRatingList] = useState<IRatingItem[]>([
    { value: 1000, label: "All", isChecked: true },
    { value: 5, label: "", isChecked: false },
    { value: 4, label: "", isChecked: false },
    { value: 3, label: "", isChecked: false },
    { value: 2, label: "", isChecked: false },
    { value: 1, label: "", isChecked: false },
    { value: 0, label: "Un-rated", isChecked: false },
  ]);

  const handleOnChange = (item: IRatingItem, isChecked: boolean) => {
    const r = ratingList.map((rating) =>
      rating.value === item.value ? { ...item, isChecked: isChecked } : rating
    );
    setRatingList(r);
  };

  useEffect(() => {
    let filteredData: IHotels[] = hotels;
    filteredData = hotels.filter((hotel) => {
      let retVal = false;
      ratingList.forEach((rating) => {
        if (rating.isChecked) {
          if (rating.label === "All") retVal = true;
          if (rating.label === "Un-rated" && !hotel.Rating) retVal = true;
          if (hotel.Rating >= rating.value && hotel.Rating <= rating.value + 1)
            retVal = true;
        }
      });

      return retVal;
    });

    setFilteredData(filteredData);
  }, [ratingList, setFilteredData]);

  return (
    <div className="rating-list">
      {ratingList.map((item) => {
        return (
          <div className="rating-item" key={item.value}>
            <input
              type="checkbox"
              id="st1"
              checked={item.isChecked}
              value={item.value}
              onChange={(e) => {
                handleOnChange(item, e.target.checked);
              }}
            />
            {item.label}
            <div className="diamonds">
              {!item.label &&
                Array.from(Array(item.value).keys()).map((d) => (
                  <DiamondIcon key={d} />
                ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default QualityRating;
