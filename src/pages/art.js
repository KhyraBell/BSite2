import React from "react"
import PaypalExpressBtn from "react-paypal-express-checkout"

import Layout from "../components/layout"
import chloe from "../images/chloe.png"
import heroes from "../images/heroes.png"
import poppies from "../images/poppies.png"

class Art extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      payment: '5.00',
    }
  }

  render() {
    const client = {
      sandbox: "process.env.PAYPAL_CLIENT_ID_SANDBOX",
      production: "process.env.PAYPAL_CLIENT_ID_PRODUCTION",
    }

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
              A choice-driven RPG about the American War in Afghanistan.
              Download and unzip a playable sample here.
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
              alt="Cover Image to Chloe Chamonix novel"
            />
            <p>
              My urban fantasy about a girl detective. Pay what you want via
              Paypal to recieve a PDF!
            </p>
            <input type="text" value={this.state.payment} />
            <PaypalExpressBtn client={client} currency={"USD"} total="{parseInt(this.state.payment)}" />
          </div>
          <div className="flex">
            <h3>Heroes All</h3>
            <img src={heroes} className="image" alt="Heroes All RPG cover" />
          </div>
        </div>
      </Layout>
    )
  }
}

export default Art
