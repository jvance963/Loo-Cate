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
          <CardImg width='100%' src={City} height='650' alt='Card image cap' />
        </Card>
      </div>
    );
  }
}

export default Home;
