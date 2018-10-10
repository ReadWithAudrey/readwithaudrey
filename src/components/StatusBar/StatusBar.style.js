import styled from 'styled-components'

export const Status = styled.section.attrs({
  className: 'fl w-third v-mid montserrat bg-moon-gray fw4 f6 mb3',
})`
  min-height: 6.75vh;
  color: #fff;
  padding: 1.5%;
  a {
    color: #fff;
    text-decoration: none;
  }
`
export const StatusActive = styled(Status).attrs({
  className: 'fl w-third  v-mid bg-green montserrat',
})`
  color: #fff;
  font-weight: bold;
`
