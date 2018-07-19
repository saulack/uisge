import React from 'react';


class UserProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.user;

    this.handleFile = this.handleFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

componentDidMount() {
  this.props.fetchUser(this.props.match.params.userId);
}


  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    let formUrl;
    if (this.props.formType === 'picture') {
      formUrl = 'pictureUrl';
      formData.append('user[picture]', this.state.pictureFile);
    } else {
      formData.append('user[mural]', this.state.muralFile);
    }
    this.props.updateUser(formData, this.state.id).
    then(() => this.props.history.push(`/users/${this.props.user.id}`));
  }



  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
    let formFile;
    if (this.props.formType === 'picture') {
        this.setState({pictureFile: file, pictureUrl: fileReader.result});
      } else {
        this.setState({muralFile: file, muralUrl: fileReader.result});
      }
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }

  }


  render() {
    let formUrl;
    let preview;
    if (this.props.formType === 'picture') {
      formUrl = this.state.pictureUrl
       preview = formUrl ? <img
      className="profile-pic"
      src={formUrl} /> : null;
    } else {
      formUrl = this.state.muralUrl
       preview = formUrl ? <img
      className="mural-pic"
      src={formUrl} /> : null;
    }


    return (
      <div>


        <form className="change-pic-parent" onSubmit={this.handleSubmit}>

          {preview}

          <input  className="browse"
          onChange={this.handleFile}
          type="file"/>

          <input className="submit"
            type="submit"
            value="Select Photo" />

        </form>


      </div>
    )
  }



}


export default UserProfileForm;
