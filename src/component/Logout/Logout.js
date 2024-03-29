import React, { Component } from 'react';

class LogOut extends Component {
  render() {
    return (
      this.props.isLoggedIn === true && (
        <div className='card m-5'>
          <div className='card-body'>
            <form>
              <button
                className='btn btn-warning'
                type='submit'
                onClick={this.props.handleLogOut}>
                <h2>Log Out</h2>
              </button>
            </form>
          </div>
        </div>
      )
    );
  }
}

export default LogOut;
