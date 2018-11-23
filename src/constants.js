export const LOADING = {
  USERS: 'USERS',
};

export const loggerDefaults = {
  displayObjectSize: false,
  displayDataTypes: false,
  indent: 2,
  enableClipboard: false,
  iconStyle: 'square',
  collapsed: 1,
  name: false,
  shouldCollapse: name => name === 'payload',
  collapseStringsAfterLength: 60,
};

export const DELAY_BEFORE_REQUEST = 1000;
