import { useEffect, useState } from "react";
import { deleteCharacter, getCharacter } from "../services/characters.js";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./CharactersDetail.css";

export default function CharacterDetail() {
  const [character, setCharacter] = useState({});
  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    fetchCharacter();
  }, []);

  async function fetchCharacter() {
    let oneCharacter = await getCharacter(id);
    setCharacter(oneCharacter);
  }
  async function handleDelete() {
    await deleteCharacter(id);

    navigate("/characters", { replace: true });
  }

  return (
    <div className="container">
      <div className="body">
        <div className="img-container">
          <img className="img" alt="avatar" src={`${character.img_url}`}></img>
        </div>
        <div className="description">
          <h2>{character.name}</h2>
        
          <p>{character.status}</p>
          <p>{character.species}</p>
          <p>{character.gender}</p>
          <p>{character.hair}</p>
          <p>{character.alias}</p>
          <p>{character.abilities}</p>
        </div>
      </div>
      <div className="btn-container">
        <Link to={`/characters/${character._id}/edit`}>
          <button className="button edit-btn">Edit Character</button>
        </Link>
        <Link to={`/characters/${character._id}/edit`}>
          <button className="button delete-btn" onClick={handleDelete}>
            Delete Character
          </button>
        </Link>
      </div>
    </div>
  );
}
