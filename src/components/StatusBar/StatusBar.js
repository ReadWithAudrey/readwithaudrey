import React from 'react'
import { Status, StatusActive } from './StatusBar.style'
import PropTypes from 'prop-types'

const StatusBar = props => {
  if (props.type === 'active') {
    return <StatusActive>{props.children}</StatusActive>
  } else {
    return <Status>{props.children}</Status>
  }
}

StatusBar.propTypes = {
  active: PropTypes.string,
  children: PropTypes.string,
}

export default StatusBar
