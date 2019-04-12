import React, { Component } from 'react';
import { Card, CardImg } from 'reactstrap';
import City from '../../Images/city.jpg';

class Home extends Component {
  render() {
    return (
      <div>
        <Card inverse>
          <CardImg width='100%' src={City} height='660' alt='Card image cap' />
        </Card>
      </div>
    );
  }
}

export default Home;
