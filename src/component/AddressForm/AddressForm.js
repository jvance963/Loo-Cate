import React, { Component } from 'react';
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
  CardImgOverlay,
  Button,
} from 'reactstrap';

class AddressForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      street: '',
      city: '',
      state: '',
      zipCode: '',
    };
    this.handleNameInput = this.handleNameInput.bind(this);
    this.handleStreetInput = this.handleStreetInput.bind(this);
    this.handleCityInput = this.handleCityInput.bind(this);
    this.handleStateInput = this.handleStateInput.bind(this);
    this.handleZipCodeInput = this.handleZipCodeInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleNameInput(e) {
    this.setState({
      name: e.target.value,
    });
  }
  handleStreetInput(e) {
    this.setState({
      street: e.target.value,
    });
  }
  handleCityInput(e) {
    this.setState({
      city: e.target.value,
    });
  }
  handleStateInput(e) {
    this.setState({
      state: e.target.value,
    });
  }
  handleZipCodeInput(e) {
    this.setState({
      zipCode: e.target.value,
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.street);
    const APIKey = 'AIzaSyAVTIzc3qTmxDnp_tKDkIG4lYa-lmOlbD0';
    const baseURL =
      'https://maps.googleapis.com/maps/api/geocode/json?address=';
    const streetString = this.state.street.split(' ').join('+');
    const City = this.state.city.trim();
    const State = this.state.state.trim();
    const ZipCode = this.state.zipCode.trim();
    const NewCall =
      baseURL +
      streetString +
      ',' +
      City +
      ',' +
      State +
      '' +
      ZipCode +
      '&key=' +
      APIKey;
    console.log(NewCall);
    this.props.geoCall(NewCall);
  }

  render() {
    return (
      <div>
        <Card inverse>
          <CardImg src={bathroom} alt='Card image cap' />
          <CardImgOverlay>
            <Container className='loocation-container'>
              <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                  <h2>Enter a Loocation</h2>
                  <Label for='exampleSelect'>Name of Loocation</Label>
                  <Col sm={10}>
                    <Input
                      type='name'
                      name='name'
                      id='examplename'
                      placeholder='Name of Location'
                      value={this.state.name}
                      onChange={this.handleNameInput}
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
                      value={this.state.street}
                      onChange={this.handleStreetInput}
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
                      value={this.state.city}
                      onChange={this.handleCityInput}
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
                      value={this.state.state}
                      onChange={this.handleStateInput}
                    />
                  </Col>
                </FormGroup>
                <FormGroup>
                  <Label for='examplePassword'>Zipcode</Label>
                  <Col md={10}>
                    <Input
                      type='zipcode'
                      name='zipcode'
                      id='text'
                      placeholder='20001'
                      value={this.state.zipCode}
                      onChange={this.handleZipCodeInput}
                    />
                  </Col>
                </FormGroup>
                <Button type='submit'>Submit</Button>
              </Form>
            </Container>
          </CardImgOverlay>
        </Card>
      </div>
    );
  }
}

export default AddressForm;
