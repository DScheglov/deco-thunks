import React from 'react';
import { connect } from 'react-redux';
import ActionRecord from './ActionRecord';
import ToolBar from './ToolBar';
import NoRecords from './NoRecords';
import { getAllActions, clearActions } from './store';


const Logger = ({ actions, clearActions }) => (
  <ul className="list-group">
    <ToolBar
      onClearClick={clearActions}
      clearDisabled={actions.length < 1}
    />
    {actions.map(
      (action, index) => <ActionRecord key={index} {...action} />
    )}
    {actions.length === 0 && <NoRecords />}
  </ul>
);

const stateToProps = state => ({
  actions: getAllActions(state),
});

export default connect(stateToProps, { clearActions })(Logger);