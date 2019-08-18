import styled from 'styled-components'

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;

  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr 60px;
  grid-template-areas: 'image search' 'footer footer';

  @media only screen and (max-width: 1400px) {
    grid-template-rows: 1fr 45px;
  }

  @media only screen and (max-width: 950px) {
    grid-template-columns: 1fr;
    grid-template-rows: 400px 600px 45px;
    grid-template-areas: 'image' 'search' 'footer';
  }

  @media only screen and (max-width: 550px) {
    grid-template-rows: 400px 500px 30px;
  }
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

  @media only screen and (max-width: 1400px) {
    grid-template-rows: 75px 1fr;
  }
`

const FormContainer = styled.div`
  grid-area: search;
  height: 100%;
  width: 100%;
  background-color: var(--orange);
  padding: 50px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (max-width: 550px) {
    padding: 20px;
  }
`

const FormTitle = styled.span`
  font-size: 62px;
  color: white;

  @media only screen and (max-width: 1400px) {
    font-size: 48px;
  }

  @media only screen and (max-width: 1250px) {
    font-size: 40px;
  }

  @media only screen and (max-width: 950px) {
    font-size: 44px;
  }

  @media only screen and (max-width: 550px) {
    font-size: 38px;
  }

  @media only screen and (max-width: 430px) {
    font-size: 30px;    
  }

  ${props =>
    props.purple &&
    `
    color: var(--purple);
  `}
`

const Form = styled.div`
  width: 100%;
  height: 500px;
  background-color: #252525;
  justify-self: flex-end;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100px 1fr;
  grid-template-areas: 'selector' 'input';
  border: 1px solid white;
  overflow: hidden;

  @media only screen and (max-width: 1400px) {
    grid-template-rows: 75px 1fr;
    height: 400px;
  }

  @media only screen and (max-width: 1250px) {
    grid-template-rows: 60px 1fr;
    height: 350px;
  }
`

const FormSelector = styled.div`
  grid-area: selector;
  width: 100%;
  height: 100%;
  background-color: var(--purple);
  border-bottom: 1px solid white;

  display: grid;
  grid-template-columns: 100px 100px 1fr;
  grid-template-rows: 1fr;
  grid-gap: 1px;
  grid-template-areas: 'psn xbox steam';
  box-sizing: border-box;
  transition: all .3s;

  @media only screen and (max-width: 1400px) {
    grid-template-columns: 75px 75px 1fr;  
  }

  @media only screen and (max-width: 1250px) {
    grid-template-columns: 60px 60px 1fr;  
  }

  ${props =>
    props.active === 'psn' &&
    `
    grid-template-columns: 1fr 100px 100px;
    
    @media only screen and (max-width: 1400px) {
      grid-template-columns: 1fr 75px 75px;  
    }

    @media only screen and (max-width: 1250px) {
      grid-template-columns: 1fr 60px 60px;  
    }
  `}
  ${props =>
    props.active === 'xbox' &&
    `
    grid-template-columns: 100px 1fr 100px;

    @media only screen and (max-width: 1400px) {
      grid-template-columns: 75px 1fr 75px;  
    }

    @media only screen and (max-width: 1250px) {
      grid-template-columns: 60px 1fr 60px;  
    }
  `}
  ${props =>
    props.active === 'steam' &&
    `
    grid-template-columns: 100px 100px 1fr;

    @media only screen and (max-width: 1400px) {
      grid-template-columns: 75px 75px 1fr;  
    }
    
    @media only screen and (max-width: 1250px) {
      grid-template-columns: 60px 60px 1fr;  
    }
  `}
`

const FormPlatform = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;

  & img {
    height: 60px;
    width: 60px;

    @media only screen and (max-width: 1400px) {
      height: 45px;
      width: 45px; 
    }

    @media only screen and (max-width: 1250px) {
      height: 30px;
      width: 30px; 
    }
  }

  ${props =>
    props.psn &&
    `
    grid-area: psn;
    background-color: var(--purple);
    border-right: 1px solid white;
  `}
  ${props =>
    props.xbox &&
    `
    grid-area: xbox;
    background-color: var(--green);
    border-right: 1px solid white;
  `}
  ${props =>
    props.steam &&
    `
    grid-area: steam;
    background-color: #252525;
  `}
`

const FormDescription = styled.span`
  font-size: 48px;
  color: white;
  display: none;

  ${props =>
    props.show &&
    `
    display: block;
  `}

  @media only screen and (max-width: 1650px) {
    font-size: 32px;
  }

  @media only screen and (max-width: 1250px) {
    font-size: 26px;
  }

  @media only screen and (max-width: 1075px) {
    font-size: 22px;
  }

  @media only screen and (max-width: 430px) {
    font-size: 16px;    
  }
`

const FormInputArea = styled.div`
  grid-area: input;
  height: 100%;
  width: 100%;
  color: ${props => props.color};
  font-size: 48px;
  padding: 30px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 1400px) {
    font-size: 42px;
  }

  @media only screen and (max-width: 1250px) {
    font-size: 36px;
  }

  @media only screen and (max-width: 550px) {
    padding: 15px;
  }
`

const FormInputContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
  width: 100%;
`

const FormInput = styled.input`
  width: 100%;
  height: 60px;
  background-color: #111;
  border-radius: 5px;
  color: #e5e5e5;
  font-size: 32px;
  padding: 7px 15px;
  box-sizing: border-box;
  text-transform: capitalize;
  border: none;
  box-shadow: none;
  font-family: 'Teko';
  outline-color: ${props => props.color};

  @media only screen and (max-width: 1400px) {
    font-size: 28px;
  }

  @media only screen and (max-width: 1250px) {
    font-size: 22px;
  }
`

const FormSubmit = styled.button`
  font-size: 32px;
  color: ${props => (props.color === 'white' ? '#252525' : 'white')};
  background-color: ${props => props.color};
  padding: 7px 15px;
  border-radius: 5px;
  box-shadow: none;
  font-family: 'Teko';
  cursor: pointer;
  border: none;

  &:hover {
    opacity: 0.9;
  }

  @media only screen and (max-width: 1400px) {
    font-size: 28px;
  }

  @media only screen and (max-width: 1250px) {
    font-size: 22px;
  }
`

export {
  FormContainer,
  ImageContainer,
  Container,
  FormTitle,
  Form,
  FormSelector,
  FormPlatform,
  FormDescription,
  FormInputArea,
  FormInputContainer,
  FormInput,
  FormSubmit
}
