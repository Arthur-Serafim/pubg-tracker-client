import styled from 'styled-components'

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100px 1fr 60px;
  grid-template-areas: 'navbar' 'view' 'footer';

  @media only screen and (max-width: 1400px) {
    grid-template-rows: 80px 1fr;
  }

  @media only screen and (max-width: 1000px) {
    grid-template-rows: 60px 1fr;
  }
`

const View = styled.div`
  grid-area: view;
  height: 100%;
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('https://hdqwalls.com/download/pubg-poster-art-4k-gb-2560x1700.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: end;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  box-sizing: border-box;
  padding: 30px;

  @media only screen and (max-width: 850px) {
    padding: 0;
    padding-top: 15px;
  }
`

export { Container, View }
