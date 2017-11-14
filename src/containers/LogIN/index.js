import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { loginUser } from '../../actions/auth.actions';
import { loadUsers } from '../../actions/users.actions';
//import ErrorBoundary from '../../containers/ErrorBoundary';
import Nav from '../../components/nav.components';
import Footer from '../../components/footer.components';
// import {
//   BrowserRouter as Router,
//   Link,
//   Route
// } from 'react-router-dom';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      username : '',
      password : '',
      redirect : false // set initial state to false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsernameInput = this.handleUsernameInput.bind(this);
    this.handlePasswordInput = this.handlePasswordInput.bind(this);

  }


  handleSubmit(evt) {
    //on success do this:
    evt.preventDefault();
    let loginCreds = {
      username : this.state.username,
      password : this.state.password
    }
    this.props.loginUser(loginCreds);
    this.setState(
    {
      username : '',
      password : '',
      redirect : true
    })

  }

  handleUsernameInput(evt) {
    this.setState(
    {
      username : evt.target.value
    })
  }

  handlePasswordInput(evt) {
    this.setState(
    {
      password : evt.target.value
    })
  }

  render(){
    if(this.state.redirect) {
      return <Redirect to="/"/>
    }

    // if (this.state.username.length === 0 || this.state.password === undefined) {
    //   return (
    //     <div className="form-warning">
    //       <p>Oh junk~ You left out some login Credentials!</p>
    //         <Link to="/login"><button>Click here to go back</button></Link>
    //     </div>
    //   );

    // }
    // else if (this.state.redirect) {
    //   return <Redirect to="/" />
    // }

    return(
      <div id="login-container">
        <Nav />
        <h2>Login</h2>
        <div><center>.: welcome back :.</center></div>
        <br/>
        <div className="login-form">
          <form onSubmit={this.handleSubmit.bind(this)}>
            username
            <br/>
            <div>
            <input
              type="text"
              placeholder="username"
              defaultValue={this.state.username}
              onChange={this.handleUsernameInput} />
            </div>
            <br/>
            password
            <br/>
            <div>
            <input
              type="password"
              placeholder="password"
              defaultValue={this.state.password}
              onChange={this.handlePasswordInput} />
            </div>
            <br/>
            <button
              className="login-btn"
              type="submit"
              onClick={this.handleSubmit}>Login
            </button>
          </form>
        </div>
        <br/>
        <Footer/>
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

//maps store dispatch to local props
const mapDispatchToProps = (dispatch) => {
  return{
    loginUser: (loginCreds) => {
      dispatch(loginUser(loginCreds));
    },

    loadUsers: () => {
      dispatch(loadUsers());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);