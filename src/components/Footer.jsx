import React from "react";

// const Footer = () => {
const Footer = ({ length }) => {
  return (
    <div>
      <footer>
        <div>
          {length} List {length === 1 ? "User" : "Users"}
        </div>
        <div>Copyright &copy; {new Date().getFullYear()}</div>
      </footer>
    </div>
  );
};

export default Footer;
