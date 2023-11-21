import React, { useState } from "react";
import "./HomeScreen.css";
import Sidebar from "../../components/SideBar/SideBar";
import hotel from "../../Data/hotel.json";
import Content from "../../components/Content/Content";

export interface Room {
  Description: string;
  Type: string;
  BedOptions: string;
  SleepsCount: number;
  SmokingAllowed: boolean;
}
export interface IHotels {
  HotelId: string;
  HotelName: string;
  Price: number;
  Category: string;
  Description: string;
  image: string;
  Rating: number;
  Rooms: Room[];
}

function Home() {
  const [hotels, setFilteredData] = useState(hotel);
  return (
    <div className="home">
      <div className="header">
        <h1>550 Hotels Available in Melbourne</h1>
      </div>
      <div className="app-content">
        <Sidebar setFilteredData={setFilteredData} />
        <Content hotels={hotels} />
      </div>
    </div>
  );
}

export default Home;
