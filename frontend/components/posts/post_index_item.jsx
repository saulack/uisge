import React from 'react';


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
