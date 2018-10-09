import React from 'react'
import PropTypes from 'prop-types'
import { StyledButton } from './Button.style'

const Button = props => <StyledButton>{props.children}</StyledButton>

Button.propTypes = {
  children: PropTypes.string,
}

export default Button
