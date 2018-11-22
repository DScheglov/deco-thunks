import React from 'react';

const UserCard = ({ error }) => (
  <div className="card text-white bg-danger card--fixed_width">
    <div className="card-body">
      <h5 className="card-title">Error</h5>
      <p className="card-text">
        {error}
      </p>
    </div>
  </div>
);

export default UserCard;