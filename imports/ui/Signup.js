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
//uses input ref values for creating user accounts in database
    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();

    if (password.length < 9) {
      return this.setState({error: 'Password must be more than 8 characters long'});
    }

    Accounts.createUser({email, password}, (err) => {
      if (err) {
        this.setState({error: err.reason})
      } else {
        this.setState({error: ''});
      }
    });

  }
  render() {
    return (
      <div>
        <h1>Signup to Tiny Link</h1>

        {this.state.error ? <p>{this.state.error}</p> : undefined}

        <form onSubmit={this.onSubmit.bind(this)} noValidate>
          <input type="email" ref="email" name="email" placeholder="Please enter a valid email address"/>
          <input type="password" ref="password" name="password" placeholder="Password"/>
          <button>Create Account</button>
        </form>

        <Link to="/">Already have an account? Login here.</Link>
      </div>
    )
  }
}
