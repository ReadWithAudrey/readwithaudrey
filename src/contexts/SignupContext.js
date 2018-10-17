/* eslint-disable */
import React from 'react'
import PropTypes from 'prop-types'
export const SignupContext = React.createContext()
export class SignupProvider extends React.Component {
  updateForm = event => {
    this.setState({ [event.target.name]: event.target.value })
  }
  handleNext = event => {
    // first name
    let name = this.state.firstName
    if (name === null) {
      event.preventDefault()
      this.state.nameError = "First name cannot be blank"
      this.setState({ nameErrorSpan: "visible"})
    } else {
      if (name.match(/^[a-zA-Z-]+$/)) {
        this.setState({ nameErrorSpan: "hidden"})
      } else {
        event.preventDefault()
        this.state.nameError = "Letters and hyphens only please"
        this.setState({ nameErrorSpan: "visible"})
      }
    }
    // last name
    let surname = this.state.secondName
    if (surname === null) {
      event.preventDefault()
      this.state.surnameError = "Second name cannot be blank"
      this.setState({ surnameErrorSpan: "visible"})
    } else {
      if (surname.match(/^[a-zA-Z-]+$/)) {
        this.setState({ surnameErrorSpan: "hidden"})
      } else {
        event.preventDefault()
        this.state.surnameError = "Letters and hyphens only please"
        this.setState({ surnameErrorSpan: "visible"})
      }
    }
    //email
    let email = this.state.emailAddress
    if (email === null) {
      event.preventDefault()
      this.state.emailError = "Email cannot be blank"
      this.setState({ emailErrorSpan: "visible"})
    } else {
      if (email.match(/^[0-9a-z]([a-z_\d\.-]*)@[a-z\d]([a-z\d-]*)\.([a-z]{2,8})(\.[a-z]{2,8})?$/gmi)) {
        this.setState({ emailErrorSpan: "hidden"})
      } else {
        event.preventDefault()
        this.state.emailError = "Please enter a valid email address"
        this.setState({ emailErrorSpan: "visible"})
      }
    }
  }
  // handleSubmit = () => {

  // }
  state = {
    firstName: null,
    secondName: null,
    emailAddress: null,
    story: null,
    specialRequests: '',
    gender: '',
    age: '',
    timezone: '',
    readlisten: '',
    booktype: '',
    nameErrorSpan: 'hidden',
    nameError: null,
    surnameErrorSpan: 'hidden',
    surnameError: null,
    emailErrorSpan: 'hidden',
    emailError: null,
    updateForm: this.updateForm,
    handleNext: this.handleNext,
    // handleSubmit: this.handleSubmit,
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
