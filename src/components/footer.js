import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const Footer = () => (
  <footer>
    <FooterLinks>
      <Link className="navbar-link">Link 1</Link>
      <Link className="navbar-link">Link 2</Link>
      <Link className="navbar-link">Link 3</Link>
    </FooterLinks>
  </footer>
)

const FooterLinks = styled.nav`
  display: flex;
`

export default Footer
