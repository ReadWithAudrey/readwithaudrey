import React from 'react'
import { SignupProvider } from './src/contexts/SignupContext'
import PropTypes from 'prop-types'

export const wrapRootElement = ({ element }) => {
  return <SignupProvider>{element}</SignupProvider>
}

wrapRootElement.propTypes = {
  element: PropTypes.object,
}
