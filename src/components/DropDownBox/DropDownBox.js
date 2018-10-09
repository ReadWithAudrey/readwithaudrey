import React from 'react'
import PropTypes from 'prop-types'
import { Select } from './DropDownBox.style'

const DropDownBox = () => {
  return (
    <Select>
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
      <option value="mercedes">Mercedes</option>
      <option value="audi">Audi</option>
    </Select>
  )
}

DropDownBox.propTypes = {
  children: PropTypes.string,
}

export default DropDownBox
