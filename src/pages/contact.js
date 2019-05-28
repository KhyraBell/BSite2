import React from "react"
import styled from "styled-components"
import { Helmet } from 'react-helmet';

import { FaTwitter } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"
import { FaEnvelope } from "react-icons/fa"

import Layout from "../components/layout"

const Contact = () => {
  return (
    <Layout>
    <Helmet>
          <meta charSet="utf-8" />
          <html lang="en" />
          <meta name="description" content="Page containing contact methods for me for email, Twitter, and Facebook." />
          <title>Brandon L Sichling - Contact</title>
          <link rel="canonical" href="" />
        </Helmet>
      <h2>Reach Out</h2>

      <ContactLinks>
        <ProfileLink href="https://twitter.com/BrandonSichling" target="_blank" rel="noopener noreferrer"
        >
          <FaTwitter size={56} alt="Twitter logo icon"/>
          Twitter
        </ProfileLink>

        <ProfileLink
          href="https://www.facebook.com/SaberFishStudio/"
          target="_blank"
          rel="noopener noreferrer"

        >
          <FaFacebook size={56} alt="Facebook logo icon"/>
          Facebook
        </ProfileLink>

        <ProfileLink href="mailto:brandonlichlings@gmail.com" target="_blank" rel="noopener noreferrer"
        alt="Email icon">
          <FaEnvelope size={56} alt="Email icon"/>
          Email
        </ProfileLink>
      </ContactLinks>
    </Layout>
  )
}

const ContactLinks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;

  @media only screen and (min-width: 800px) {
  flex-direction: row;
}
`

const ProfileLink = styled.a`
  border-radius: 50%;
  color: #26000c;
  margin-bottom: 1rem;
  margin-right: 1rem;
  padding:  1rem 1.5rem;
  transform: scale(1);
  transition: all 0.3s ease-out;

  :hover {
    background-color: #975268;
  }
`

export default Contact
