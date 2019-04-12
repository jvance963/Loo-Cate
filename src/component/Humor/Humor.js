import React, { Component } from 'react';
import Bathroom from '../../Images/funny.png';
import {
  Container,
  Col,
  FormGroup,
  Label,
  Input,
  Card,
  CardImg,
  CardImgOverlay,
  Button,
} from 'reactstrap';

class Humor extends Component {
  render() {
    return (
      <div>
        <Card inverse>
          <CardImg width='100%' src={Bathroom} alt='Card image cap' />
          <CardImgOverlay>
            <Container className='container'>
              <FormGroup>
                <Label for='exampleSelect' />
                <Col sm={10}>
                  <Input
                    type='email'
                    name='email'
                    id='exampleEmail'
                    placeholder='Title of Post'
                  />
                </Col>
              </FormGroup>
              <FormGroup>
                <Label for='examplePassword' />
                <Col md={10}>
                  <Input
                    type='password'
                    name='password'
                    id='examplePassword'
                    placeholder='Something Funny'
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

export default Humor;
