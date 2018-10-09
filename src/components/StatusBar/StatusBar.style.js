import styled from 'styled-components'

export const Status = styled.section.attrs({
  className: 'fl w-third v-mid',
})`
  background: #d3d3d3;
  height: 5vh;
  color: #fff;
  padding: 0%;
`
export const StatusActive = styled(Status).attrs({
  className: 'fl w-third  v-mid',
})`
  background: #4ce0b3;
  color: #fff;
`
