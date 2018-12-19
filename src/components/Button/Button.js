import React from 'react'
import PropTypes from 'prop-types'
import { StyledButton, HeaderButton, RegisterButton } from './Button.style'

const Button = props => {
  if (props.style === 'header') {
    return <HeaderButton>{props.children}</HeaderButton>
  } else if (props.style === 'register') {
    return <RegisterButton ontype={props.type}>{props.children}</RegisterButton>
  } else {
    return <StyledButton>{props.children}</StyledButton>
  }
}

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  type: PropTypes.string,
}

export default Button
