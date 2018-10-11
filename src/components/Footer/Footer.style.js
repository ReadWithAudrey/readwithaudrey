import styled from 'styled-components'

export const StyledFooter = styled.footer.attrs({
  className:
    'flex flex-column justify-center items-center montserrat bg-green w-100',
})`
`

export const FooterNav = styled.span.attrs({
  className: 'flex items-center justify-around bg-green w-100',
})`
  min-height: 5vh;
`

export const Copyright = styled.span.attrs({
  className: 'flex justify-around items-center bg-white black w-100',
})`
  min-height: 5vh;
`
