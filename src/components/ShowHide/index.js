import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {firstName: false, lastName: false}

  first = () => {
    this.setState(prevState => ({firstName: !prevState.firstName}))
  }

  last = () => {
    this.setState(prevState => ({lastName: !prevState.lastName}))
  }

  render() {
    let authFirstName
    let authLastName

    const {firstName, lastName} = this.state

    if (firstName === true) {
      authFirstName = (
        <div className="name-container">
          <p>Joe</p>
        </div>
      )
    } else {
      authFirstName = null
    }

    if (lastName === true) {
      authLastName = (
        <div className="name-container">
          <p>Jonas</p>
        </div>
      )
    } else {
      authLastName = null
    }

    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="buttons-container">
          <div className="first-name">
            <button className="button" type="button" onClick={this.first}>
              Show/Hide Firstname
            </button>
            {authFirstName}
          </div>
          <div className="last-name">
            <button className="button" type="button" onClick={this.last}>
              Show/Hide Lastname
            </button>
            {authLastName}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
