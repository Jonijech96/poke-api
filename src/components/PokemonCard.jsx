import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PokemonCard = ({pokemonUrl}) => {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    axios.get(pokemonUrl)
    .then(res=>setPokemon(res.data));
  
  }, [])

  // console.log(pokemon);
  
  return (
    <Link to={`/pokedex/${pokemon.id}`}>
    <p>{pokemon.name}</p>
    <img src={pokemon.sprites?.other.dream_world.front_default} alt="" />
    </Link>
  )
};

export default PokemonCard;
