import React from "react";
import { Link } from "react-router-dom";
import "../style/characters.css";

export default function Character({ character }) {
  return (
    <Link className="link" to={`/characters/${character._id}`}>
      <img
        className="avatar-img"
        alt="avatar"
        src={`${character.img_url}`}
      ></img>
    </Link>
  );
}

{
  /* <h2 className="hero-name link">{character.name}</h2> */
}
