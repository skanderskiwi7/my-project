import React from "react";

const SearchBar = ({ handheSearch }) => {
  return (
    <section className="bare">
      <div className="webdesigntuts-workshop">
        <form action="" method="">
          <input
            type="search"
            placeholder="
find your car"
            onChange={(e) => {
              handheSearch(e.target.value);
            }}
          />
          <button>Search</button>
        </form>
      </div>
    </section>
  );
};

export default SearchBar;
