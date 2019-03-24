import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <header className='App-header'>
            <Link to='/'>Home</Link>

            <Link to='/about'>About</Link>

            <Link to='/topics'>Topics</Link>

            <hr />

            {/* <Route exact path='/' component={Home} />
            <Route path='/about' component={About} /> */}
            {/* <Route path='/topics' component={Topics} /> */}
            <img src='' className='App-logo1' alt='logo' />
            <img src='' className='App-logo2' alt='logo' />
          </header>
          <body className='body'>Something is here</body>
        </div>
      </Router>
    );
  }
}

export default App;
