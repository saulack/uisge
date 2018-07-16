import React from 'react';
import PostIndexItem from './post_index_item';


class PostIndex extends React.Component {
  componentDidMount() {
    this.props.fetchPosts()
    debugger
  }

  render() {
    const postItem = this.props.posts.map( post => {
      return <PostIndexItem
        key={`post-${post.id}`}
        post={post}
        deletePost={this.props.deletePost}
        drinks={this.props.drinks}
        users={this.props.users}
        fetchRegions={this.props.fetchRegions}
        fetchDrink={this.props.fetchDrink} />;
    })

    return (
      <div className="all-posts-parent">
        <ul className="all-posts">
          {postItem}
        </ul>

      </div>

    )
  }
}

export default PostIndex;
