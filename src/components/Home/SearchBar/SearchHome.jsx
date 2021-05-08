import React from "react";
import DatePick from "./DatePicker/DatePick";

import "./SearchHome.css";

const SearchHome = () => {
  return (
    <div className="searchHome container w-60">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="   Direction, club, city..."
          aria-label="Recipient's location"
          aria-describedby="basic-addon2"
        />
        <div>
          <DatePick />
        </div>

        <button className="btn btn-success m-3" type="button">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchHome;
