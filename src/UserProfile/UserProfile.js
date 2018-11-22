import React from 'react';
import { connect } from 'react-redux';

import UserCard from './UserCard';
import UserError from './UserError';
import PlaceHolder from './Placeholder';
import { getUserByLogin } from './store';
import * as Loader from '../Loader';
import { LOADING } from '../constants';


const UserProfile = ({ user, isLoading }) => (
  <div className="row">
    <div className="col-sm-3">
      {(
        isLoading || user == null ? <PlaceHolder {...{ isLoading }} /> :
        user.error != null ? <UserError {...user} /> :
        <UserCard {...user} />
      )}
    </div>
  </div>
);

const mapStateToProps = (state, { login }) => ({
  user: getUserByLogin(state, login),
  isLoading: Loader.isLoading(state, LOADING.USERS),
});

export default connect(mapStateToProps)(UserProfile);