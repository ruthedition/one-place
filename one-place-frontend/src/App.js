import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import FamilyForm from './containerComponents/NewMember';
import Login from './containerComponents/Login';
import NewUserForm from './containerComponents/NewUserForm';
import MemberCards from './containerComponents/MemberCards'
import NavBar from './presentationalComponents/NavBar';

export const App = () => {

  return (
    <div>
      <NavBar />
      <Router>
        <div>
          <Route exact path='/' component={Login} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/user/new' component={NewUserForm} />
          <Route exact path='/member/new' component={FamilyForm} />
          <Route exact path='/members' component={MemberCards} />
        </div>
      </Router>
    </div>
  

  );
}
