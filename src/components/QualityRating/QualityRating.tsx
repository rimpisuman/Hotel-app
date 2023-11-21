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
    { value: 1000, label: "All", isChecked: false },
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

    ratingList
      .filter((d) => d.isChecked)
      .forEach((rating) => {
        filteredData = filteredData.filter((hotel) => {
          if (rating.label === "All") return true;
          if (rating.label === "Un-rated" && !hotel.Rating) return true;
          if (hotel.Rating >= rating.value && hotel.Rating <= rating.value + 1)
            return true;

          return false;
        });
      });

    setFilteredData(filteredData);
  }, [ratingList, setFilteredData]);

  return (
    <div className="rating-list">
      {ratingList.map((item) => {
        return (
          <div className="rating-item">
            <input
              type="checkbox"
              id="st1"
              value={item.value}
              onChange={(e) => {
                handleOnChange(item, e.target.checked);
              }}
            />
            {item.label}
            <div className="diamonds">
              {!item.label &&
                Array.from(Array(item.value).keys()).map((d) => (
                  <DiamondIcon />
                ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default QualityRating;
