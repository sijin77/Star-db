import React from "react";
import "./Spinner.css";

const Spinner = props => {
  return (
    <div class="lds-css ng-scope">
      <div class="lds-double-ring">
        <div />
        <div />
      </div>
    </div>
  );
};
export default Spinner;
