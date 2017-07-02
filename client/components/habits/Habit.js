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
        <div className="col-xs-2">
          Finished
        </div>
        <div className="col-xs-2">
          Not finished
        </div>
      </div>
    );
  }
}
