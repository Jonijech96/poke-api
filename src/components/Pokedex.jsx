import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Pokedex = () => {
  const userName = useSelector((state) => state.name);

  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/")
      .then((res) => setPokemons(res.data.results));
  }, []);
  console.log(pokemons);
  return (
    <div>
      <h1>bienvenido {userName}!</h1>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.url}>{pokemon.url}</li>
        ))}
      </ul>
    </div>
  );
};

export default Pokedex;
