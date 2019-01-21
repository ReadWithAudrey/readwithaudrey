import React from 'react'
import { StyledTitle } from './Title.style'
import PropTypes from 'prop-types'

const Title = props => <StyledTitle>{props.children}</StyledTitle>

Title.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
}

export default Title
