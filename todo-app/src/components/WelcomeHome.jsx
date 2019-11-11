import React, {Component} from 'react'
import {Link} from 'react-router-dom'

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

export default WelcomeHome;
