/* eslint-disable */
import React, { Component, createContext } from 'react'
import PropTypes from 'prop-types'
const { Provider, Consumer } = createContext()
class SignupProvider extends Component {
  updateForm = event => {
    this.setState({ [event.target.name]: event.target.value })
  }
  state = {
    firstName: '',
    secondName: '',
    emailAddress: '',
    updateForm: this.updateForm,
  }
  render() {
    return (
      <Provider value={{ state: this.state }}>{this.props.children}</Provider>
    )
  }
}

export { SignupProvider }

export default Consumer

SignupProvider.propTypes = {
  children: PropTypes.object,
}
