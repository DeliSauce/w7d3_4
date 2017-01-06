import {connect} from 'react-redux';
import ItemDetail from './item_detail';

const mapStateToProps = (state) => ({
  items: state.pokemonDetails.items
});

export default connect(mapStateToProps)(ItemDetail);
