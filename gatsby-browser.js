import React from 'react'
import { SignupProvider } from './src/contexts/SignupContext'
import PropTypes from 'prop-types'

export const wrapRootElement = ({ element }) => {
  const App = () => {
    return <SignupProvider>{element}</SignupProvider>
  }
  return <App />
}

wrapRootElement.propTypes = {
  element: PropTypes.object,
}
