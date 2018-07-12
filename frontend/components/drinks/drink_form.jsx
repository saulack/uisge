import React from 'react';

class DrinkForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {bottle_name: '', description: '', region_id: ''}

    // this.renderRegions = this.renderRegions.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }


  handleSubmit() {
    this.props.action(this.state);
  }

  handleChange(field) {
    return (e) => {
    this.setState({[field]: e.target.value})
    }
  }

// NOTE: render regions component from render once done

  render() {
    return (
      <div className="drink-form-parent">
        <form className="drink-form" onSubmit={this.handleSubmit}>
          <label> Bottle </label>
          <input
            className="form-text"
            onChange={this.handleChange('bottle_name')}
            type="text"
            value={this.state.value}
            placeholder="Bottle Name.." />


        <label> Description </label>
          <textarea className="form-text"
            onChange={this.handleChange('description')}
            value={this.state.description} placeholder="Describe this bottle..."
            rows="10"
            cols="60" />



          <input className="submit" type="submit" value={this.props.formType} />
        </form>
      </div>
    )
  }
}

export default DrinkForm;
