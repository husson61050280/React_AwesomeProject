import React, { useState, useEffect } from "react";
import "../App.css";
import "../components/PokeList";
import { Link } from 'react-router-dom';

function PokeDetail({ match }) {
  const [pokemonDetail, setPokemonDetail] = useState([]);

  useEffect(() => {
    fetchName();
  });

  //เอาข้อมูล pokemon มาเก็บไว้
  const fetchName = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${match.params.pokemon}`)
      .then((response) => response.json())
      .then((detail) => setPokemonDetail(detail));
  };

  return (
    <div className="App">
      <div className="pokedex">
         <Link to = {'/'} >
        <img
          src="http://pngimg.com/uploads/pokeball/pokeball_PNG8.png"
          width="60px"
          height="60px"
          alt=""
        />
        <h2>POKEDEX</h2>
        </Link>
      </div>
      <div>
        <img
          className="detail-img tc dib pa1 ma2"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${match.params.pokemon}.png`}
          width="200px"
          height="200px"
          alt=""
        />
      </div>
      <div className="details dib">
        <ul>
          <li>ID: {pokemonDetail.id}</li>
          <li>Name: {pokemonDetail.name}</li>
          <li>Height: {pokemonDetail.height}</li>
          <li>Weight: {pokemonDetail.weight}</li>
          <li>
            Type: {pokemonDetail.types && pokemonDetail.types[0].type.name}
          </li>
          <li>
            Abilities:{" "}
            {pokemonDetail.abilities && pokemonDetail.abilities[0].ability.name}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PokeDetail;
