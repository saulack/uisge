import React from 'react';

class PostIndexItem extends React.Component {
  constructor(props){
    super(props);

    this.getDrinkVals = this.getDrinkVals.bind(this)
  }


  componentDidMount() {
    this.props.fetchRegions();
  }

  getDrinkVals() {
    this.props.drinks.map( drink => {
      if (this.props.post.drink_id === drink.id)
        return drink;
    })
  }


  render(){

    return (
      <div>
        <li>
          <h1>Hello</h1>
          <h3>{this.getDrinkVals().bottle_name}</h3>
        </li>
      </div>
    )
  }
}

export default PostIndexItem;
