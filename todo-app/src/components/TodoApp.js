import React, { Component } from 'react';

class TodoApp extends Component {
  render (){
      return (
        <div className="TodoApp">
            <Login />
            </div>
        )
  }

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
          this.setState({showSuccessMessage:true})
          this.setState({hasLoginFailed:false})
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
      <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/>
      <ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/>
      username: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
      password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
      <button onClick={this.loginClicked}>Login</button>
      </div>
      )
  }
}

function ShowInvalidCredentials(props){
    if(props.hasLoginFailed) {
        return <div>Invalid Credentials</div>
    }
    return null
}

function ShowLoginSuccessMessage(props) {
    if(props.showSuccessMessage) {
        return <div>Login Sucessful</div>
    }
    return null
}

export default TodoApp;
