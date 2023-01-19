import React from "react";
import { Link } from "react-router-dom";
import "./Characters.css";

export default function Character({ character }) {
  return (
    <Link className="link" to={`/characters/${character._id}`}>
      <h2 className="hero-name link">{character.name}</h2>
      <img
        className="avatar-img"
        alt="avatar"
        src={`${character.img_url}`}
      ></img>
    </Link>
  );
}
