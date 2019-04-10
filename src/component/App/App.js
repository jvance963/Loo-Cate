import React, { Component } from 'react';
import Home from '../Home/Home';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Loocate from '../Loocate/Loocate';
import Loocation from '../Loocation/Loocation';
import Humor from '../Humor/Humor';
import Signup from '../Signup/Signup';
import Login from '../Login/Login';
import axios from 'axios';
import serverUrl from '../constants';
import { Link, Route, Switch } from 'react-router-dom';

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

  inputChanger(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  signupSubmit(e) {
    e.preventDefault();
    axios
      .post(serverUrl + '/users/signup', {
        email: this.state.email,
        password: this.state.password,
      })
      .then(res => {
        localStorage.token = res.data.token;
        this.setState({ isLoggedIn: true });
      })
      .catch(err => console.log(err));
  }

  loginSubmit(e) {
    e.preventDefault();
    axios
      .post(serverUrl + '/users/login', {
        email: this.state.email,
        password: this.state.password,
      })
      .then(res => {
        localStorage.token = res.data.token;

        this.setState({
          isLoggedIn: true,
        });
      })
      .catch(err => console.log(err));
  }

  logoutSubmit() {
    this.setState({
      email: '',
      password: '',
      isLoggedIn: false,
    });
    localStorage.clear();
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
      .post(serverUrl + '/users/signup', {
        email: this.state.email,
        password: this.state.password,
      })
      .then(response => {
        localStorage.token = response.data.token;
        this.setState({ isLoggedIn: true });
        this.props.history.push('/');
      })
      .catch(err => console.log(err));
  }

  handleLogOut() {
    this.setState({
      email: '',
      password: '',
      isLoggedIn: false,
    });
    localStorage.clear();
    this.props.history.push('/users/login');
  }

  handleLogIn(e) {
    e.preventDefault();
    axios
      .post(serverUrl + '/users/login', {
        email: this.state.email,
        password: this.state.password,
      })
      .then(response => {
        localStorage.token = response.data.token;
        this.setState({ isLoggedIn: true });
        this.props.history.push('/');
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <Header
          isLoggedIn={this.state.isLoggedIn}
          handleLogOut={this.handleLogOut}
        />
        <Route
          exact
          path='/'
          render={props => (
            <Home {...props} isLoggedIn={this.state.isLoggedIn} />
          )}
        />
        <Route
          path='/loocate'
          render={props => (
            <Loocate {...props} isLoggedIn={this.state.isLoggedIn} />
          )}
        />
        <Route
          path='/loocation'
          crender={props => (
            <Loocation {...props} isLoggedIn={this.state.isLoggedIn} />
          )}
        />
        <Route
          path='/humor'
          render={props => (
            <Humor {...props} isLoggedIn={this.state.isLoggedIn} />
          )}
        />
        <Route
          path='/signup'
          render={props => {
            return (
              <Signup
                {...props}
                isLoggedIn={this.state.isLoggedIn}
                handleInput={this.handleInput}
                handleSignUp={this.handleSignUp}
              />
            );
          }}
        />
        <Route
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
        <Footer />
      </div>
    );
    return <App />;
  }
}

export default App;
