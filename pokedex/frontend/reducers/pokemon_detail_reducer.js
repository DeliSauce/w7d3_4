import {RECEIVE_POKEMON_DETAILS} from '../actions/pokemon_details_actions';

const pokemonDetailReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_POKEMON_DETAILS:
    // debugger;
      return action.pokemonDetails;
    default:
      console.log("hit details default");
      return state;
  }
};

export default pokemonDetailReducer;
