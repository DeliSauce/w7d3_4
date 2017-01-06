import * as APIUtil from '../util/api_util';
export const RECEIVE_POKEMON_DETAILS = "RECEIVE_POKEMON_DETAILS";

export const receivePokemonDetails = (pokemonDetails) => ({
  type: RECEIVE_POKEMON_DETAILS,
  pokemonDetails
});

export const requestPokemonDetails = (id) => (dispatch) => {
  return APIUtil.fetchPokemonDetails(id).then(pokemonDetails => dispatch(receivePokemonDetails(pokemonDetails)));
};


//where to apply thunk? neccesary?
