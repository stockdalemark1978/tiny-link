import React from 'react';
import { Link } from 'react-router';

export default class Login extends React.Component {
  render() {
    return (
      <div>
        <h1>Login to Tiny Link</h1>

        <Link to="/signup">Don't have an account yet? Signup here.</Link>
      </div>
    );
  }
}
