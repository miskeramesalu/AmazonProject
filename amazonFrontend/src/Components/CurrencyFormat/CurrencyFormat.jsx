import React from "react";
import numeral from "numeral";

const CurrencyFormat = ({ amount }) => (//The main point i was learn from this 
  //how to use props and destructuring, how to format data for display, and the importance of validating props in React.

  <div>{numeral(amount).format("$0,0.00")}</div>
);

export default CurrencyFormat;
