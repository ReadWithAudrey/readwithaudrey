import styled from 'styled-components'

export const StyledFooter = styled.footer.attrs({
  className:
    'flex flex-column justify-center items-center bg-white montserrat w-100 bt bw2 mid-gray',
})`
  border-color: var(--green);
  position: relative;
  bottom: 0;
`

export const Copyright = styled.span.attrs({
  className: 'flex justify-center items-center bg-white mid-gray w-100 pa2',
})`
  min-height: 5vh;
`
