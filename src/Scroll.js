import React from "react";

const Scroll = (props) => {
  return (
    //using props.children to create components
    <div
      style={{
        overflowY: "scroll",
        border: "5px solid black",
        height: "800px",
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
