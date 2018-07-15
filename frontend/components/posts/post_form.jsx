import React from 'react';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.post || {body: '',
      drink_id: 'null',
      rating: 'null',
      photoFile: null,
      photoUrl: null };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){

  }

  handleChange(field) {
    return (e) => {
      this.setState({[field]: e.target.value });
    }
  }

  handleSubmit() {

  }


  render() {
const preview = this.state.photoUrl ? <img
                className="label-preview"
                src={this.state.photoUrl} /> : null;

    return (
      <div className="post-form-parent">
        <form className="post-form" onSubmit={this.handleSubmit}>


          <textarea className="post-body"
            rows="10"
            cols="60"
            onChange={this.handleChange('body')}/>

         <input className="slider"
             onChange={this.handleChange}
             type="range" min="1" max="100"
             value={this.state.rating}/>

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

export default PostForm;
