import React from 'react';

const UserCard = ({ login, name, location, company, avatarUrl, url }) => (
  <div className="card card--fixed_width">
    <img className="card-img-top" src={avatarUrl} alt={login} />
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
      <p className="card-text">
        {login}
      </p>
    </div>
    <ul className="list-group list-group-flush">
      <li className="list-group-item">{location}</li>
      <li className="list-group-item">{company}</li>
    </ul>
    <div className="card-body">
      <a href={url} className="btn btn-primary">Open at GitHub</a>
    </div>
  </div>
);

export default UserCard;