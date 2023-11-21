import React, { useState } from "react";
import "./SearchHotel.css";
import hotels from "../../Data/hotel.json";
import { IHotels } from "../../pages/Home/HomeScreen";

export interface ISearchHotels {
  setFilteredData: (hotels: IHotels[]) => void;
}

const SearchHotel = ({ setFilteredData }: ISearchHotels) => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <div className="search">
      <input
        type="text"
        className="search-hotel"
        placeholder="Enter Hotel Name"
        onChange={(e) => {
          setSearchInput(e.target.value);
        }}
        value={searchInput}
      />
      <button
        type="submit"
        className="search-button"
        onClick={() => {
          if (searchInput.length > 0) {
            const filteredData = hotels.filter((hotel) => {
              return hotel.HotelName.match(searchInput);
            });
            setFilteredData(filteredData);
            setSearchInput("");
          }
        }}
      >
        Go
      </button>
    </div>
  );
};

export default SearchHotel;
