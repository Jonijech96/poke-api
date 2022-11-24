import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import IconsTipe from "./IconsType";

import iconoAcero from "../assets/img/icon_acero.webp";
const PokemonCard = ({ pokemonUrl }) => {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    axios.get(pokemonUrl).then((res) => setPokemon(res.data));
  }, []);

  console.log(pokemon.types?.[0].type.name);

  return (
    <div className={`card ${pokemon.types?.[0].type.name}`}>
      <Link to={`/pokedex/${pokemon.id}`}>
        <div className="card__content">
          <div className="card__description">
            <p>{pokemon.name}</p>

            <IconsTipe types={pokemon.types} />
          </div>
          <div className="card__img__content">
            <img
              className="card__img"
              src={
                pokemon.sprites?.other.dream_world.front_default ||
                pokemon.sprites?.other["official-artwork"].front_default
              }
              alt=""
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PokemonCard;
