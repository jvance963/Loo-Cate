import React, { Component } from 'react';
import axios from 'axios';
import bathroom from '../../Images/bathroom.jpg';
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

const geoMap =
  'https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,MountainView,CA&key=AIzaSyAVTIzc3qTmxDnp_tKDkIG4lYa-lmOlbD0 ';

class Loocation extends Component {
  geoCall = () => {
    axios.get(geoMap).then(response => {
      console.log(response);
      // let newLoocation = response.data.bpi[loocation].map;
      // this.props.setLoocation(newLoocation);
    });
  };
  render() {
    return (
      <div>
        <Card inverse>
          <CardImg width='100%' src={bathroom} alt='Card image cap' />
          <CardImgOverlay>
            <Container className='container'>
              <FormGroup>
                <h2>Enter a Loocation</h2>
                <Label for='exampleSelect'>Name of Loocation</Label>
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
                <Label for='examplePassword'>Street</Label>
                <Col md={10}>
                  <Input
                    type='password'
                    name='password'
                    id='examplePassword'
                    placeholder='********'
                  />
                </Col>
              </FormGroup>
              <FormGroup>
                <Label for='examplePassword'>City</Label>
                <Col md={10}>
                  <Input
                    type='password'
                    name='password'
                    id='examplePassword'
                    placeholder='********'
                  />
                </Col>
              </FormGroup>
              <FormGroup>
                <Label for='examplePassword'>State/Province</Label>
                <Col md={10}>
                  <Input
                    type='password'
                    name='password'
                    id='examplePassword'
                    placeholder='********'
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

export default Loocation;
