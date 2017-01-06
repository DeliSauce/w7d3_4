import React from 'react';
import { Link } from 'react-router';

export const PokemonIndexItem = ({pokemon}) => (
  <li>
    <Link to={`/pokemon/${pokemon.id}`}>
      {pokemon.name}
      <img width="10" height="10" src={pokemon.image_url}/>
    </Link>
  </li>
);
