import React from "react";
import ExpandableSection from "../ExpandableSection/ExpandableSection";
import SearchHotel from "../SearchHotel/SearchHotel";
import QualityRating from "../QualityRating/QualityRating";
import "./SideBar.css";

export interface ISideBar {
  setFilteredData: (hotels: any) => void;
}
const SideBar = ({ setFilteredData }: ISideBar) => {
  return (
    <div className="sidebar">
      <span className="side-bar-text">Filter Results</span>
      <ExpandableSection
        title={"Hotel Name"}
        children={<SearchHotel setFilteredData={setFilteredData} />}
      />
      <ExpandableSection
        title={"Quality Rating"}
        children={<QualityRating setFilteredData={setFilteredData} />}
      />
    </div>
  );
};

export default SideBar;
