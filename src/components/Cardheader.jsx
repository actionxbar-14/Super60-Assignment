import React from "react";
import { FaUser } from "react-icons/fa";
import { MdNotes } from "react-icons/md";

// import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const Cardheader = () => {
  return (
    <div className="flex flex-row  justify-between items-center p-8 pl-16">
      <div className="custmer flex justify-between items-center">
        <div className="cardheader-start flex justify-center items-center">
          <div className="custmer-icon">
            <FaUser size={24}/>
          </div>
          <div className="custmer-text">
            <p className="p-2">Customer</p>
          </div>
        </div>
      </div>
      <div className="cardheader-end flex gap-44 items-center">

        <div className="custmer-info flex justify-center items-center">
            <div className="custmer-info-icon">
                 <MdNotes size={24}/>
            </div>
            <div className="custmer-info-text">
                <p className="p-2">last Invoice</p>
            </div>
        </div>
    

      <div className="custmer-info flex p-2 justify-center items-center">
           
            <div className="custmer-info-text">
                <p>Actions</p>
            </div>
        </div>
      </div>


    </div>
  );
};

export default Cardheader;
