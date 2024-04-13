import React from "react";
import "./Collaboration.css";
import { CollaborationData } from "../data/Collaboration";

const Collaboration = () => {
  return (
    <>
      
      <div className="slider h-[100px] m-auto overflow-hidden relative w-auto animation-scroll">
        <div className="slide-track">
            {CollaborationData.map((pitem) => {
              return (
                <>
                   <div className="slide">
                  <img src={pitem.img} />
                 </div>
                </>
              );
            })}
        </div>
      </div>
     

    </>
  );
};

export default Collaboration;
