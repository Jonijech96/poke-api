import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PokemonDetails = () => {
  const [pokemon, setPokemon] = useState([]);
  const {id} = useParams();
  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(res=>setPokemon(res.data));
  
  }, [])
  console.log(pokemon);
  
  return (
  <div>
    <h1>{pokemon.name}</h1>
    <img src={pokemon.sprites?.other.dream_world.front_default || pokemon.sprites?.other['official-artwork'].front_default} alt="" />

  </div>
  );
};

export default PokemonDetails;
