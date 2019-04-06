import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div>
        <section>
          <div class='footerContainer'>
            <div class='connect'>
              <h4>Connect</h4>
              <ul />
            </div>
            <div>
              <h4>Stay in touch</h4>
              <ul>
                <li>Contact Us</li>
                <li>Subscribe to mailing list</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Footer;
