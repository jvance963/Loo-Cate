import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Home from '../Home/Home';
import Header from '../Header/Header';
import Loocate from '../Loocate/Loocate';
import Loocation from '../Loocation/Loocation';
import Humor from '../Humor/Humor';
import Signup from '../Signup/Signup';
import Login from '../Login/Login';
import LogOut from '../Logout/Logout';
import axios from 'axios';
// import serverUrl from '../constants';
import { Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isLoggedIn: false,
    };
    this.handleLogOut = this.handleLogOut.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleLogIn = this.handleLogIn.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  componentDidMount() {
    if (localStorage.token) {
      this.setState({
        isLoggedIn: true,
      });
    } else {
      this.setState({
        isLoggedIn: false,
      });
    }
  }
  handleInput(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSignUp(e) {
    e.preventDefault();
    axios
      .post('http://localhost:3001/users/signup', {
        email: this.state.email,
        password: this.state.password,
      })
      .then(response => {
        localStorage.token = response.data.token;
        this.setState({ isLoggedIn: true });
        console.log('User has signed up');
        this.props.history.push('/loocation');
      })
      .catch(err => console.log(err));
  }

  handleLogOut(e) {
    e.preventDefault();
    this.setState({
      email: '',
      password: '',
      isLoggedIn: false,
    });
    localStorage.clear();
    console.log('User has been logged out');
    this.props.history.push('/login');
  }

  handleLogIn(e) {
    e.preventDefault();
    axios
      .post('http://localhost:3001/users/login', {
        email: this.state.email,
        password: this.state.password,
      })
      .then(response => {
        localStorage.token = response.data.token;
        this.setState({ isLoggedIn: true });
        console.log('User is logged in');
        this.props.history.push('/loocation');
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <Header />
        <Route
          exact
          path='/'
          render={props => (
            <Home
              {...props}
              isLoggedIn={this.state.isLoggedIn}
              handleSignUp={this.handleSignUp}
              handleLogOut={this.handleLogOut}
            />
          )}
        />
        <Route
          exact
          path='/loocate'
          render={props => (
            <Loocate {...props} isLoggedIn={this.state.isLoggedIn} />
          )}
        />
        <Route exact path='/loocation' component={Loocation} />

        <Route
          exact
          path='/humor'
          render={props => (
            <Humor {...props} isLoggedIn={this.state.isLoggedIn} />
          )}
        />

        <Route
          exact
          path='/signup'
          render={props => {
            return (
              <Signup
                {...props}
                isLoggedIn={this.state.isLoggedIn}
                handleInput={this.handleInput}
                handleSignUp={this.handleSignUp}
                handleLogOut={this.handleLogOut}
              />
            );
          }}
        />
        <Route
          exact
          path='/logout'
          render={props => {
            return (
              <LogOut
                {...props}
                isLoggedIn={this.state.isLoggedIn}
                handleLogOut={this.handleLogOut}
              />
            );
          }}
        />
        <Route
          exact
          path='/login'
          render={props => {
            return (
              <Login
                {...props}
                isLoggedIn={this.state.isLoggedIn}
                handleInput={this.handleInput}
                handleLogIn={this.handleLogIn}
              />
            );
          }}
        />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default withRouter(App);
