import React, { Component } from 'react';

export default class Key extends Component {

  render() {
    return (
      <div className="keyContainer center-xs row">
        <div className="keyBox">
          <p>Success</p>
          <div className="key key--success"></div>
        </div>
        <div className="keyBox">
          <p>Missed</p>
          <div className="key key--failure"></div>
        </div>
        <div className="keyBox">
          <p>Skipped</p>
          <div className="key key--skip"></div>
        </div>
        <div className="keyBox">
          <p>No Data</p>
          <div className="key key--noData"></div>
        </div>

      </div>
    );
  }
}
