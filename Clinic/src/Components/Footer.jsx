import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className=" bg-gray-300 text-center py-3 mt-56  bottom-0 ">
      <span className="text-dark">
        &copy; {new Date().getFullYear()} Sanjeevani Clinic, Solapur
      </span>
      <br />
      <Link to="/contact" className="text-dark">
        Contact Us
      </Link>
    </footer>
  );
}

export default Footer;
