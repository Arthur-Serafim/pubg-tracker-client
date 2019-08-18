import styled from 'styled-components'

const Navbar = styled.div`
  grid-area: navbar;
  height: 100%;
  width: 100%;
  background-color: rgba(16, 16, 16, 0.3);

  display: grid;
  grid-template-columns: 150px 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: 'logo navigation';

  @media only screen and (max-width: 1400px) {
    grid-template-columns: 100px 1fr;
  }
`

const LogoContainer = styled.div`
  grid-area: logo;
  height: 100%;
  width: 100%;
  background-color: rgba(37, 37, 37, 0.3);

  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border-bottom: 5px solid var(--orange);
  cursor: pointer;
  transition: all 0.4s;

  &:hover {
    border-bottom: 5px solid white;
  }

  @media only screen and (max-width: 1400px) {
    border-bottom: 3px solid var(--orange);

    &:hover {
      border-bottom: 3px solid white;
    }
  }
`

const Logo = styled.img`
  height: 89px;
  width: 89px;

  @media only screen and (max-width: 1400px) {
    height: 70px;
    width: 70px;
  }
`

const Navigation = styled.div`
  grid-area: navigation;
  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;
  color: white;
  font-size: 32px;
  text-transform: uppercase;
  font-family: 'Teko';

  @media only screen and (max-width: 1400px) {
    font-size: 26px;
  }
`

const Dropdown = styled.div`
  cursor: pointer;
  user-select: none;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  & i {
    font-size: 22px;
    margin: 0 0 5px 5px;

    @media only screen and (max-width: 1400px) {
      font-size: 18px;
    }
  }
`

const HomeLink = styled.div`
  margin: 0 30px;

  &:hover {
    color: var(--orange);
  }
`

const DropdownOption = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  padding-bottom: 1px solid rgba(0, 0, 0, 0.25);
  cursor: pointer;

  &:hover {
    background-color: #252525;
  }
`

const DropdownBox = styled.div`
  background-color: var(--orange);
  width: 159px;
  height: max-content;
  display: none;
  position: absolute;
  margin-top: 50px;
  user-select: none;
  transform: translateY(-100%);

  ${props =>
    props.show &&
    `
    display: block; 
    transform: translateY(0);
  `}
`

const DropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export {
  Navbar,
  LogoContainer,
  Logo,
  Navigation,
  Dropdown,
  HomeLink,
  DropdownOption,
  DropdownBox,
  DropdownContainer
}
