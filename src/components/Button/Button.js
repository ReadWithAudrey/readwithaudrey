import React from 'react'
import PropTypes from 'prop-types'
import { StyledButton, HeaderButton } from './Button.style'

const Button = props => {
  if (props.type === "header") {
    return <HeaderButton>{props.children}</HeaderButton>
  } else {
    return <StyledButton>{props.children}</StyledButton>
  }
}

Button.propTypes = {
  children: PropTypes.string,
  type: PropTypes.string
}

export default Button
