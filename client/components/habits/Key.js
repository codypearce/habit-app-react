import React, { Component } from 'react';

export default class Key extends Component {

  render() {
    return (
      <div className="keyContainer center-xs row">
        <div className="col-xs-1 keyBox">
          <p>Success</p>
          <div className="key key--success"></div>
        </div>
        <div className="col-xs-1 keyBox">
          <p>Missed</p>
          <div className="key key--failure"></div>
        </div>
        <div className="col-xs-1 keyBox">
          <p>Skipped</p>
          <div className="key key--skip"></div>
        </div>
        <div className="col-xs-1 keyBox">
          <p>No Data</p>
          <div className="key key--noData"></div>
        </div>

      </div>
    );
  }
}
