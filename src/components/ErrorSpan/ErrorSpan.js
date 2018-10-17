import React from 'react'
import PropTypes from 'prop-types'
import { VisibleSpan, HiddenSpan } from './ErrorSpan.style'

const ErrorSpan = props => {
  if (props.type === 'visible') {
    return <VisibleSpan>{props.children}</VisibleSpan>
  } else if (props.type === 'hidden') {
    return <HiddenSpan>{props.children}</HiddenSpan>
  }
}

ErrorSpan.propTypes = {
  children: PropTypes.string,
  type: PropTypes.string,
}

export default ErrorSpan