import React from 'react';
import { Link } from 'react-router';

export default class Signup extends React.Component {
  render() {
    return (
      <div>
        <h1>Signup to Tiny Link</h1>

        <Link to="/">Already have an account? Login here.</Link>
      </div>
    )
  }
}
