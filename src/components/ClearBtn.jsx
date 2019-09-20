import React from "react";
import "./ClearBtn.css";

function ClearBtn(props) {
  return (
    <div className="clear" onClick={props.handleClear}>
      Clear
    </div>
  );
}

export default ClearBtn;
