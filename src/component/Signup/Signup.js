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
      <div>
        <Card inverse>
          <CardImg src={allGender} alt='Card image cap' />
          <CardImgOverlay>
            <Container className='container'>
              <FormGroup>
                <h2>Skip To Your Loo</h2>
                <Label for='exampleSelect'>Email</Label>
                <Col sm={10}>
                  <Input
                    type='name'
                    name='name'
                    id='examplename'
                    placeholder='myemail@email.com'
                  />
                </Col>
              </FormGroup>
              <FormGroup>
                <Label for='examplePassword'>Username</Label>
                <Col md={10}>
                  <Input
                    type='Street'
                    name='Street'
                    id='text'
                    placeholder='username'
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
                  />
                </Col>
              </FormGroup>
              <Button onClick={this.geoCall}>Submit</Button>
            </Container>
          </CardImgOverlay>
        </Card>
      </div>
    );
  }
}

export default Signup;
