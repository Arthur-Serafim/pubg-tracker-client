import React from 'react'
import { FooterContainer } from './FooterStyles'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <FooterContainer>
      <span>&copy; {year} PubgStats</span>
      <span>PUBG is a trademark of PUBG CORPORATION.</span>
    </FooterContainer>
  )
}
