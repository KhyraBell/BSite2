import React from "react"

import Layout from "../components/layout"
import chloe from "../images/chloe.png"
import heroes from "../images/heroes.png"
import poppies from "../images/poppies.png"
import PayPal from "../components/Paypal"

class Art extends React.Component {
  handleChange = event => this.setState({ value: event.target.value })

  render() {
    return (
      <Layout>
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
              Download and unzip a playable sample <a href="../assets/BoPexport.zip" download>here.</a>
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
              My urban fantasy about a girl detective. Pay what you want via PayPal to receive
              your PDF today!
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
              playing each other's antagonists! Available for purchase now on
              <a
                href="https://www.drivethrurpg.com/product/276049/Heroes-All"
                target="__blank"
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
