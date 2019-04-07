import React, { Component } from 'react';
import Home from '../Home/Home';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Loocate from '../Loocate/Loocate';
import Loocation from '../Loocation/Loocation';
import Humor from '../Humor/Humor';
import Signup from '../Signup/Signup';
import Login from '../Login/Login';
import { Link, Route } from 'react-router-dom';

class App extends Component {
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
    return (
      // <div>
      <App />
      // </div>
    );
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
