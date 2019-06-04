import React from "react"
import { Helmet } from 'react-helmet';

import Layout from "../components/layout"
import chloe from "../images/chloe.webp"
import heroes from "../images/heroes.webp"
import poppies from "../images/poppies.webp"
import PayPal from "../components/Paypal"

class Art extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet>
          <meta charSet="utf-8" />
          <html lang="en" />
          <meta
            name="description"
            content="Page detailing my works, including an urban fantasy novel and superhero RPG"
          />
          <title>Brandon L Sichling - Art</title>
          <link rel="canonical" href="" />
        </Helmet>
        <div className="paragraph flex art-block">
          <h2>My Art</h2>

          <div className="flex">
            <h3>The Beauty of Poppies</h3>
            <img
              src={poppies}
              className="image"
              alt="Cover of The Beauty of Poppies"
            />
            <p>
              A choice-driven RPG about the American War in Afghanistan.
              Download and unzip a playable sample{" "}
              <a href="../assets/BoPexport.zip" download>
                here.
              </a>
            </p>
          </div>
          <div className="flex">
            <h3>The Rub</h3>
            <iframe
              src="https://player.vimeo.com/video/210433188"
              frameBorder="0"
              title="rub"
            />
            <p>The short sequel to the upcoming feature, Intimates.</p>
          </div>
          <div className="flex">
            <h3>Chloe Chamonix</h3>
            <img
              src={chloe}
              className="book"
              alt="Cover of Chloe Chamonix novel"
            />
            <p>
              My urban fantasy about a girl detective. Buy it on
              <a href="https://www.amazon.com/dp/B07SH2NSKV?fbclid=IwAR0RfAa4kom5FRPY3EzyIu4Ffw5UbfftzYYIoIz_Z5iyYmKE3AX4x66ii2Y"
              target="__blank" rel="noopener noreferrer"> Amazon</a>, or pay what you want via
              PayPal to receive your PDF today!
            </p>
            <PayPal />
          </div>
          <div className="flex">
            <h3>Heroes All</h3>
            <img src={heroes} className="image" alt="Heroes All RPG cover" />
            <p>
              Play a day in the life of your own comic book! Heroes All casts
              you as the writer and main character of your own comic. Come up
              with your powers, create your antagonist, and explore your shared
              world. Anything from superheroes to space opera to working at a
              convenience store, play your characters' everyday lives while
              playing each other's antagonists. Available for purchase now on
              <a
                href="https://www.drivethrurpg.com/product/276049/Heroes-All"
                target="__blank"
                rel="noopener noreferrer"
              >
                {" "}
                Drive Thru RPG
              </a>
            </p>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Art
