import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import './WelcomeHome.css';

import HelloWorldService from '../api/todo/HelloWorldService'

class WelcomeHome extends Component {
  constructor(props) {
    super(props)
    this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this)
    this.state = {
      welcomeMessage : ''
    }
    this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this)
    this.handleError = this.handleError.bind(this)
  }
  render(){
    return (
      <div className="bodywelcome">
      <h1>Welcome!</h1>
      <div className="container">
      Hi Mom!! {this.props.match.params.name}. You can manage your todos <Link to="/todos">here</Link>.
      </div>
      <div className="container">
        Click here to get words of encouragement!
      <button onClick={this.retrieveWelcomeMessage} className="vibesbutton">good vibes</button>
      </div>
      <div className="container povibes">
        {this.state.welcomeMessage}
      </div>
    </div>
      )
  }
  retrieveWelcomeMessage() {
      HelloWorldService.executeHelloWorldService()
      .then(response => this.handleSuccessfulResponse(response))
      .catch(error => this.handleError(error))


      // HelloWorldService.executeHelloWorldBeanService()
      // .then(response => this.handleSuccessfulResponse(response))
      // // .catch()

      // HelloWorldService.executeHelloWorldPathVariableService(this.props.match.params.name)
      // .then(response => this.handleSuccessfulResponse(response))
      // // .catch()
  }
  handleSuccessfulResponse(response) {
    console.log(response)
    this.setState({
      welcomeMessage : response.data
      // welcomeMessage : response.data.message
    })

  }
  handleError(error) {
    console.log(error.response)
    this.setState({
      welcomeMessage : error.response.data.message
      // welcomeMessage : response.data.message
    })

  }
}



export default WelcomeHome;
