import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux'
import FamilyForm from './containerComponents/NewMember';
import Login from './containerComponents/Login';
import NewUserForm from './containerComponents/NewUserForm';
import MemberCards from './containerComponents/MemberCards'
import {NavBar} from './presentationalComponents/NavBar';

const App = (props) => {

  return (
    <div>
      <Router>
        <div>
          {props.user.loggedIn && <NavBar user={props.user} />}
          <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/user/new' component={NewUserForm} />
            <Route exact path='/member/new' component={FamilyForm} />
            <Route exact path='/members' component={MemberCards} />
          </Switch>
        </div>
      </Router>
    </div>

  );
}

const mapStateToProps = (state) => {
  return {
    user: state.users
  }
}

export default connect(mapStateToProps)(App)