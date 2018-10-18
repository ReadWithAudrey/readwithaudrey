import React from 'react'
import PropTypes from 'prop-types'
import { StyledErrorSpan } from './ErrorSpan.style'

const ErrorSpan = props => {
  return <StyledErrorSpan>{props.children}</StyledErrorSpan>
}

ErrorSpan.propTypes = {
  children: PropTypes.string,
  type: PropTypes.string,
}

export default ErrorSpan
