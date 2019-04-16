import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import icon from "../images/icon.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

      <LandingMain>
      <h2>Welcome to Brandon L. Sichling's website!</h2>
      <LandingImage src={icon} alt="Anime picture of Brandon" />


      <p className="center">I connect with people best through stories. My art is about reconciliation, and I hope you see that in my work and enjoy it!</p>
      </LandingMain>
  </Layout>
)

const LandingMain = styled.main`
  display: flex;
  flex-direction: column;
  padding-top: 0.75rem;
`;

const LandingImage = styled.img`
  border-radius: 50%;
  margin: 0 auto 1rem auto;
  height: 150px;
  width: 150px;

  @media only screen and (min-width: 800px) {
  height: 300px;
  width: 300px;
}`;

export default IndexPage
