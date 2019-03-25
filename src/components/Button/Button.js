import React from 'react'
import PropTypes from 'prop-types'
import {
  StyledButton,
  HeaderButton,
  RegisterButton,
  DisabledButton,
  BlogButton
} from './Button.style'

const Button = props => {
  if (props.style === 'header') {
    return <HeaderButton>{props.children}</HeaderButton>
  } else if (props.style === 'blog') {
    return <BlogButton>{props.children}</BlogButton>
  } else if (props.style === 'register') {
    return <RegisterButton type={props.type}>{props.children}</RegisterButton>
  } else if (props.style === 'disabled') {
    return (
      <DisabledButton type={props.type} disabled>
        Submitting...
      </DisabledButton>
    )
  } else {
    return <StyledButton>{props.children}</StyledButton>
  }
}

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  type: PropTypes.string,
}

export default Button
