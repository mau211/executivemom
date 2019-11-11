import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import AuthenticatedRoute from './AuthenticatedRoute.jsx';
import Login from './Login.jsx'
import ListTodo from './ListTodo.jsx'
import ErrorComponent from './ErrorComponent.jsx'
import HeaderCo from './HeaderCo.jsx'
import FooterCo from './FooterCo.jsx'
import Logout from './Logout.jsx'
import WelcomeHome from './WelcomeHome.jsx'

class TodoApp extends Component {
  render (){
      return (
        <div className="TodoApp">
              <Router>
               <>
                  <HeaderCo />
                    <Switch>
                        <Route path="/" exact component={Login}/>
                        <Route path="/login" exact component={Login}/>
                        <AuthenticatedRoute path="/home/:name" exact component={WelcomeHome} />
                        <AuthenticatedRoute path="/todos" exact component={ListTodo} />
                        <AuthenticatedRoute path="/logout" exact component={Logout} />
                        <Route component={ErrorComponent} />
                    </Switch>
                  <FooterCo/>
                  </>
                </Router>
                {/*<LoginComponent/>
               <WelcomeComponent/>*/}

            </div>
        )
  }
}

export default TodoApp;
