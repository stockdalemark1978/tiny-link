import React from 'react';
import { Accounts } from 'meteor/accounts-base';
import { Links } from '../api/links';


export default class Link extends React.Component {
  clickLogout () {
    Accounts.logout();
  }
  onSubmit(e){
    const url = this.refs.url.value.trim();
    e.preventDefault();

    if (url) {
      Links.insert({ url });
      this.refs.url.value = '';
    }

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
