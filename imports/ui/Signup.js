import React from 'react';
import { Link } from 'react-router';

import { Accounts } from 'meteor/accounts-base';

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ''
    };
  }
  onSubmit(e) {
    e.preventDefault();
    this.setState({
      error: "Incorrect Value"
    });
  }
  render() {
    return (
      <div>
        <h1>Signup to Tiny Link</h1>

        {this.state.error ? <p>{this.state.error}</p> : undefined}

        <form onSubmit={this.onSubmit.bind(this)}>
          <input type="email" name="email" placeholder="Please enter a valid email address"/>
          <input type="password" name="password" placeholder="Password"/>
          <button>Create Account</button>
        </form>

        <Link to="/">Already have an account? Login here.</Link>
      </div>
    )
  }
}
