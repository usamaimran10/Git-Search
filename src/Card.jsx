import React from "react";

function Card({ imgSrc, name }) {
  return (
    <div className="Card">
      <div className="Box1">
        <img className="image" src={imgSrc} alt="N/A" />
      </div>
      <div className="Box2">
        <h1>{name}</h1>
        <a className="h4" href={`/user/${name}`}>
          Visit Profile
        </a>
      </div>
    </div>
  );
}

export default Card;
