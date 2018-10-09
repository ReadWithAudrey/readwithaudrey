import React from 'react'
import PropTypes from 'prop-types'
import { StyledRadioButton, Label } from './RadioButton.style'

const RadioButton = props => {
  return (
    <React.Fragment>
      <StyledRadioButton
        type="radio"
        value={props.children}
        name={props.children}
      />
      <Label>{props.children}</Label>
    </React.Fragment>
  )
}

RadioButton.propTypes = {
  children: PropTypes.string,
}

export default RadioButton
