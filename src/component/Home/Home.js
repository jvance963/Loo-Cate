import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from 'reactstrap';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { Where: '' };
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
        <Container className='container'>
          <Form className='form'>
            <Col>
              <FormGroup>
                <h2>Sign In</h2>
                <Label>Email</Label>
                <Input
                  type='email'
                  name='email'
                  id='exampleEmail'
                  placeholder='myemail@email.com'
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for='examplePassword'>Password</Label>
                <Input
                  type='password'
                  name='password'
                  id='examplePassword'
                  placeholder='********'
                />
              </FormGroup>
            </Col>
            <Button>Submit</Button>
          </Form>
        </Container>
        ); } }
      </Router>
    );
  }
}

export default Home;
