import React, {Component} from 'react';
import {Route, IndexRoute } from 'react-router';

import App from './components/app.js';
import ToDo from './pages/to_do';
import LogIn from './components/log_in';
import SignUp from './pages/sign_up';


const requireAuth = (nextState, replace) =>{
   var login = sessionStorage.getItem('login');
  if (!login) {
    //replaceState({ nextPathname: nextState.location.pathname }, '/login')
    replace('/todo/login')
  }

}



export default(
<Route path="/todo/" component={App} >
    <IndexRoute component={ToDo} onEnter={requireAuth} ></IndexRoute>
    <Route path="login" component={LogIn}></Route>
    <Route path="signup" component={SignUp}></Route>
</Route>
);
