import React from 'react'
import { StyledInputBox } from './TextBox.style'
import PropTypes from 'prop-types'

const TextBox = props => <StyledInputBox placeholder={props.placeholder} />

TextBox.propTypes = {
  placeholder: PropTypes.string,
}

export default TextBox
