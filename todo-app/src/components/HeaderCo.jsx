import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js'
import { withRouter } from 'react-router';

class HeaderCo extends Component {
  render(){
    const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
      // console.log(isUserLoggedIn);
    return (
      <header>
                <nav className="navbar navbar-expand-md bg-light">
              {/*<div className="navbar-brand">in28Minutes</div>*/}
                  <div><Link className="navbar-brand" to="/home/in28minutes">Momager</Link></div>
                    <ul className="navbar-nav">
                      {isUserLoggedIn && <li><Link className="nav-link" to="/home/in28minutes">Home</Link></li>}
                      {isUserLoggedIn && <li><Link className="nav-link" to="/todos">Todos</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedIn && <li><Link className="nav-link" to="/signup">Signup</Link></li>}
                        {!isUserLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
      )
  }
}

export default withRouter(HeaderCo);
