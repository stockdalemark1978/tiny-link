import React from 'react';
import { Link } from 'react-router';

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ''
    };
  }
  render() {
    return (
      <div>
        <h1>Signup to Tiny Link</h1>
        <form>
          <input type="email" name="email" placeholder="Please enter a valid email address"/>
          <input type="password" name="password" placeholder="Password"/>
          <button>Create Account</button>
        </form>

        <Link to="/">Already have an account? Login here.</Link>
      </div>
    )
  }
}
