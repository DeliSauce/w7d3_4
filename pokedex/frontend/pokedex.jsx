import React from 'react';
import ReactDOM from 'react-dom';
import {fetchAllPokemon, fetchPokemonDetails} from './util/api_util.js';
import {receiveAllPokemon, requestAllPokemon} from './actions/pokemon_actions';
import configureStore from './store/store';
import { selectAllPokemon } from './reducers/selector';
import Root from './components/root';
import { requestPokemonDetails } from './actions/pokemon_details_actions';


document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.store = store;
  window.fetchAllPokemon = fetchAllPokemon;
  window.receiveAllPokemon = receiveAllPokemon;
  window.requestAllPokemon = requestAllPokemon;
  window.selectAllPokemon = selectAllPokemon;
  window.fetchPokemonDetails = fetchPokemonDetails;
  window.requestPokemonDetails = requestPokemonDetails;
  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, rootEl);
});
