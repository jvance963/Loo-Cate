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
import { Link, Route } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      isLoggedIn: false,
    };

    this.inputChanger = this.inputChanger.bind(this);
    this.signupSubmit = this.signupSubmit.bind(this);
    this.loginSubmit = this.loginSubmit.bind(this);
    this.logoutSubmit = this.logoutSubmit.bind(this);
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
    }
  }

  render() {
    const App = () => (
      <div>
        <Header />
        <Route exact path='/' component={Home} />
        <Route path='/loocate' component={Loocate} />
        <Route path='/loocation' component={Loocation} />
        <Route path='/humor' component={Humor} />
        <Route path='/signup' component={Signup} />
        <Route path='/login' component={Login} />
        <Footer />
      </div>
    );
    return;
  }

  // render() {
  //   return (
  //     <div>
  //       <Header />
  //       <Switch>
  //         <Route path='/' component={Home} />
  //         <Route path='/loocate' component={Loocate} />
  //         <Route path='/loocation' component={Loocation} />
  //         <Route path='/humor' component={Humor} />
  //         <Route path='/signup' component={Signup} />
  //         <Route path='/login' component={Login} />
  //       </Switch>
  //       <Footer />
  //     </div>
  //   );
  // }
}

export default App;
