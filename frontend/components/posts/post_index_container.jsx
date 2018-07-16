import { connect } from 'react-redux';
import PostIndex from './post_index'
import { fetchPosts, deletePost } from '../../actions/post_actions';
import { fetchRegions, fetchDrink } from '../../actions/drink_actions';


const mapStateToProps = (state) => {
  return {
    posts: Object.values(state.entities.posts),
    drinks: state.entities.drinks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    fetchDrink: (id) => dispatch(fetchDrink(id)),
    deletePost: (id) => dispatch(deletePost(id)),
    fetchRegions: () => dispatch(fetchRegions())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);
