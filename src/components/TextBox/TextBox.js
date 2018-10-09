import React from 'react'
import { StyledTextBox } from './TextBox.style'
import PropTypes from 'prop-types'

const TextBox = props => (
  <StyledTextBox placeholder={props.placeholder} rows="5" />
)

TextBox.propTypes = {
  placeholder: PropTypes.string,
}

export default TextBox
