/* eslint-disable */
import React from 'react'
import PropTypes from 'prop-types'
export const SignupContext = React.createContext()
export class SignupProvider extends React.Component {
  updateForm = event => {
    this.setState({ [event.target.name]: event.target.value })
  }
  handleNext1 = event => {
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
  handleNext2 = event => {
    // read or listen
    let role = this.state.readlisten
    if (role === null) {
      event.preventDefault()
      this.state.roleError = "Please choose a role"
      this.setState({ roleErrorSpan: "visible"})
    } else {
      this.setState({ roleErrorSpan: "hidden"})
    }
    // book type
    let book = this.state.booktype
    if (book === null) {
      event.preventDefault()
      this.state.bookError = "Please choose a book type"
      this.setState({ bookErrorSpan: "visible"})
    } else {
      this.setState({ bookErrorSpan: "hidden"})
    }
  }
  handleSubmit = event => {
    let story = this.state.story
    if (story === null) {
      event.preventDefault()
      this.state.storyError = "Please tell us something about yourself so we can match you"
      this.setState({ storyErrorSpan: "visible"})
    } else {
      this.setState({ storyErrorSpan: "hidden"})
    }
  }
  showTips = () => this.setState({ storyTipsBox: !this.state.storyTipsBox })
  state = {
    firstName: null,
    nameErrorSpan: 'hidden',
    nameError: null,
    secondName: null,
    surnameErrorSpan: 'hidden',
    surnameError: null,
    emailAddress: null,
    emailErrorSpan: 'hidden',
    emailError: null,
    story: null,
    storyError: null,
    storyErrorSpan: 'hidden',
    storyTipsBox: false,
    specialRequests: '',
    gender: '',
    age: '',
    timezone: '',
    readlisten: null,
    roleErrorSpan: 'hidden',
    roleError: null,
    booktype: null,
    bookErrorSpan: 'hidden',
    bookError: null,
    updateForm: this.updateForm,
    handleNext1: this.handleNext1,
    handleNext2: this.handleNext2,
    handleSubmit: this.handleSubmit,
    showTips: this.showTips,
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
