import React from 'react'
import PropTypes from 'prop-types'
export const SignupContext = React.createContext()
export class SignupProvider extends React.Component {
  updateForm = event => {
    this.setState({ [event.target.name]: event.target.value })
  }
  showTips = () => this.setState({ storyTipsBox: !this.state.storyTipsBox })
  showOrgTips = () => this.setState({ orgTipsBox: !this.state.orgTipsBox })

  state = {
    firstName: null,
    secondName: null,
    emailAddress: null,
    withAnOrg: null,
    orgTipsBox: false,
    orgCode: null,
    showOrgTips: this.showOrgTips,
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
    if (this.state.withAnOrg === 'No' && this.state.orgCode !== null) {
      this.setState({
        orgCode: null,
      })
    }
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
