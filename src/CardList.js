import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  return (
    <div>
      {robots.map((robot, i) => {
        // card need a unique key
        return (
          <Card key={i} id={robot.id} name={robot.name} email={robot.email} />
        );
      })}
    </div>
  );
};

export default CardList;
