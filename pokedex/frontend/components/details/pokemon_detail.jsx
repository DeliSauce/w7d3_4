import React from 'react';
import { Link } from 'react-router';


export default class PokemonDetail extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.requestPokemonDetails(this.props.params.pokemonId);
  }

  componentWillReceiveProps(newProps){
    if (this.props.params.pokemonId !== newProps.params.pokemonId){
      this.props.requestPokemonDetails(newProps.params.pokemonId);
    }
  }

  render(){
    let items = [];
    if(typeof this.props.pokemonDetails.items !== 'undefined') {
      items = this.props.pokemonDetails.items.map((item, i)=>(
        <li key={i}>
          <Link to={`/pokemon/${this.props.params.pokemonId}/items/${item.id}`}>
            <img src={item.image_url} />
          </Link >
        </li>
      ));
    }

        return(
      <div className="details">
        <img src={this.props.pokemonDetails.image_url}/>
        <ul>
          <li>{this.props.pokemonDetails.name}</li>
          <li>type: {this.props.pokemonDetails.poke_type}</li>
          <li>attack: {this.props.pokemonDetails.attack}</li>
          <li>defense: {this.props.pokemonDetails.defense}</li>
          <li>moves: {this.props.pokemonDetails.moves}</li>
          {items}
        </ul>
        {this.props.children}
      </div>
    );
  }
}
