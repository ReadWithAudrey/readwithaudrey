import styled from 'styled-components'

export const Status = styled.section.attrs({
  className: 'flex items-center fl w-third montserrat bg-moon-gray fw4 f5 mb3',
})`
  min-height: 8vh;
  color: #fff;
  padding: 1.5%;
  a {
    color: #fff;
    text-decoration: none;
  }
`
export const StatusActive = styled(Status).attrs({
  className: 'fl w-third bg-green montserrat',
})`
  color: #fff;
  font-weight: bold;
`
