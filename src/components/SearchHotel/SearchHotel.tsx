import React, { useState } from "react";
import "./SearchHotel.css";
import { IHotels } from "../../pages/Home/HomeScreen";

export interface ISearchHotels {
  hotels: IHotels[];
  setFilteredData: (hotels: IHotels[]) => void;
}

const SearchHotel = ({ hotels, setFilteredData }: ISearchHotels) => {
  const [searchInput, setSearchInput] = useState("");
  console.log(hotels, "hotels");
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
            hotels.filter((item) => {
              return;

              console.log(item, "hotel");
              //hotel.HotelName.match(searchInput);
              //  setFilteredData(filteredData);
            });

            setSearchInput("");
          }
        }}
      >
        Go
      </button>
      <div>{searchInput}</div>
    </div>
  );
};

export default SearchHotel;
