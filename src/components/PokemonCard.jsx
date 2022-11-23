import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import iconoAcero from '../assets/img/icon_acero.webp';
const PokemonCard = ({pokemonUrl}) => {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    axios.get(pokemonUrl)
    .then(res=>setPokemon(res.data));
  
  }, [])

  console.log(pokemon);
  
  return (
    <Link to={`/pokedex/${pokemon.id}`}>
    <p>{pokemon.name}</p>
    <span>
    acero
    <img src={iconoAcero} width="30px" alt="" />
    </span>
    <img className="card__img" src={pokemon.sprites?.other.dream_world.front_default || pokemon.sprites?.other['official-artwork'].front_default} alt="" />
    </Link>
  )
};

export default PokemonCard;
