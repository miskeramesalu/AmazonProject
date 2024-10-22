import React from "react";
import classes from "./LowerHeader.module.css"
import { AiOutlineMenu } from "react-icons/ai";

function LowerHead() {
  return (
    <div className={classes.lower__container}>
      <ul>
        <li>
          <AiOutlineMenu />
          <p>All</p>
        </li>
        {["Today's Deals","Customer Service","Registry","Gift Cards","Sell",].map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default LowerHead;