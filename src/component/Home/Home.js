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
import City from '../../Images/city.jpg';

class Home extends Component {
  render() {
    return (
      <div>
        <Card inverse>
          <CardImg width='100%' src={City} alt='Card image cap' />
          <CardImgOverlay>
            <Container className='container'>
              <FormGroup>
                <h2>Sign In</h2>
                <Label for='exampleSelect'>Email</Label>
                <Col sm={10}>
                  <Input
                    type='email'
                    name='email'
                    id='exampleEmail'
                    placeholder='myemail@email.com'
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
                  />
                </Col>
              </FormGroup>
              <Button>Submit</Button>
            </Container>
          </CardImgOverlay>
        </Card>
      </div>
    );
  }
}

export default Home;
