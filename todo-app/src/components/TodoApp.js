import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


class TodoApp extends Component {
  render (){
      return (
        <div className="TodoApp">
              <Router>
                    <Switch>
                        <Route path="/" exact component={Login}/>
                        <Route path="/login" exact component={Login}/>
                        <Route path="/home/:name" exact component={Welcome}/>
                        <Route component={ErrorPage}/>
                    </Switch>
                </Router>
            </div>
        )
  }
}

class Welcome extends Component {
  render(){
    return (
      <div>
      Welcome in 28 minutes
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
          this.props.history.push(`/welcome/${this.state.username}`)

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
      {/*<ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/>*/}
      {this.state.hasLoginFailed && <div>Invalid Credentials</div>}
      {this.state.showSuccessMessage && <div>Login Sucessful</div>}
      {/*<ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/>*/}
      username: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
      password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
      <button onClick={this.loginClicked}>Login</button>
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
