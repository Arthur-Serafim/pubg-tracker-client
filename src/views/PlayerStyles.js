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
  background: linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url('https://hdqwalls.com/download/pubg-poster-art-4k-gb-2560x1700.jpg');
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

const PlayerHeader = styled.div`
  width: 100%;
  background-color: #111;
  padding: 20px;
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
  }
`

const PlayerName = styled.span`
  color: white;
  font-weight: 400;
  font-size: 40px;
  color: var(--orange);

  @media only screen and (max-width: 1300px) {
    font-size: 32px;  
  }

  @media only screen and (max-width: 850px) {
    font-size: 26px;
  }

  @media only screen and (max-width: 460px) {
    font-size: 22px;
  }

  @media only screen and (max-width: 400px) {
    font-size: 20px;
  }

  @media only screen and (max-width: 360px) {
    font-size: 18px;
  }
`

const ModeSelector = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 32px;
  
  @media only screen and (max-width: 1300px) {
    font-size: 26px;  
  }

  @media only screen and (max-width: 850px) {
    font-size: 20px;
  }

  @media only screen and (max-width: 460px) {
    font-size: 16px;
  }

  @media only screen and (max-width: 400px) {
    font-size: 13px;
  }

  @media only screen and (max-width: 360px) {
    font-size: 10px;
  }
`

const ModeOption = styled.span`
  margin-right: 25px;
  cursor: pointer;

  &:hover {
    color: var(--orange);
  }

  ${props => props.active && `
    color: var(--orange);
  `}
`

const PlayerStats = styled.div`
  width: 100%;
  background-color: #111;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
`

const PlayerHistory = styled.div`
  width: 100%;
  background-color: #5E5D53;
  padding: 5px 10px;
  font-size: 28px;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  text-transform: capitalize;

  @media only screen and (max-width: 1300px) {
    font-size: 26px; 
    margin-bottom: 15px;
  }

  @media only screen and (max-width: 850px) {
    font-size: 20px;
    margin-bottom: 10px;
  }

  @media only screen and (max-width: 460px) {
    font-size: 16px;
    margin-bottom: 5px;
  }
`

export {
  Container, 
  View, 
  PlayerHeader, 
  PlayerName, 
  ModeSelector, 
  ModeOption, 
  PlayerStats, 
  PlayerHistory
}