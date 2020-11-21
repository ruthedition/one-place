import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux'
import FamilyForm from './containerComponents/NewMember';
import Login from './containerComponents/Login';
import NewUserForm from './containerComponents/NewUserForm';
import MemberCards from './containerComponents/MemberCards'
import {NavBar} from './presentationalComponents/NavBar';
import {logout} from './actions/userActions'
import PrivateRoute from './containerComponents/PrivateRoute'

const App = (props) => {

  return (
    <div>
      <Router>
        <div>
          {props.user.loggedIn && <NavBar user={props.user} logout={props.logout} />}
          <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/login' component={Login} />
            <PrivateRoute exact path='/user/new' component={NewUserForm} />
            <PrivateRoute exact path='/member/new' component={FamilyForm} />
            <PrivateRoute exact path='/members' component={MemberCards} />
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

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)