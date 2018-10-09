import React from 'react'
import PropTypes from 'prop-types'
import { StyledRadioButton, Label, RadioInput } from './RadioButton.style'

const RadioButton = props => {
  return (
    <StyledRadioButton>
      <RadioInput type="radio" value={props.children} name={props.children} />
      <Label>{props.children}</Label>
    </StyledRadioButton>
  )
}

RadioButton.propTypes = {
  children: PropTypes.string,
}

export default RadioButton
