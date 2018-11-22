import React from 'react';

import ripple from '../../assets/ripple-loader.gif';

const Loader = () => (
  <div className="loader-overlay">
    <img src={ripple} alt="Loading" />
  </div>
);


export default Loader;