import React, { Component } from 'react';

export default class Habit extends Component {
  constructor() {
    super();

  }

  render() {

    return (
      <div>
        <h2>{this.props.habit.name}</h2>
      </div>
    );
  }
}
