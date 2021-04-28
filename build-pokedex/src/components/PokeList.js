import React, { useState, useEffect } from "react";
import Pokecard from "./Pokecard";
import "../App.css";
import { Link } from 'react-router-dom';

function PokeList() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetchPokemon();
  });

  //query pokemons data
  const fetchPokemon = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then((response) => response.json())
      .then((pokes) => setPokemons(pokes.results));
  };

  return (
    <div className="App">
      <div className="pokedex">
        <img
          src="http://pngimg.com/uploads/pokeball/pokeball_PNG8.png"
          width="60px"
          height="60px"
          alt=""
        />
        <h2>POKEDEX</h2>
      </div>
      
      <div className="pokegrid">
        {pokemons.map((pokemon, i) => (
          //ส่งค่า id
          <Pokecard id={i + 1} key={i} name={pokemon.name} />
        ))}
      </div>
    </div>
  );
}

export default PokeList;
