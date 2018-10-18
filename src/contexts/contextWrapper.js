/* eslint-disable */
import { SignupContext } from './SignupContext'
import React from 'react'
export const withSignupContext = Component => {
  return props => (
    <SignupContext.Consumer>
      {value => <Component {...props} value={value} />}
    </SignupContext.Consumer>
  )
}

withSignupContext.displayName = 'Hello'
