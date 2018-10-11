import React from 'react'
import { StyledTextBox } from './TextBox.style'
import PropTypes from 'prop-types'

const TextBox = props => <StyledTextBox>{props.children}</StyledTextBox>

TextBox.propTypes = {
  children: PropTypes.string,
}

export default TextBox
