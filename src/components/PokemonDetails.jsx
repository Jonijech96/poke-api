import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion"
import IconsTipe from "./IconsType";


const PokemonDetails = () => {
  
  const [pokemon, setPokemon] = useState([]);
  const {id} = useParams();
  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(res=>setPokemon(res.data));
  
  }, [])
  // console.log(pokemon);
  
  return (
  <div>
    <h1>{pokemon.name}</h1>
    <motion.img
      layoutId={pokemon.sprites?.other.dream_world.front_default ||
        pokemon.sprites?.other["official-artwork"].front_default}
        src={pokemon.sprites?.other.dream_world.front_default || pokemon.sprites?.other['official-artwork'].front_default} alt="" 
      />
      <div className="pokemon__about">
        <p>{pokemon.id}</p>
        <p>{pokemon.weight}</p>
        <p>{pokemon.height}</p>
      </div>
      <div className="pokemon__moves">
        {pokemon.moves?.map(move=>(
          <span>{move.move.name}</span>
        ))}
      </div>
      <div className="pokemon__stats">
        {pokemon.stats?.map(stat=>(
          <p><span>{stat.stat.name}</span>: <span>{stat.base_stat}</span></p>
        ))}
      </div>
      <IconsTipe types={pokemon.types} />
  </div>
  );
};

export default PokemonDetails;
