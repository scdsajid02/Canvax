import React from "react";
import canvax from "./assets/canvax.png";

const Footer = () => {
  return (
    <div className="bg-black text-white ">
      <div className=" ">
        <div className="flex items-center justify-between mx-4">
          <img className="w-32" src={canvax} alt="" />
          <p className="text-sm">Copyright &copy; sajid</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
