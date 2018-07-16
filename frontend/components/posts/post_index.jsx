import React from 'react';
import PostIndexItem from './post_index_item';


class PostIndex extends React.Component {
  componentDidMount() {
    this.props.fetchPosts()
  }

  render() {
    const postItem = this.props.posts.map( post => {
      return <PostIndexItem
        key={`post-${post.id}`}
        post={post}
        deletePost={this.props.deletePost}
        fetchRegions={this.props.fetchRegions}
        drinks={this.props.drinks} />;
    })

    return (
      <div>
        <ul>
          {postItem}
        </ul>

      </div>

    )
  }
}

export default PostIndex;
