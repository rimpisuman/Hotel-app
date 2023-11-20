import React from "react";
import ExpandableSection from "../ExpandableSection/ExpandableSection";
import SearchHotel from "../SearchHotel/SearchHotel";
import QualityRating from "../QualityRating/QualityRating";
import "./SideBar.css";
import { IHotels } from "../../pages/Home/HomeScreen";

export interface ISideBar {
  hotels: IHotels[];
  setFilteredData: (hotels: any) => void;
}
const SideBar = ({ hotels, setFilteredData }: ISideBar) => {
  return (
    <div className="sidebar">
      <span className="side-bar-text">Filter Results</span>
      <hr />
      <ExpandableSection
        title={"Hotel name"}
        children={
          <SearchHotel hotels={hotels} setFilteredData={setFilteredData} />
        }
      />
      <ExpandableSection
        title={"Quality rating"}
        children={
          <QualityRating hotels={hotels} setFilteredData={setFilteredData} />
        }
      />
    </div>
  );
};

export default SideBar;
