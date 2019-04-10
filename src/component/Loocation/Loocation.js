import React, { Component } from 'react';
import axios from 'axios';
import bathroom from '../../Images/bathroom.jpg';
import '../Loocation/Loocation.js';
import serverUrl from '../constants';
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
  'https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,MountainView,CA&key=AIzaSyAVTIzc3qTmxDnp_tKDkIG4lYa-lmOlbD0';

class Loocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      street: '',
      city: '',
      state: '',
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleLoocation = this.handleLoocation.bind(this);
    this.editLoocation = this.editLoocation.bind(this);
    this.deleteLoocation = this.deleteLoocation.bind(this);
    this.getLoocation = this.getLoocation.bind(this);
  }
  componentDidMount() {
    fetch(serverUrl + `loocation/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(res => {
        this.setState({ name: res.name });
        this.setState({ street: res.street });
        this.setState({ city: res.city });
        this.setState({ state: res.state });
      });
  }
  getBathroom() {
    fetch(serverUrl + `loocation/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(res => {
        this.setState({ bathroom: res });
      });
  }

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
          <CardImg src={bathroom} alt='Card image cap' />
          <CardImgOverlay>
            <Container className='loocation-container'>
              <FormGroup>
                <h2>Enter a Loocation</h2>
                <Label for='exampleSelect'>Name of Loocation</Label>
                <Col sm={10}>
                  <Input
                    type='name'
                    name='name'
                    id='examplename'
                    placeholder='myemail@email.com'
                    onChange={this.props.handleInput}
                  />
                </Col>
              </FormGroup>
              <FormGroup>
                <Label for='examplePassword'>Street</Label>
                <Col md={10}>
                  <Input
                    type='Street'
                    name='Street'
                    id='text'
                    placeholder='1133 15th St'
                    onChange={this.props.handleInput}
                  />
                </Col>
              </FormGroup>
              <FormGroup>
                <Label for='examplePassword'>City</Label>
                <Col md={10}>
                  <Input
                    type='City'
                    name='City'
                    id='text'
                    placeholder='Northwest'
                    onChange={this.props.handleInput}
                  />
                </Col>
              </FormGroup>
              <FormGroup>
                <Label for='examplePassword'>State/Province</Label>
                <Col md={10}>
                  <Input
                    type='state'
                    name='state'
                    id='text'
                    placeholder='Washington D.C.'
                    onChange={this.props.handleInput}
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
