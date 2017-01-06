import {combineReducers} from 'redux';
import pokemonReducer from './pokemon_reducer';
import pokemonDetails from './pokemon_detail_reducer';
const rootReducer = combineReducers({
  pokemon: pokemonReducer,
  pokemonDetails: pokemonDetails
});

export default rootReducer;
