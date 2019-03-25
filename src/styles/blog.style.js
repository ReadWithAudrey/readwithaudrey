import styled from 'styled-components'

export const ContainerDiv = styled.div.attrs({
  className: '',
})`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`
