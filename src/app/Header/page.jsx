import React from "react";
import { FaRegUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <div className=" w-full pl-9 border-2 flex justify-end rounded-md ">
        <div className="mx-5 my-2">
          <FaRegUserCircle size={42} />
        </div>
      </div>
    </>
  );
};

export default Header;
