import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const Footer = () => (
  <footer>
    <FooterLinks>
      <Link>Link 1</Link>
      <Link>Link 1</Link>
      <Link>Link 1</Link>
    </FooterLinks>
  </footer>
)

const FooterLinks = styled.nav`
  display: flex;
`

export default Footer
