import React from 'react';
import roundImage1 from '../images/round-image-1.jpg'; // Replace with your image paths
import roundImage2 from '../images/round-image-2.jpg';
import roundImage3 from '../images/round-image-3.jpg';

function Future() {
  return (
    <div className="container">
      <div className="row">
        <h1> Welocme to the future of webmkr</h1>
        {/* Column 1 */}
        <div className="col-sm-12 col-md-6 col-lg-4">
          <div className="rounded-image-container">
            <img src={roundImage1} alt="Image 1" className="rounded-image" />
          </div>
        </div>

        {/* Column 2 */}
        <div className="col-sm-12 col-md-6 col-lg-4">
          <div className="rounded-image-container">
            <img src={roundImage2} alt="Image 2" className="rounded-image" />
          </div>
        </div>

        {/* Column 3 */}
        <div className="col-sm-12 col-md-6 col-lg-4">
          <div className="rounded-image-container">
            <img src={roundImage3} alt="Image 3" className="rounded-image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Future;
