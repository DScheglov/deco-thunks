import React from 'react';
import ReactJson from 'react-json-view';
import { loggerDefaults } from '../constants';


const ActionRecord = action => (
  <li className="list-group-item">
    <ReactJson {...loggerDefaults} src={action}  />
  </li>
);

export default ActionRecord;
