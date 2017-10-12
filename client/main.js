import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Tracker } from 'meteor/tracker';
import Signup from '../imports/ui/Signup';
import Link from '../imports/ui/Link';
import NotFound from '../imports/ui/NotFound';
import Login from '../imports/ui/Login';


const unauthenticatedPages = ['/', '/signup'];
const authenticatedPages = ['/link'];

const onEnterPublicPage = () => {
  if (Meteor.userId()) {
    browserHistory.replace('/link');
  }
};

const onEnterPrivatePage = () => {
  if (!Meteor.userId()) {
    browserHistory.replace('/');
  }
};

//router config
const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Login} onEnter={onEnterPublicPage}/>
    <Route path="/signup" component={Signup} onEnter={onEnterPublicPage}/>
    <Route path="/link" component={Link} onEnter={onEnterPrivatePage}/>
    <Route path="*" component={NotFound}/>
  </Router>
);


Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();


});


Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'));
});
