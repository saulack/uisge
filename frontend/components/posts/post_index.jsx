import React from 'react';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {
  componentDidMount() {
    this.props.fetchPosts()
  }

  render() {
    const post = this.props.posts.map( post => {
      <PostIndexItem
        key={`post-${post.id}`}
        post={post}
        deletePosts={deletePost}
        fetchRegions={fetchRegions} />
    })

    return (
      <div>
        {post}
      </div>

    )
  }
}

export default PostIndex;
