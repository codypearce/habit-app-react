import React, { Component } from 'react';

export default class HabitBox extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className={`col-xs-2 habitBox habitBox--${this.props.habitState}`}>
      </div>
    );
  }
}
