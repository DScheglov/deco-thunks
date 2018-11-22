import React from 'react';

const ToolBar = ({ onClearClick, clearDisabled }) => (
  <li className="list-group-item text-right">
    <button
      type="button"
      onClick={onClearClick}
      className="btn btn-default"
      disabled={clearDisabled}
    >
      Clear
    </button>
  </li>
);

export default ToolBar;
