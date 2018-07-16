import React from 'react';
// import PostIndex from './post_index'

class PostIndexItem extends React.Component {
  componentDidMount() {
    this.props.fetchRegions();
  }

  render(){
    return (
      <div>
        <li>
          <h1 className="test" >HELLO</h1>
        </li>

      </div>
    )
  }
}

export default PostIndexItem;
