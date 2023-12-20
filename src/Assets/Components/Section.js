import React from 'react';
import profile from '../icons/image1.png';

function Section() {
  return (
    <div className="container hero-section">
      <div className="row">
        <div className="col col-sm-12 col-md-6 col-lg-6">
          <h3 className="subheading">
            Create your own Web3 Masterpiece
          </h3>
          <p className="tittle-section">
            Most entrepreneurs want to create their own web3 sites; unfortunately, they don't know much about creating one. Web3Makr makes it easier for newbies to create a blockchain-based collectibles solution without the hassle of leaving their favorite creation tools and by simple drag and drop functionality.
          </p>
          <h3 className="subheading">
            HOW YOU START
          </h3>
          <h1 className="suheading">
            Unlock the blockchain potential to create web3 application
          </h1>
          <div className="col-sm-12 col-lg-4 ">
            <button className="btnprop">10 Trusted Clients</button>
          </div>
        </div>
        <div className="col col-sm-12 col-md-6 col-lg-6">
          {/* Use 'src' instead of 'pic' */}
          <img src={profile} alt="profile" />
        </div>
      </div>
    </div>
  );
}

export default Section;

