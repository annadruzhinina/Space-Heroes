import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createCharacter } from "../services/characters.js";

export default function CharacterCreate() {
  const [character, setCharacter] = useState({
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

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createCharacter(character);
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
    <div>
      <h2>Create New Character </h2>
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
          placeholder="Please insert your Status"
          name="status"
          value={character.status}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Please insert your Species"
          name="species"
          value={character.species}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Please insert your Gender"
          name="gender"
          value={character.gender}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Please insert your Hair"
          name="hair"
          value={character.hair}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Please insert your Alias"
          name="alias"
          value={character.alias}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Please insert your Origin"
          name="origin"
          value={character.origin}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Please insert your Abilities"
          name="abilities"
          value={character.abilities}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Please insert your Image"
          name="img_url"
          value={character.img_url}
          onChange={handleChange}
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
