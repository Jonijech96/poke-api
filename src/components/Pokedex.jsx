import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import PokemonCard from "./PokemonCard";

const Pokedex = () => {
  const userName = useSelector((state) => state.name);
  const [namePokemon, setNamePokemon] = useState("");
  const [pokemons, setPokemons] = useState([]);
  const [types, setTypes] = useState([]);
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10")
      .then((res) => setPokemons(res.data.results));

    axios
      .get("https://pokeapi.co/api/v2/type/")
      .then((res) => setTypes(res.data.results));
  }, []);
  const navigate = useNavigate();
  const searchPokemon = () => {
    navigate(`/pokedex/${namePokemon.toLowerCase()}`);
  };
  const filterType = (e) => {
    alert(e.target.value);
    axios.get(e.target.value).then((res) => setPokemons(res.data.pokemon));
  };
  // console.log(pokemons);
  return (
    <div>
      <h1>bienvenido {userName}!</h1>
      <input
        type="text"
        placeholder="search pokemon"
        value={namePokemon}
        onChange={(e) => setNamePokemon(e.target.value)}
      />
      <button onClick={searchPokemon}>Buscar</button>
      <select onChange={filterType} name="" id="">
        {types.map((type) => (
          <option key={type.url} value={type.url}>
            {type.name}
          </option>
        ))}
      </select>
      <ul className="grid">
        {pokemons.map((pokemon) => (
          <li
            className=""
            key={pokemon.url ? pokemon.url : pokemon.pokemon.url}
          >
            <PokemonCard
              pokemonUrl={pokemon.url ? pokemon.url : pokemon.pokemon.url}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pokedex;
