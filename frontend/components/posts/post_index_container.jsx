import { connect } from 'react-redux';
import PostIndex from './post_index'
import { fetchPosts, deletePost } from '../../actions/post_actions';
import { fetchRegions, fetchDrink, fetchDrinks } from '../../actions/drink_actions';
import { withRouter } from 'react-router-dom'

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
    fetchPosts: () => dispatch(fetchPosts()),
    fetchDrink: (id) => dispatch(fetchDrink(id)),
    deletePost: (id) => dispatch(deletePost(id))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostIndex));
