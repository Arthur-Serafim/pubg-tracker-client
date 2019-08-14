import styled from 'styled-components'

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;

  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr 60px;
  grid-template-areas: 'image search' 'footer footer';
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

export { FormContainer, ImageContainer, Container }
