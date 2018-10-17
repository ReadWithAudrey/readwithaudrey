/* eslint-disable */
import React from 'react'
import PropTypes from 'prop-types'
export const SignupContext = React.createContext()
export class SignupProvider extends React.Component {
  updateForm = event => {
    console.log(event.target)
    this.setState({ [event.target.name]: event.target.value })
  }
  state = {
    firstName: '',
    secondName: '',
    emailAddress: '',
    story: '',
    specialRequests: '',
    gender: '',
    age: '',
    timezone: '',
    readlisten: '',
    booktype: '',
    updateForm: this.updateForm,
  }
  render() {
    return (
      <SignupContext.Provider value={this.state}>
        {this.props.children}
      </SignupContext.Provider>
    )
  }
}

SignupProvider.propTypes = {
  children: PropTypes.object,
}
