import React from 'react';
import { Link } from 'react-router';
import { Meteor } from 'meteor/meteor';

export default class Login extends React.Component {
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

    Meteor.loginWithPassword({email}, password, (err) => {
      if (err) {
        this.setState({error: err.reason})
      } else {
        this.setState({error: ''});
      };
    });

  }
  render() {
    return (
      <div>
        <h1>Login to Tiny Link</h1>

        {this.state.error ? <p>{this.state.error}</p> : undefined}

        <form onSubmit={this.onSubmit.bind(this)}>
          <input type="email" ref="email" name="email" placeholder="Please enter a valid email address"/>
          <input type="password" ref="password" name="password" placeholder="Password"/>
          <button>Login</button>
        </form>


        <Link to="/signup">Don't have an account yet? Signup here.</Link>
      </div>
    );
  }
}
