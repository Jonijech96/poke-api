import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import IconsTipe from "./IconsType";
import Pokeball from "./icons/Pokeball";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { setIsLoading } from "../store/slices/isLoadingSlice";


// import iconoAcero from "../assets/img/icon_acero.webp";
const PokemonCard = ({ pokemonUrl }) => {
  const [pokemon, setPokemon] = useState([]);
  const isLoading = useSelector((state) => state.isLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(setIsLoading(true));
    axios.get(pokemonUrl).then((res) => setPokemon(res.data))
    // .finally(() => dispatch(setIsLoading(false)))
  }, []);

  // console.log(pokemon.types?.[0].type.name);
  
  return (
    <>
    <div className={`card ${pokemon.types?.[0].type.name}`}>
      <Link to={`/pokedex/${pokemon.id}`}>
        <div className="card__content">
          <div className="card__description">
            <span className="card__id">#{String(pokemon.id).padStart(3,"0")}</span>
            <h3>{`${pokemon.name?.[0].toUpperCase()}${pokemon.name?.substring(1)}`}</h3>

            <IconsTipe types={pokemon.types} />
          </div>
          <div className="card__img__content">
            <motion.img
              layoutId={pokemon.id}
              className="card__img"
              src={
                pokemon.sprites?.other.dream_world.front_default ||
                pokemon.sprites?.other["official-artwork"].front_default
              }
              alt=""
            />
            <Pokeball className="card__pattern" />
            
          </div>
        </div>
      </Link>
    </div>
    </>
  );
};

export default PokemonCard;
