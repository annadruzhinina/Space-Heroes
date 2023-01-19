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
    <div className="body-detail">
      <div className="container">
        <div className="body">
          <div className="img-container">
            <img
              className="img"
              alt="avatar"
              src={`${character.img_url}`}
            ></img>
          </div>

          <div className="description">
            <h2 className="name-detail">{character.name}</h2>
            <div className="status">
              <p>{character.status}</p>
              <p>{character.species}</p>
              <p>{character.gender}</p>
              <p>{character.hair}</p>
              <h4 className="alias">Alias:</h4>
              <ul>
                {character.alias &&
                  character.alias.map((alias, index) => (
                    <li key={index}>{alias}</li>
                  ))}
              </ul>
              <h4 className="abilities">Abilities:</h4>
              <ul>
                {character.abilities &&
                  character.abilities.map((ability, index) => (
                    <li key={index}>{ability}</li>
                  ))}
              </ul>
              <div className="btn-container">
                <Link to={`/characters/${character._id}/edit`}>
                  <button className="button edit-btn">Edit </button>
                </Link>
                <Link to={`/characters/${character._id}/edit`}>
                  <button className="button delete-btn" onClick={handleDelete}>
                    Delete
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
