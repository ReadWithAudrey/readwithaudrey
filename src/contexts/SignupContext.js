import React from 'react'
import PropTypes from 'prop-types'
export const SignupContext = React.createContext()
export class SignupProvider extends React.Component {
  updateForm = event => {
    this.setState({ [event.target.name]: event.target.value })
  }
  showTips = () => this.setState({ storyTipsBox: !this.state.storyTipsBox })
  state = {
    firstName: null,
    secondName: null,
    emailAddress: null,
    story: null,
    storyTipsBox: false,
    specialRequests: '',
    gender: '',
    age: '18-24',
    timezone: '0',
    readlisten: null,
    booktype: null,
    updateForm: this.updateForm,
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
