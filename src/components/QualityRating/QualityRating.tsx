import React, { useState } from "react";
import "./QualityRating.css";
import { IHotels } from "../../pages/Home/HomeScreen";

export interface IRating {
  hotels: IHotels[];
  setFilteredData?: (hotels: IHotels[]) => void;
}

const QualityRating = ({ hotels, setFilteredData }: IRating) => {
  const [rating, setRating] = useState(null);
  console.log(rating, "rating");
  return <div className="rating">{hotels.map((hotel) => hotel.Rating)}</div>;
};

export default QualityRating;
