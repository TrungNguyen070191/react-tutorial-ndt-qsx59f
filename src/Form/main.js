import React from 'react';
import '../style.scss';

export default class MainFormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      description: '',
      gender: 'female',
      language: 'en',
      status: false,
    };

    this.onHandleChange = this.onHandleChange.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
  }

  validate = () => {
    console.log('Validate:', this.refs);
    if (
      this.state.username == '' &&
      this.state.password == '' &&
      this.state.description == ''
    ) {
      return false;
    }
    return true;
  };

  submit = () => {
    console.log('RUN');
    if (this.validate()) {
      console.log('DATA:', this.state);
    } else {
      alert('Ban chua nhap du thong tin');
    }
  };

  reset = (event) => {
    event.preventDefault();
    this.setState({
      username: '',
      password: '',
      description: '',
      gender: 'female',
      language: 'vietnamese',
      status: false,
    });
  };

  onHandleChange(event) {
    var name = event.target.name;
    var value =
      event.target.type != 'checkbox'
        ? event.target.value
        : event.target.checked;
    this.setState({
      [name]: value,
    });
  }

  onHandleSubmit(event) {
    event.preventDefault();
    console.log('STATE:', this.state);
  }

  render() {
    return (
      <div className="form">
        <h1>Register Form</h1>
        <form onSubmit={this.onHandleSubmit}>
          <div className="section">
            <label>*Username:</label>
            <input
              name="username"
              type="text"
              className="form-control"
              onChange={this.onHandleChange}
              value={this.state.username}
            />
          </div>

          <div className="section">
            <label>*Password:</label>
            <input
              name="password"
              type="password"
              className="form-control"
              value={this.state.password}
              onChange={this.onHandleChange}
            />
          </div>

          <div className="section">
            <label>*Description:</label>
            <textarea
              name="description"
              className="form-control"
              value={this.state.description}
              onChange={this.onHandleChange}
            />
          </div>

          <div className="section">
            <label>Gender:</label>
            <select
              name="gender"
              className="form-control"
              value={this.state.gender}
              onChange={this.onHandleChange}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div className="section">
            <label>Language:</label>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="language"
                onChange={this.onHandleChange}
                checked={this.state.language == 'en'}
                value="en"
              />
              <label class="form-check-label" for="language">
                English
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="language"
                onChange={this.onHandleChange}
                checked={this.state.language == 'vi'}
                value="en"
              />
              <label class="form-check-label" for="language">
                Vietnamese
              </label>
            </div>
            <div class="form-check">
              <input
                name="status"
                class="form-check-input"
                type="checkbox"
                checked={this.state.status}
                onChange={this.onHandleChange}
              />
              <label class="form-check-label" for="status">
                Active Status
              </label>
            </div>
          </div>

          <div className="">
            <button
              type="submit"
              onClick={this.onHandleSubmit}
              className="btn btn-primary"
            >
              Save
            </button>
            <button
              className="btn btn-warning"
              type="buton"
              onClick={this.reset}
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    );
  }
}
