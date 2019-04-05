import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Header = ({ siteTitle }) => (
  <HeaderHeader>
    <HeaderBackground>
      <HeaderHeading>
        <Link to="/" className="navbar-link">{siteTitle}</Link>
      </HeaderHeading>
      <Navbar>
        <Link to="/about" className="navbar-link nav">About</Link>
        <Link to="/art" className="navbar-link nav">Art</Link>
        <Link to="/store" className="navbar-link nav">Store</Link>
        <Link to="/contact" className="navbar-link nav">Contact</Link>
      </Navbar>

    </HeaderBackground>
  </HeaderHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

const HeaderHeader = styled.header`
  background-color: #420c1d;
  margin-bottom: 1.45rem;
`

const HeaderBackground = styled.div`
  margin: 0 auto;
  padding: 1rem 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 800px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Navbar = styled.nav`
  display: flex;
  flex-direction: column;

  @media (min-width: 800px) {
    flex-direction: row;
  }

`;

const HeaderHeading = styled.h1`
  text-align: center;
  

  @media (min-width: 800px) {
    text-align: left;
  }
`;

export default Header
