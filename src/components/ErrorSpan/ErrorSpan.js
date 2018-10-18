import React from 'react'
import PropTypes from 'prop-types'
import { VisibleSpan, HiddenSpan } from './ErrorSpan.style'

const ErrorSpan = props => {
  if (props.type === 'hidden') {
    return <HiddenSpan>{props.children}</HiddenSpan>
  } else {
    return <VisibleSpan>{props.children}</VisibleSpan>
  }
}

ErrorSpan.propTypes = {
  children: PropTypes.string,
  type: PropTypes.string,
}

export default ErrorSpan
