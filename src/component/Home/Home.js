import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Textarea from 'muicss/lib/react/textarea';
import Button from 'muicss/lib/react/button';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert(this.state.username);
    event.preventDefault();
  }

  render() {
    return (
      <Router>
        <div className='App'>
          <header className='App-header'>
            <div>
              <img src='' className='app-logo' alt='logo' />
              <ul>
                <Link className='header-link' to='/login'>
                  Drop in
                </Link>

                <Link className='header-link' to='/signup'>
                  Sign up
                </Link>

                <Link className='header-link' to='/help'>
                  Help
                </Link>

                <Link className='header-link' to='/looHumor'>
                  Loo Humor
                </Link>

                <Link className='header-link' to='/looCation'>
                  Loo-Cation
                </Link>

                <Link className='header-link' to='/looCator'>
                  Loo-Cator
                </Link>
              </ul>
            </div>
            {/* <Route exact path='/login' component={login} />
            <Route path='/signup' component={signup} />
            <Route path='/help' component={help} />
            <Route path='/looHumor' component={looHumor} />
            <Route path='/looCation' component={looCation} />
            <Route path='/looCator' component={looCator} /> */}
          </header>
        </div>
        <div className='card-body'>
          <div className='card-body' style={{ textAlign: 'center' }} />
          <form onSubmit={this.handleSubmit}>
            <input
              type='text'
              value={this.state.username}
              onChange={this.handleChange}
            />
            <input type='submit' value='Submit' />
          </form>
        </div>
        <Form>
          <legend>Title</legend>
          <Input placeholder='Input 1' />
          <Input placeholder='Input 2' />
          <Textarea placeholder='Textarea' />
          <Button variant='raised'>Submit</Button>
        </Form>
      </Router>
    );
  }
}

export default Home;
