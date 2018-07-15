import { connect } from 'react-redux';
import PostIndex from './post_index'

const mapStateToProps = (state) => {
  return {
    posts: Object.values(state.posts)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: () => dispatch(fetchPosts())
    fetchDrins: () => dispatch(fetchDrins())
    deletePosts: (id) => dispatch(deletePosts())
    fetchRegions: () => dispatch(fetchRegions())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);
