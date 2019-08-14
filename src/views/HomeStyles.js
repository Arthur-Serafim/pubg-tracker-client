import styled from 'styled-components'

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr 60px;
  grid-template-areas: 'image search' 'footer footer'
`

const ImageContainer = styled.div`
  grid-area: image;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100px 1fr;
  grid-template-areas: 'navbar' 'empty';
  background: url('https://images8.alphacoders.com/818/thumb-1920-818978.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: start;
  background-position-y: center;
`

const FormContainer = styled.div`
  grid-area: search;
  height: 100%;
  width: 100%;
  background-color: var(--orange);
`

const Footer = styled.div`
  grid-area: footer;
  height: 100%;
  width: 100%;
  background-color: #252525;
`

const Navbar = styled.div`
  grid-area: navbar;
  height: 100%;
  width: 100%;
  background-color: rgba(16, 16, 16, 0.3);

  display: grid;
  grid-template-columns: 150px 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: 'logo navigation' 
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
  transition: all .4s;
  
  &:hover {
    border-bottom: 5px solid white;
  }
`

const Logo = styled.img`
  height: 89px;
  width: 89px;
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
`

const Select = styled.select`
  border: none;
  box-shadow: none;
  cursor: pointer;
  background-color: transparent;
  outline-style: none;
  color: white;
  font-size: 32px;
  text-transform: uppercase;
  font-family: 'Teko';
`

const HomeLink = styled.div`
  margin: 0 30px;
`

const SelectOption = styled.option`
  background-color: var(--orange);
  cursor: pointer;
  
  ${props => props.selected && `
    display: none
  `}
`

export {
  FormContainer, 
  ImageContainer, 
  Container, 
  Footer, 
  Navbar, 
  LogoContainer, 
  Logo,
  Navigation,
  Select,
  HomeLink,
  SelectOption
}