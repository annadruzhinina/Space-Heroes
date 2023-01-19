import { useEffect, useState } from "react";
import { getCharacters } from "../services/characters.js";
import Character from "./Character.jsx";

export default function Characters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchCharacters();
  }, []);

  async function fetchCharacters() {
    const allCharacters = await getCharacters();
    setCharacters(allCharacters);
  }
  return (
    <div>
      <h1>All Characters</h1>
      <div className="characters-body">
        <ul className="characters-list">
          {characters.map((charData) => (
            <Character character={charData} key={charData._id} />
          ))}
        </ul>
      </div>
    </div>
  );
}
