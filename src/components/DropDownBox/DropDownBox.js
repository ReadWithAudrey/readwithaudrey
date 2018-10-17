import React from 'react'
import PropTypes from 'prop-types'
import { Select } from './DropDownBox.style'

const DropDownBox = props => {
  if (props.type === 'timezone') {
    return (
      <Select onChange={props.onChange} name={props.name}>
        <option value="-12">(GMT-12:00) International Date Line West</option>
        <option value="-11">(GMT-11:00) Midway Island, Samoa</option>
        <option value="-10">(GMT-10:00) Hawaii</option>
        <option value="-9">(GMT-09:00) Alaska</option>
        <option value="-8">
          (GMT-08:00) Pacific Time (US & Canada), Tijuana
        </option>
        <option value="-7">
          (GMT-07:00) Mountain Time (US & Canada), Arizona
        </option>
        <option value="-6">
          (GMT-06:00) Central Time, Mexico City, Central America
        </option>
        <option value="-5">
          (GMT-05:00) Eastern Time (US & Canada), Lima, Bogota, Quito
        </option>
        <option value="-4">
          (GMT-04:00) Atlantic Time (Canada), Caracus, Santiago
        </option>
        <option value="-3.5">(GMT-03:30) Newfoundland</option>
        <option value="-3">
          (GMT-03:00) Buenos Aires, Montevideo, Greenland, Brasilia
        </option>
        <option value="-2">(GMT-02:00) Mid-Atlantic</option>
        <option value="-1">(GMT-01:00) Azores, Cape Verde Is.</option>
        <option value="0" selected="selected">
          (GMT+00:00) Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London
        </option>
        <option value="1">
          (GMT+01:00) Amsterdam, Paris, Brussels, Rome, Berlin, Madrid
        </option>
        <option value="2">(GMT+02:00) Amman</option>
        <option value="2">
          (GMT+02:00) Athens, Amman, Beirut, Bucharest, Istanbul
        </option>
        <option value="3">(GMT+03:00) Kuwait, Riyadh, Baghdad</option>
        <option value="3">
          (GMT+03:00) Moscow, St. Petersburg, Kuwait, Nairobi
        </option>
        <option value="3.5">(GMT+03:30) Tehran</option>
        <option value="4">(GMT+04:00) Abu Dhabi, Muscat, Baku</option>
        <option value="4.5">(GMT+04:30) Kabul</option>
        <option value="5">(GMT+05:00) Islamabad, Karachi, Tashkent</option>
        <option value="5.5">
          (GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi
        </option>
        <option value="5.75">(GMT+05:45) Kathmandu</option>
        <option value="6">(GMT+06:00) Almaty, Astana, Novosibirsk</option>
        <option value="6.5">(GMT+06:30) Yangon (Rangoon)</option>
        <option value="7">(GMT+07:00) Bangkok, Hanoi, Jakarta</option>
        <option value="8">
          (GMT+08:00) Beijing, Kuala Lumpur, Hong Kong, Singapore
        </option>
        <option value="9">(GMT+09:00) Tokyo, Seoul, Osaka</option>
        <option value="9.5">(GMT+09:30) Adelaide, Darwin</option>
        <option value="10">
          (GMT+10:00) Brisbane, Canberra, Melbourne, Sydney
        </option>
        <option value="11">
          (GMT+11:00) Magadan, Solomon Is., New Caledonia
        </option>
        <option value="12">(GMT+12:00) Auckland, Wellington, Fiji</option>
        <option value="13">(GMT+13:00) Nukualofa</option>
      </Select>
    )
  } else if (props.type === 'age') {
    return (
    <Select onChange={props.onChange} name={props.name}>
      <option value="18-24">18-24</option>
      <option value="25-34">25-34</option>
      <option value="35-44">35-44</option>
      <option value="45-54">45-54</option>
      <option value="55-64">55-64</option>
      <option value="65-74">65-74</option>
      <option value="75+">75+</option>
    </Select>
    )
  }
}

  DropDownBox.propTypes = {
    children: PropTypes.string,
    onChange: PropTypes.func,
    name: PropTypes.string,
    type: PropTypes.string,
  }

  export default DropDownBox
