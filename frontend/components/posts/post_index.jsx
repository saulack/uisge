import React from 'react';
import PostIndexItem from './post_index_item';
import DrinksIndexContainer from '../drinks/drinks_index_container'

class PostIndex extends React.Component {
  componentDidMount() {
    this.props.fetchPosts()
  }

  render() {
    debugger
    const postItem = this.props.posts.map( post => {
      <PostIndexItem
        key={`post-${post.id}`}
        post={postItem}
        deletePosts={deletePost}
        fetchRegions={fetchRegions} />;
    })

    return (
      <div>
        <ul className="test">
          {postItem}
        </ul>
        <DrinksIndexContainer />
      </div>

    )
  }
}

export default PostIndex;
