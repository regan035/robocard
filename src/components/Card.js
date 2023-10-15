import React from "react";

const Card = (props) => {
  //using destructure
  const { name, email, id } = props;

  return (
    <div className="tc bg-light-green dib br2 pa3 ma2 grow shadow-5">
      {/* <img alt="robots" src={`https://robohash.org/${props.id}?200*200`} /> */}
      <img alt="robots" src={`https://robohash.org/${id}?200*200`} />
      <div>
        {/* <h2>{props.name}</h2> */}
        <h2>{name}</h2>
        {/* <p>{props.email}</p> */}
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
