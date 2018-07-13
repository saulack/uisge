import React from 'react';

class DrinkForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {bottle_name: '',
      description: '',
      region_id: '',
      photoFile: null,
      photoUrl: null}

    this.renderRegions = this.renderRegions.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  componentDidMount() {
    this.props.fetchRegions();
  }



  handleChange(form) {
    return (e) => {
    this.setState({[form]: e.target.value})
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('drink[bottle_name]', this.state.bottle_name);
    if (this.state.photoFile) {

      formData.append('drink[photo]', this.state.photoFile);
    }
    this.props.action(this.state)

  }


  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {

      this.setState({photoFile: file, photoUrl: fileReader.result});
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }

  }

  renderRegions() {
    if (this.props.regions) {
    return this.props.regions.map(region => {
      return (<option
        className="form-text"
        key={`region-${region.id}`}
        value={region.id}>{region.region}</option>
      )}
    )}
  }

  handleErrors() {
    return(
      <ul className="errors">
        {this.props.errors.map((error, i) => (
          <li key={`err_key${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }


  render() {
    const preview = this.state.photoUrl ? <img className="label-preview" src={this.state.photoUrl} /> : null;
    return (

      <div className="drink-form-parent">
        <form className="drink-form" onSubmit={this.handleSubmit}>
          {this.handleErrors()}


          <label className="bottle-edit-labels" >Region</label>
          <select className="drop-bar" placeholder="Select a region">
            <option value="" >Select a region...</option>
            {this.renderRegions()}
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

          <label className="bottle-edit-labels">Add a bottle label</label>
          <input className="form-text"
            onChange={this.handleFile}
            type="file"/>{preview}



          <input className="submit" type="submit" value={this.props.formType} />
        </form>
      </div>
    )
  }
}

export default DrinkForm;
