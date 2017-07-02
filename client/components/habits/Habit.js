import React, { Component } from 'react';
import HabitBox from './HabitBox';

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
          <HabitBox habitState={'success'}/>
          <HabitBox habitState={'skip'}/>
          <HabitBox habitState={'success'}/>
          <HabitBox habitState={'success'}/>
          <HabitBox habitState={'failure'}/>
          <HabitBox habitState={'success'}/>
        </div>
      </div>
    );
  }
}
