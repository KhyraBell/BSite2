import React from 'react';

import Layout from "../components/layout"
import chloe from "../images/chloe.png";
import heroes from "../images/heroes.png";
import poppies from "../images/poppies.png";

const Art = () => {
  return (
    <Layout>
    <div className="paragraph">
      <h2>My Art</h2>

      <div><h3>The Beauty of Poppies</h3>
      <img src={poppies} alt="Cover Image from The Beauty of Poppies"/>
      <p>A choice-driven RPG about the American War in Afghanistan. Download and unzip a playable sample here.</p>
      </div>
      <div><h3>The Rub</h3>
      <iframe src="https://player.vimeo.com/video/210433188" frameBorder="0" />
        <p>The short sequel to the upcoming feature, Intimates.</p>
      </div>
      <div><h3>Chloe Chamonix</h3>
<img src={chloe} alt="Cover Image to Chloe Chamonix novel"/>
      My urban fantasy about a girl detective. Download it from my store!
      </div>
      <div><h3>Heroes All</h3>
<img src="" alt=""/>
      </div>
    </div>
    </Layout> );
}

export default Art;