import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { updateCharacter, getCharacter } from "../services/characters.js";
import "../style/characterEdit.css";

export default function CharacterEdit() {
  const [character, setCharacter] = useState({
    _id: "",
    name: "",
    status: "",
    species: "",
    gender: "",
    hair: "",
    alias: [],
    origin: "",
    abilities: [],
    img_url: "",
  });

  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    fetchCharacter();
  }, []);

  async function fetchCharacter() {
    let oneCharacter = await getCharacter(id);
    setCharacter(oneCharacter);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateCharacter(id, character);
    navigate(`/characters/${character._id}`, { replace: true });
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    console.log(name, value);

    setCharacter((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="edit-body">
      <h2> </h2>
      <form className="create-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Please insert your Name"
          name="name"
          value={character.name}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Please insert your Role"
          name="status"
          value={character.status}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Please insert your House"
          name="species"
          value={character.species}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Please insert your School"
          name="gender"
          value={character.gender}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Please insert your Blood Status"
          name="hair"
          value={character.hair}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Please insert your Species"
          name="alias"
          value={character.alias}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Please insert your Species"
          name="origin"
          value={character.origin}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Please insert your Species"
          name="abilities"
          value={character.abilities}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Please insert your Species"
          name="img_url"
          value={character.img_url}
          onChange={handleChange}
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
