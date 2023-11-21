import React from "react";
import "./Content.css";
import DiamondRating from "../DiamondRating/DiamondRating";
import { IHotels } from "../../pages/Home/HomeScreen";

export interface IContent {
  hotels: IHotels[];
}

const Content = ({ hotels }: IContent) => {
  return (
    <div className="main">
      {hotels.map((hotel) => (
        <div className="container" key={hotel.HotelId}>
          <div className="column1">
            <img className="image" alt="" src={hotel.image}></img>
          </div>
          <div className="column2">
            <div className="hotel-heading">{hotel.HotelName}</div>
            <DiamondRating value={hotel.Rating} />
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
