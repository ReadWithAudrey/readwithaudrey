import styled from 'styled-components'

export const MainDiv = styled.div.attrs({
  className: 'montserrat cf',
})`
  :hover {
    background-color: white;
  }
  background-color: var(--light-green);
  border: #d3d3d3 1px solid;
  padding: 7px;
  margin: 5px;
  max-width: 550px;

  border-radius: 5px;
`
export const SmallDiv = styled.div.attrs({
  className: '',
})`
`

export const Img = styled.img.attrs({
  className: '',
})`
  position: relative;
  right: 0px;
  height: 150px;
`
