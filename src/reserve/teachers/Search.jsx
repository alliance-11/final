import React from "react";

export const Search = ({ search, setSearch }) => {
  return (
    <div className="search">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          id="search"
          placeholder="Search"
          role="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </div>
  );
};
