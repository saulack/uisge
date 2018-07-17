import { connect } from 'react-redux';
import PostIndex from './post_index'
import { fetchPosts, deletePost } from '../../actions/post_actions';
import { fetchRegions, fetchDrink, fetchDrinks } from '../../actions/drink_actions';


const mapStateToProps = (state) => {
  return {
    posts: Object.values(state.entities.posts),
    drinks: state.entities.drinks,
    users: state.entities.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchRegions: () => dispatch(fetchRegions()),
    fetchDrinks: () => dispatch(fetchDrinks()),
    fetchPosts: () => dispatch(fetchPosts()),
    fetchDrink: (id) => dispatch(fetchDrink(id)),
    deletePost: (id) => dispatch(deletePost(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);
