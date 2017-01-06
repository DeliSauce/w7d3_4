import {connect} from 'react-redux';
import { requestPokemonDetails } from '../../actions/pokemon_details_actions';
import PokemonDetail from './pokemon_detail';

const mapStateToProps = state => ({
  pokemonDetails: state.pokemonDetails
});

const mapDispatchToProps = (dispatch) => ({
  requestPokemonDetails: (id) => dispatch(requestPokemonDetails(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);
