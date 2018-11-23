# Decorative thunks

Sample project aimed to show pros and cons of thunk decoration approach as also
as all opportunities of `handy-thunk` library.

## Installation

```sh
git clone https://github.com/DScheglov/deco-thunks.git
cd deco-thunks
npm install
```

## Running project

```sh
git checkout episode-1 # or episode-2
npm start
```

## The Legend of the Project

Let's imagine that we need to develope UI-client for `GitHub`-api, displaying the User Profile Summary.

The project starts from MVP that allows to load fixed user profile (it's a mine) and passes through the several steps to on-fly loading feature.

<table>
  <tr>
    <th>Tag</th>
    <th>Description</th>
  </tr>
  <tr>
    <td style="width: 100px; text-align: center">
      <code>episode-1</code>
    </td>
    <td>
      Creating MVP with button <b>Load</b> that loads user profile. <br/>
      <small>
      <a href="https://codesandbox.io/s/github/DScheglov/deco-thunks/tree/loading-sample">
        Live sample
      </a> &bull;
      <a href="https://github.com/DScheglov/deco-thunks/commit/4ff17768846bd5b2c2d6b55f2f29e0fd0009bba3">
        4ff1776
      </a> &bull;
      <b>loading-sample</b>
      </small>
    </td>
  </tr>
  <tr>
    <td style="width: 100px; text-align: center">
      <code>episode-2</code>
    </td>
    <td>
      Fixing Avatar blinking issue (without decorators) <br/>
      <small>
      <a href="https://codesandbox.io/s/github/DScheglov/deco-thunks/tree/connected-sample-1">
        Live sample
      </a> &bull;
      <a href="https://github.com/DScheglov/deco-thunks/commit/164f40f51c12a03cc18c09c91fe024fbfe441645">
        164f40f
      </a> &bull;
      <b>connected-sample-1</b>
      </small>
    </td>
  </tr>
  <tr>
    <td style="width: 100px; text-align: center">
      <code>episode-3</code>
    </td>
    <td>
     Using decorator <code>connected</code> to get <code>avararUrl</code> from the <code>state</code><br/>
     <small>
      <a href="https://codesandbox.io/s/github/DScheglov/deco-thunks/tree/connected-sample-2">
        Live sample
      </a> &bull;
      <a href="https://github.com/DScheglov/deco-thunks/commit/dbb08fa43b6bb60f48d664550ab17f904ea75263">
        dbb08fa
      </a> &bull;
      <b>connected-sample-2</b>
      </small>
    </td>
  </tr>
  <tr>
    <td style="width: 100px; text-align: center">
      <code>episode-4</code>
    </td>
    <td>
     Fixing Avatar blinking feature with `queue` compositor  <br/>
     <small>
      <a href="https://codesandbox.io/s/github/DScheglov/deco-thunks/tree/queue-sample">
        Live sample
      </a> &bull;
      <a href="https://github.com/DScheglov/deco-thunks/commit/5a52a117b283bb5ffe2e26567d974bb51d9c2401">
        5a52a11
      </a> &bull;
      <b>queue-sample</b>
      </small>
    </td>
  </tr>
  <tr>
    <td style="width: 100px; text-align: center">
      <code>episode-5</code>
    </td>
    <td>
      Developing new feature: submit form with user name to load custom user profile  <br/>
      <small>
      <a href="https://codesandbox.io/s/github/DScheglov/deco-thunks/tree/loading-custom-user">
        Live sample
      </a> &bull;
      <a href="https://github.com/DScheglov/deco-thunks/commit/ec6c257557b288be6de0cf43148163d33f0a6b03">
        ec6c257
      </a> &bull;
      <b>loading-custom-user</b>
      </small>
    </td>
  </tr>
  <tr>
    <td style="width: 100px; text-align: center">
      <code>episode-6</code>
    </td>
    <td>
      Fixing issue with processing empty login  <br/>
      <small>
      <a href="https://codesandbox.io/s/github/DScheglov/deco-thunks/tree/onlyIf-sample">
        Live sample
      </a> &bull;
      <a href="https://github.com/DScheglov/deco-thunks/commit/9885d5cb367e3e762aaeb8c4883d226475660de1">
        9885d5c
      </a> &bull;
      <b>onlyIf-sample</b>
      </small>
    </td>
  </tr>
  <tr>
    <td style="width: 100px; text-align: center">
      <code>episode-7</code>
    </td>
    <td>
      Fixing issue with fluding to console with error messages  <br/>
      <small>
      <a href="https://codesandbox.io/s/github/DScheglov/deco-thunks/tree/fallback-sample">
        Live sample
      </a> &bull;
      <a href="https://github.com/DScheglov/deco-thunks/commit/57fedc045c8e0350a430ec3dedb5d52108e334e7">
        57fedc0
      </a> &bull;
      <b>fallback-sample</b>
      </small>
    </td>
  </tr>
  <tr>
    <td style="width: 100px; text-align: center">
      <code>episode-8</code>
    </td>
    <td>
      Preventing unneeded loading of existing users <br/>
      <small>
      <a href="https://codesandbox.io/s/github/DScheglov/deco-thunks/tree/ensuring-user-sample">
        Live sample
      </a> &bull;
      <a href="https://github.com/DScheglov/deco-thunks/commit/990140e245eab9441835587c53b4077518113d0b">
        990140e
      </a> &bull;
      <b>ensuring-user-sample</b>
      </small>
    </td>
  </tr>
  <tr>
    <td style="width: 100px; text-align: center">
      <code>episode-9</code>
    </td>
    <td>
      Emplementing on-fly loading <br/>
      <small>
      <a href="https://codesandbox.io/s/github/DScheglov/deco-thunks/tree/episode-9">
        Live sample
      </a> &bull;
      <a href="https://github.com/DScheglov/deco-thunks/commit/bb74e4fca2c8af56fb90cbbb4ce99d84ad82c568">
        bb74e4f
      </a> &bull;
      <b>postponed-sample</b>
      </small>
    </td>
  </tr>
</table>
