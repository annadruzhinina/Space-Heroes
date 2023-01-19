import React from "react";
import "../style/home.css";

function Home() {
  return (
    <div>
      <h1 className="home-title">
        Final Space <br />
        <span>TV Series 2018–2021 TV-14 30m</span>
      </h1>

      <div className="banner">
        <div className="banner-container">
          <div className="banner-left">
            <img src="../image/homeImg.png" alt="image" />
          </div>
          <div className="banner-right">
            <video src="../video/homeVideo.mp4" controls />
          </div>
        </div>
        <p className="home-text">
          An astronaut named Gary and his planet-destroying sidekick called
          Mooncake embark on serialized journeys through space in order to
          unlock the mystery of where the universe actually ends and if it
          actually does exist. Final Space is an epic animated sci-fi comedy
          about a spaceman named Gary who is working off a prison sentence and
          makes a mysterious new alien friend, Mooncake, that he immediately
          bonds with. But what Gary doesn't know is that his adorable new
          sidekick is actually wanted by the sinister Lord Commander who will
          stop at nothing to use Mooncake's untapped powers for evil. Gary
          Goodspeed goes on intergalactic adventures with his planet-destroying
          sidekick Mooncake and anthropomorphic cat (and bounty hunter) Avocato.
          <br />
          Together they will take on The Lord Commander and try to stop him from
          getting to 'Final Space': the most powerful and mystifying force in
          all the universe, which could very well mean the end of life itself.
          —Johnny During the last few days of his five-year prison sentence,
          galactic fugitive Gary Goodspeed accidentally rescues and befriends a
          seemingly harmless alien named Mooncake, who unbeknownst to him is one
          of the most powerful living weapons in the universe. <br />
          Before he can realize it, Gary becomes caught up in an intergalactic
          conspiracy led by brutal alien dictator, Lord Commander, who wants to
          use Mookcake's power to revert the universe to its natural state. With
          no other choice, Gary and the misfit group of friends he made during
          his prison term become the last line of defense between Earth and the
          extinction of life as we know it. —geometrydashbroham
        </p>
      </div>
    </div>
  );
}

export default Home;

// src="../image/homeImg.png"
// src="../video/homeVideo.mp4"
