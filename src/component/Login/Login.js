import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';
import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  CardImg,
  CardLink,
  CardText,
  CardImgOverlay,
  Button,
} from 'reactstrap';

import Sign from '../../Images/sign.jpg';
import './Login.css';

class Login extends Component {
  // constructor() {
  //   super();
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  // handleSubmit(event) {
  //   event.preventDefault();
  //   const data = new FormData(event.target);
  // }

  // redirect() {
  //   return <Redirect to='/' />;
  // }
  render() {
    return (
      <Card inverse>
        <CardImg width='100%' src={Sign} height='750' alt='Card image cap' />
        <CardImgOverlay>
          <Container className='container'>
            <FormGroup>
              <h2>Drop In</h2>
              <Label for='exampleSelect'>Email</Label>
              <Col sm={10}>
                <Input
                  type='email'
                  name='email'
                  id='exampleEmail'
                  placeholder='myemail@email.com'
                  onChange={this.props.handleInput}
                />
              </Col>
            </FormGroup>
            <FormGroup>
              <Label for='examplePassword'>Password</Label>
              <Col md={10}>
                <Input
                  type='password'
                  name='password'
                  id='examplePassword'
                  placeholder='********'
                  onChange={this.props.handleInput}
                />
              </Col>
            </FormGroup>
            <Button onClick={this.props.handleLogIn}>Submit</Button>
          </Container>
        </CardImgOverlay>
      </Card>
    );
  }
}

export default Login;
