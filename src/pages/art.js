import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import chloe from "../images/chloe.png"
import heroes from "../images/heroes.png"
import poppies from "../images/poppies.png"

const Art = () => {
  return (
    <Layout>
      <div className="paragraph flex art-block">
        <h2>My Art</h2>

        <div className="flex">
          <h3>The Beauty of Poppies</h3>
          <img
            src={poppies}
            className="image"
            alt="Cover Image from The Beauty of Poppies"
          />
          <p>
            A choice-driven RPG about the American War in Afghanistan. Download
            and unzip a playable sample here.
          </p>
        </div>
        <div className="flex">
          <h3>The Rub</h3>
          <iframe
            src="https://player.vimeo.com/video/210433188"
            frameBorder="0"
          />
          <p>The short sequel to the upcoming feature, Intimates.</p>
        </div>
        <div className="flex">
          <h3>Chloe Chamonix</h3>
          <img
            src={chloe}
            className="book"
            alt="Cover Image to Chloe Chamonix novel"
          />
          <p>
            My urban fantasy about a girl detective. Download it from my{" "}
            <Link to="/store">store</Link>.
          </p>
        </div>
        <div className="flex">
          <h3>Heroes All</h3>
          <img src={heroes} className="image" alt="Heroes All RPG cover" />
        </div>
      </div>
    </Layout>
  )
}

export default Art
