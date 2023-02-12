import React from "react";

const SearchBar = ({ search }) => {
  return (
    <>
      <div className="searchBar">
        <input
          type="text "
          name="SearchBar"
          id="searchBar"
          placeholder="rechercher"
          onChange={search}
        ></input>
      </div>
      <div></div>
    </>
  );
};

export default SearchBar;
