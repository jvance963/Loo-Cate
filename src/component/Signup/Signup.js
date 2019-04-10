import React, { Component } from 'react';
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
import allGender from '../../Images/allgender.jpg';

class Signup extends Component {
  render() {
    return (
      this.props.isLoggedIn === false && (
        <div>
          <Card inverse>
            <CardImg src={allGender} alt='Card image cap' />
            <CardImgOverlay>
              <Container className='container'>
                <FormGroup>
                  <h2>SignUp</h2>
                  <Label for='exampleSelect'>Email</Label>
                  <Col sm={10}>
                    <Input
                      type='text'
                      name='email'
                      id='examplename'
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
                      id='password'
                      placeholder='**********'
                      onChange={this.props.handleInput}
                    />
                  </Col>
                </FormGroup>
                <Button onClick={this.props.handleSignUp}>SignUp</Button>
              </Container>
            </CardImgOverlay>
          </Card>
        </div>
      )
    );
  }
}

export default Signup;
