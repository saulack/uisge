import React from 'react';

class DrinkForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {bottle_name: '', description: '', region_id: ''}

    this.renderRegions = this.renderRegions.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.fetchRegions();

  }

  handleSubmit() {
    this.props.action(this.state);
  }

  handleChange(field) {
    return (e) => {
    this.setState({[field]: e.target.value})
    }
  }

  renderRegions() {
    if (this.props.regions) {
    this.props.regions.map(region => {
      return (<option
        className="form-text"
        key={`region-${id}`}
        value={region.id}>{region.region}</option>
      )}
    )}
  }


  render() {
    return (

      <div className="drink-form-parent">
        <form className="drink-form" onSubmit={this.handleSubmit}>

          <label className="bottle-edit-labels" >Region</label>
          <select className="drop-bar" placeholder="Select a region">
            {this.renderRegions()}
            <option value="" >Select a region</option>
        </select>

          <label className="bottle-edit-labels"> Bottle </label>
          <input
            className="form-text"
            onChange={this.handleChange('bottle_name')}
            type="text"
            value={this.state.value}
            placeholder=" Bottle Name.." />



        <label className="bottle-edit-labels"> Description </label>
          <textarea className="form-text"
            onChange={this.handleChange('description')}
            value={this.state.description} placeholder=" Describe this bottle..."
            rows="10"
            cols="60" />



          <input className="submit" type="submit" value={this.props.formType} />
        </form>
      </div>
    )
  }
}

export default DrinkForm;
