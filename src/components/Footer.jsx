import React from "react";

// const Footer = () => {
const Footer = ({ length }) => {
  return (
    <div>
      <footer>
          <h2>
            {length} List {length === 1 ? "User" : "Users"}
          </h2>
        <div>Copyright &copy; {new Date().getFullYear()}</div>
      </footer>
    </div>
  );
};

export default Footer;
