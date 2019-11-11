import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import AuthenticationService from './AuthenticationService.js';
import AuthenticatedRoute from './AuthenticatedRoute.jsx';

class TodoApp extends Component {
  render (){
      return (
        <div className="TodoApp">
              <Router>
               <>
                  <Header />
                    <Switch>
                        <Route path="/" exact component={Login}/>
                        <Route path="/login" exact component={Login}/>
                        <AuthenticatedRoute path="/home/:name" exact component={WelcomeHome} />
                        <AuthenticatedRoute path="/todos" exact component={ListTodo} />
                        <AuthenticatedRoute path="/logout" exact component={Logout} />
                        <Route component={ErrorPage}/>
                    </Switch>
                  <Footer />
                  </>
                </Router>
            </div>
        )
  }
}


class WelcomeHome extends Component {
  render(){
    return (
      <>
      <h1>Welcome!</h1>
      <div className="container">
      Hi Mom!!{this.props.match.params.name}. You can manage your todos <Link to="/todos">here</Link>.
      </div>
      </>
      )
  }
}

class Header extends Component {
  render(){
    const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
      console.log(isUserLoggedIn);
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

class Logout extends Component {
  render(){
    return (
      <div>
      <h2>You are logged out</h2>
      <div className="container">
        Thank you for using out app!
      </div>
      </div>
      )
  }
}

class Footer extends Component {
  render(){
    return (
      <footer className="footer">
        <span className="text-muted">All rights reserved 2019 @Momager</span>
      </footer>
      )
  }
}





class ListTodo extends Component {
  constructor(props){
    super(props)
    this.state ={
      todos :
          [
           {id: 1, description : 'Learn to Dance', done:false, targetDate: new Date()},
           {id: 2, description : 'Become an Expert at React', done:false, targetDate: new Date()},
           {id: 3, description : 'Visit India', done:false, targetDate: new Date()}
          ]
    }
  }
  render(){
    return (
      <div>
                 <h1>List Todos</h1>
                 <div className="container">
                 <table className="table">
                     <thead>
                         <tr>
                             <th>Description</th>
                             <th>Target Date</th>
                             <th>Is Completed?</th>
                         </tr>
                     </thead>
                     <tbody>
                       {
                         this.state.todos.map (
                            todo =>
                                <tr key={todo.id}>
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{todo.targetDate.toString()}</td>
                                </tr>
                         )
                        }
                     </tbody>
                 </table>
              </div>
            </div>
        )
  }
}

function ErrorPage() {
      return <div>This page is Extinct!!</div>
  }


class Login extends Component {
  constructor(props) {
      super(props)
      this.state = {
        username: 'in28minutes',
        password: '',
        hasLoginFailed: false,
        showSuccessMessage: false
      }
      this.handleChange = this.handleChange.bind(this)
      this.loginClicked = this.loginClicked.bind(this)

  }

  handleChange(event){
    // console.log(this.state);
    this.setState({
            [event.target.name]
              :event.target.value
      })
  }

loginClicked() {
      //in28minutes,dummy
      if(this.state.username==='in28minutes' && this.state.password==='dummy'){
          AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password)
          this.props.history.push(`/home/${this.state.username}`)

          // this.setState({showSuccessMessage:true})
          // this.setState({hasLoginFailed:false})
      }
      else {
          this.setState({showSuccessMessage:false})
          this.setState({hasLoginFailed:true})
      }
  }

  // handleUsernameChange(event){
  //   console.log(event.target.name);
  //   this.setState({
  //           [event.target.name]
  //             :event.target.value
  //     })
  // }
  //
  // handlePasswordChange(event){
  //   console.log(event.target.value);
  //   this.setState({
  //     password:event.target.value
  //     })
  // }

  render (){
    return (
      <div>
      <h1>Login</h1>
        <div className="Container">
      {/*<ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/>*/}
      {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
      {this.state.showSuccessMessage && <div>Login Sucessful</div>}
      {/*<ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/>*/}
      username: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
      password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
      <button className="btn btn-outline-secondary" onClick={this.loginClicked}>Login</button>
        </div>
      </div>
      )
  }
}

// function ShowInvalidCredentials(props){
//     if(props.hasLoginFailed) {
//         return <div>Invalid Credentials</div>
//     }
//     return null
// }
//
// function ShowLoginSuccessMessage(props) {
//     if(props.showSuccessMessage) {
//         return <div>Login Sucessful</div>
//     }
//     return null
// }

export default TodoApp;
