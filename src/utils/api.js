const rejectError = ({ message }) => Promise.reject(new Error(message));
const idX = x => x;

const check = res => res.json().then(
  res.status > 201
    ? rejectError
    : idX
);

const get = ({ headers }) => url => fetch(url, { headers }).then(check);

const post = ({ headers }) => (url, body) => fetch(url, {
  headers,
  method: 'POST',
  body,
}).then(check);

export const connect = ({ headers }) => ({
  get: get({ headers }),
  post: post({ headers }),
});

let connection = null;

const api = (headers = {}) => {
  connection = connection || connect({ headers });
  return connection;
};

export default api;
