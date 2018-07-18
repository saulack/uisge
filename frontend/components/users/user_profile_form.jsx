import React from 'react';


class UserProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.user;

    this.handleFile = this.handleFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

componentDidMount() {
  this.props.fetchUser(this.props.user.id);
}

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    let formUrl;
    let opposite;
    if (this.props.formType === 'picture') {
      formUrl = 'pictureUrl';
      opposite = 'muralUrl';
    } else {
      formUrl = 'muralUrl';
      opposite = 'pictureUrl';
    }
    formData.append(`user[${formUrl}]`, this.state.body);
    formData.append(`user[${opposite}]`, this.state.body);
    formData.append(`user[username]`, this.state.body);
    formData.append(`user[password]`, this.state.body);
    formData.append(`user[email]`, this.state.body);
    this.props.updateUser(formData, this.state.id).then(() => this.props.history.push(`/users/${this.props.user.id}`));
  }



  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
    let formFile;
    if (this.props.formType === 'picture') {
      formFile = 'pictureFile'
    } else {
      formFile = 'muralFile'
    }
      this.setState({[formFile]: file, photoUrl: fileReader.result});
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }

  }


  render() {
    let formUrl;
    if (this.props.formType === 'picture') {
      formUrl = 'pictureUrl'
    } else {
      formUrl = 'muralUrl'
    }

    const preview = this.state.photoUrl ? <img
        className="user-profile-piscture-edit"
        src={this.state.formUrl} /> : null;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input  className="user-profile-picture-edit-form"
          onChange={this.handleFile}
          type="file"/>{preview}

          <input className="submit"
            type="submit"
            value="Select Photo" />

        </form>


      </div>
    )
  }



}


export default UserProfileForm;
