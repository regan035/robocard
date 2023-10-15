import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search robots"
        // every time type is changed we call this function
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
