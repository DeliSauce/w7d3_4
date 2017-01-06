import React from 'react';
import {PokemonIndexItem} from './pokemon_index_item';

export default class PokemonIndex extends React.Component{
  constructor(props){
    super(props);
    // this.pokemon = this.props.pokemon;
  }

  componentDidMount(){
    this.props.requestAllPokemon();
  }

  render(){
    let pokemonList = this.props.pokemon.map((pokemon) => (
      <PokemonIndexItem pokemon={pokemon} key={pokemon.id}/>
    ));
    return(
      <div className="testing">
        <ul className="pokemonList">
          {pokemonList}
        </ul>
        {this.props.children}
      </div>
    );
  }
}
