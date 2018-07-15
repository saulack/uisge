import React from 'react';


class PostIndexItem extends React.Component {
  componentDidMount() {
    this.props.fetchRegions();
  }

  render(){
    return (
      <div>
        <h1>{this.props.}</h1>
      </div>
    )
  }
}
