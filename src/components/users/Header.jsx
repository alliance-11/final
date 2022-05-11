import React from "react";

export const Header = ({ length }) => {
  return (
    <header>
      <h2>
      {length} List {length === 1 ? "User ✨" : "Users ✨"}
      </h2>
    </header>
  );
};

