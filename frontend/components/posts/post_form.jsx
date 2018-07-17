import React from 'react';
import { withRouter } from 'react-router-dom';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.post || {
      body: '',
      drink_id: this.props.match.params.drinkId,
      rating: 1,
      photoFile: null,
      photoUrl: null };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }


  handleChange(field) {
    return (e) => {
      debugger
      this.setState({[field]: e.target.value });
    }
  }


  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('post[body]', this.state.body);
    formData.append('post[rating]', this.state.rating);
    formData.append('post[drink_id]', this.state.drink_id)
    if (this.state.photoFile) {
      formData.append('post[photo]', this.state.photoFile);
    }
    this.props.action(formData).then(() => this.props.history.push('/posts'));
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


  render() {
const preview = this.state.photoUrl ? <img
    className="label-preview"
    src={this.state.photoUrl} /> : null;

    return (
      <div className="post-form-parent">
        <form className="post-form" onSubmit={this.handleSubmit}>

          <label className="post-label" >What did you think?</label>
          <textarea className="post-body"
            value={this.state.body}
            onChange={this.handleChange('body')}
            rows="10" cols="60" />

          <label className="post-label">Rate it!</label>
          <h3>{this.state.rating}</h3>
         <input  className="slider"
             onChange={this.handleChange('rating')}
             type="range"
             step="1"
             value={this.state.rating}
             min="1"
             max="100"
             />


           <input  className="form-text post-form-pic"
           onChange={this.handleFile}
           type="file"/>{preview}

          <input className="submit"
            type="submit"
            value={this.props.formType} />

        </form>
      </div>
    )
  }
}

export default withRouter(PostForm);
