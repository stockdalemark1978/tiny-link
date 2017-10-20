import React from 'react';
import { Accounts } from 'meteor/accounts-base';


export default class Link extends React.Component {
  clickLogout () {
    Accounts.logout();
  }
  onSubmit(e){
    e.preventDefault();
  }
  render () {
    return (
      <div>
        <h1>Your Links</h1>
        <button onClick={this.clickLogout.bind(this)}>Logout</button>
        <p>Add Link</p>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input type="text" ref="url" placeholder="URL"/>
          <button>Add Link</button>
        </form>
      </div>
    );

  }
}
