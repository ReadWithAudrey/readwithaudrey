import styled from 'styled-components'

export const HiddenSpan = styled.span.attrs({
  className: 'bg-white pa2 mv2 red w-100 f5 montserrat',
})`
  display: none;
`

export const VisibleSpan = styled.span.attrs({
  className: 'bg-white pa2 mv2 red w-100 f5 montserrat',
})`
  display: flex;
`