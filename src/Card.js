import React from "react";

const Card = () => {
  return (
    <div className="bg-light-green dib br2 pa3 ma2 grow shadow-5">
      <img alt="robots" src="https://robohash.org/test?200*200" />
      <div>
        <h2>Jane Doe</h2>
        <p>jane.doe@gmail.com</p>
      </div>
    </div>
  );
};

export default Card;