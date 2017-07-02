import React, { Component } from 'react';

export default class Habit extends Component {
  constructor() {
    super();
    this.state = {
      habits: ['Wake up early', 'Meditate', 'Exercise', 'Write']
    };
  }

  render() {

    return (
      <div>
        <h2>{this.props.habit}</h2>
      </div>
    );
  }
}
