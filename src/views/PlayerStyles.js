import styled from 'styled-components'

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100px 1fr;
  grid-template-areas: 'navbar' 'view';
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
`

const PlayerHeader = styled.div`
  width: 100%;
  background-color: #111;
  padding: 20px;
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
`

const PlayerName = styled.span`
  color: white;
  font-weight: 400;
  font-size: 40px;
  color: var(--orange);
`

const ModeSelector = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 32px;
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
  padding-bottom: 0;
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