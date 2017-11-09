import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { registerUser } from '../../actions/auth.actions';
import { loadUsers } from '../../actions/users.actions';

class Auth extends Component {
  constructor(props) {
    super(props);
    console.log(props, "PROPS")
    this.state = {
      username : '',
      password : ''
    };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  verifyUsername(newUsername) {
    return newUsername.some(user => {
      return user.username === newUsername;
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    let registerCreds = {
      username : this.state.username,
      password : this.state.password
    }
    console.log(registerCreds);
    this.props.registerUser(registerCreds);

    this.setState({
      username : '',
      password : ''
    }
    );
  }

  handleUsernameChange(event) {

    this.setState({
      username: event.target.value
    });
  }

  handlePasswordChange(event) {

    this.setState({
      password: event.target.value
    })
  }

  componentDidMount() {
    this.props.loadUsers();
    //this.state.users
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
          <input type="text" placeholder="username" defaultValue={this.state.username} onChange={this.handleUsernameChange}/>
          </div>
          <div>
          <input type="password" placeholder="password" defaultValue={this.state.password} onChange={this.handlePasswordChange}/>
          </div>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}

// maps store state to local props
const mapStateToProps = (state) => {
  return {
    users : state.userList
  };
};

// maps store dispatch to local props
const mapDispatchToProps = (dispatch) => {
  return {
    registerUser: (registerCreds) => {
      dispatch(registerUser(registerCreds));
    },

    loadUsers: () => {
      dispatch(loadUsers());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);