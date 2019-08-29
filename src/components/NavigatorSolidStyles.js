import styled from 'styled-components'

const Navbar = styled.div`
  grid-area: navbar;
  height: 100%;
  width: 100%;
  background-color: #252525;

  display: grid;
  grid-template-columns: 150px 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: 'logo navigation';

  @media only screen and (max-width: 1400px) {
    grid-template-columns: 100px 1fr;
  }

  ${props => props.solid && `background-color: #252525`}
`

const LogoContainer = styled.div`
  grid-area: logo;
  height: 100%;
  width: 100%;
  background-color: #111;

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

  ${props => props.solid && `background-color: #111111`}
`

const Logo = styled.img`
  height: 89px;
  width: 89px;

  @media only screen and (max-width: 1400px) {
    height: 70px;
    width: 70px;
  }

  @media only screen and (max-width: 1000px) {
    height: 50px;
    width: 50px;
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

  @media only screen and (max-width: 1000px) {
    font-size: 22px;
  }

  @media only screen and (max-width: 800px) {
    font-size: 20px;
  }

  @media only screen and (max-width: 600px) {
    font-size: 18px;
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

    @media only screen and (max-width: 1000px) {
      font-size: 16px;
    }

    @media only screen and (max-width: 800px) {
      font-size: 14px;
    }

    @media only screen and (max-width: 600px) {
      font-size: 12px;
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
