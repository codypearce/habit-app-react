import React, { Component } from 'react';

export default class Habit extends Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-2">
          <h2>{this.props.habit.name}</h2>
        </div>
        <div className="col-xs-10 row habitrow">
          <div className="col-xs-2 habitBox habitBox--success">
          </div>
          <div className="col-xs-2 habitBox habitBox--failure">
          </div>
          <div className="col-xs-2 habitBox habitBox--skip">
          </div>
          <div className="col-xs-2 habitBox habitBox--success">
          </div>
          <div className="col-xs-2 habitBox habitBox--success">
          </div>
          <div className="col-xs-2 habitBox habitBox--success">
          </div>
        </div>
      </div>
    );
  }
}
