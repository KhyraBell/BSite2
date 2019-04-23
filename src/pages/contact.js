import React from "react"
import styled from "styled-components"

import { FaTwitter } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"
import { FaEnvelope } from "react-icons/fa"

import Layout from "../components/layout"

const Contact = () => {
  return (
    <Layout>
      <h2>Reach Out</h2>

      <ContactLinks>
        <ProfileLink href="https://twitter.com/BrandonSichling" target="_blank">
          <FaTwitter size={56} />
        </ProfileLink>

        <ProfileLink
          href="https://www.facebook.com/SaberFishStudio/"
          target="_blank"
        >
          <FaFacebook size={56} />
        </ProfileLink>

        <ProfileLink href="mailto:brandonlichlings@gmail.com" target="_blank">
          <FaEnvelope size={56} />
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
`

const ProfileLink = styled.a`
  color: #26000c;
  margin-bottom: 1rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  transform: scale(1);
  transition: all 0.3s ease-out;

  :hover {
    color: #5d1d31;
  }
`

export default Contact
