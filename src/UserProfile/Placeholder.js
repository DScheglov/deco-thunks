import React from 'react';
import imgPlaceholder from '../../assets/img-placeholder.svg';
import Loader from '../Loader';

const Placeholder = ({ isLoading }) => (
  <div className="card card--fixed_width">
    <img className="card-img-top" src={imgPlaceholder} alt="User Avatar"/>
    <div className="card-body placeholder-wrap">
      <h5 className="card-title placeholder placeholder--bold" />
      <p className="card-text">
        <span className="placeholder" />
      </p>
    </div>
    <ul className="list-group list-group-flush">
      <li className="list-group-item placeholder-wrap">
        <span className="placeholder" />
      </li>
      <li className="list-group-item placeholder-wrap">
        <span className="placeholder" />
      </li>
    </ul>
    <div className="card-body placeholder-wrap">
      <span className="placeholder" />
    </div>
    {isLoading && <Loader />}
  </div>
);

export default Placeholder;