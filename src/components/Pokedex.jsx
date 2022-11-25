import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import PokemonCard from "./PokemonCard";
import { motion } from "framer-motion"
import { setIsLoading } from "../store/slices/isLoadingSlice";
import LoadingScreen from "./LoadingScreen";


const Pokedex = () => {
  const userName = useSelector((state) => state.name);
  const [namePokemon, setNamePokemon] = useState("");
  const [pokemons, setPokemons] = useState([]);
  const [types, setTypes] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setIsLoading(true));
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10")
      .then((res) => setPokemons(res.data.results))
      .finally(()=>dispatch(setIsLoading(false)))

    axios
      .get("https://pokeapi.co/api/v2/type/")
      .then((res) => setTypes(res.data.results));
  }, []);
  const navigate = useNavigate();
  const searchPokemon = () => {
    navigate(`/pokedex/${namePokemon.toLowerCase()}`);
  };
  const filterType = (e) => {
    // alert(e.target.value);
    dispatch(setIsLoading(true));
    axios.get(e.target.value)
    .then((res) => setPokemons(res.data.pokemon))
    .finally(()=>dispatch(setIsLoading(false)))
  };
  // console.log(pokemons);
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.15
      }
    }
  }
  
  const itemPokemon = {
    hidden: { opacity: 0,scale:0 },
    show: { opacity: 1,scale:1 }
  }
  const isLoading = useSelector((state) => state.isLoading);
  // if(isLoading){
  //   return (
  //     <div className="spinner">
  //       <div className="circle">soy un loading</div>
  //     </div>
  //   )
  // }
  return (
    <>
      <header className="header">

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
      </header>

      {isLoading ? <LoadingScreen /> : (

      <motion.ul 
      className="grid"
      variants={container}
    initial="hidden"
    animate="show"
    >
        {pokemons.map((pokemon) => (
          <motion.li
            variants={itemPokemon}
            className=""
            key={pokemon.url ? pokemon.url : pokemon.pokemon.url}
          >
            <PokemonCard
              pokemonUrl={pokemon.url ? pokemon.url : pokemon.pokemon.url}
            />
          </motion.li>
        ))}
      </motion.ul>
      )}
    </>
  );
};

export default Pokedex;
