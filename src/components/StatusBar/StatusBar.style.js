import styled from 'styled-components'

export const Status = styled.section.attrs({
  className: 'fl w-third v-mid montserrat bg-moon-gray fw4 f6',
})`
  height: 5vh;
  color: #fff;
  padding: 0%;
`
export const StatusActive = styled(Status).attrs({
  className: 'fl w-third  v-mid bg-green montserrat',
})`
  color: #fff;
`
