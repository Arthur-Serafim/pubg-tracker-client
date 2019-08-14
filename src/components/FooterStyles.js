import styled from 'styled-components'

export const FooterContainer = styled.div`
  grid-area: footer;
  height: 100%;
  width: 100%;
  background-color: #252525;

  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  font-size: 28px;

  & span {
    margin: 0 15px;
  }
`
