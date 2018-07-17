import React from 'react';
import { connect } from 'react-redux';
import { fetchPost, updatePost } from '../../actions/post_actions';
import PostForm from './post_form';
import { withRouter } from 'react-router-dom';

class EditPostForm extends React.Component {
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.postId);
  }

  render() {
    return (
    <div>
      <PostForm
        action={this.props.action}
        errors={this.props.errors}
        formType={this.props.formType}
        post={this.props.post} />
    </div>
  )}
}

const mapStateToProps = (state, ownProps) => {
  debugger
  return {
    post: state.entities.posts[ownProps.match.params.postId],
    formType: 'Edit',
    errors: state.errors.posts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    action: (post) => dispatch(updatePost(post)),
    fetchPost: (id) => dispatch(fetchPost(id))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditPostForm));
