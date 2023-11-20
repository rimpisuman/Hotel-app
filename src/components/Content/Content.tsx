import React from "react";
import "./Content.css";
import { IHotels } from "../../pages/Home/HomeScreen";
import QualityRating from "../QualityRating/QualityRating";

export interface IContent {
  hotels: IHotels[];
}

const Content = ({ hotels }: IContent) => {
  return (
    <div className="main">
      {hotels.map((hotel) => (
        <div className="container">
          <div className="column1">
            <img className="image" src={hotel.image}></img>
          </div>
          <div className="column2">
            <span className="hotel-heading">{hotel.HotelName}</span>
            <i data-rating={hotel.Rating}></i>
            <QualityRating hotels={hotels} />
            <p className="room-desc">
              <span className="room-heading">Room Type: </span>
              {hotel.Rooms.map((room) => room.Description)}
            </p>
          </div>
          <div className="column3">
            <div className="price">{"$" + hotel.Price}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Content;
