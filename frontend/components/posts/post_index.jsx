import React from 'react';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const revPosts = this.props.posts.reverse()
    const postItem = revPosts.map( post => {
      return <PostIndexItem
        key={`post-${post.id}`}
        post={post}
        deletePost={this.props.deletePost}
        drinks={this.props.drinks}
        users={this.props.users}
        fetchRegions={this.props.fetchRegions}
        fetchDrink={this.props.fetchDrink}
        currentUserId={this.props.currentUserId} />;
    })

    return (
        <ul className="all-posts">
          {postItem}
        </ul>
    )
  }
}

export default PostIndex;
