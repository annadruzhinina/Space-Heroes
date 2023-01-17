import { useEffect, useState } from "react";
import "./style/Heroes.css";
import Modal from "./components/Modal.jsx";

function Heroes() {
  const [characters, setCharacters] = useState([]);
  const [selectedHero, setSelectedHero] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = (hero) => {
    setSelectedHero(hero);
    setModalOpen(!modalOpen);
  };

  useEffect(() => {
    fetch("https://finalspaceapi-production.up.railway.app/characters/")
      .then((response) => response.json({}))
      //   .then((data) => console.log(data[0].name));
      .then((data) => setCharacters(data));
  }, []);

  return (
    <>
      <div className="heroes-body">
        <ul className="heroes-list">
          {characters.map((hero) => (
            <div key={hero._id}>
              <a className="hero-name">{hero.name}</a>

              <img className="avatar-img" src={hero.img_url} alt="avatar" />
            </div>
            //   <img key={characters._id} src={`https://finalspaceapi-production.up.railway.app/characters/avatar/{hero.img_url}`} alt="" />
          ))}
        </ul>
        <Modal
          characters={selectedHero}
          modalOpen={modalOpen}
          toggleModal={toggleModal}
        />
      </div>
    </>
  );
}

export default Heroes;
