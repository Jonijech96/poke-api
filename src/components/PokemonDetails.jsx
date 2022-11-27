import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion"
import IconsTipe from "./IconsType";
import Pokeball from "./icons/Pokeball";


const PokemonDetails = () => {
  
  const [pokemon, setPokemon] = useState([]);
  const {id} = useParams();
  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(res=>setPokemon(res.data));
  
  }, [])
  // console.log(pokemon);
  
  return (
  <div className="pokemon">
    <div className={`pokemon__img__content ${pokemon.types?.[0].type.name}`}>

      <motion.img
      className="pokemon__img"
      layoutId={pokemon.id}
        src={pokemon.sprites?.other.dream_world.front_default || pokemon.sprites?.other['official-artwork'].front_default} alt="" 
      />
      <Pokeball className="pokemon__img__pattern"/>
      
    </div>
    <h1>{pokemon.name}</h1>
    <div className="pokemon__types">
    <IconsTipe types={pokemon.types} />
    </div>

    <div className="pokemon__about">
      <p>{pokemon.id}</p>
      <p>{pokemon.weight}</p>
      <p>{pokemon.height}</p>
    </div>
    <div className="pokemon__moves">
      {pokemon.moves?.map(move=>(
        <span className="pokemon__moves__item">{move.move.name.replace("-"," ")}</span>
        ))}
    </div>
    <div className="pokemon__stats">
      {pokemon.stats?.map(stat=>(
        <p><span>{stat.stat.name}</span>: <span>{stat.base_stat}</span></p>
      ))}
    </div>
  </div>
  );
};

export default PokemonDetails;
