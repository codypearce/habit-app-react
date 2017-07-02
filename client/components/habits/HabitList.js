import React, { Component } from 'react';
import Habit from './Habit';

export default class HabitList extends Component {
  constructor() {
    super();
    this.state = {
      habits: ['Wake up early', 'Meditate', 'Exercise', 'Write']
    };
  }
  _renderHabits() {
    return (
      this.state.habits.map(habit => {
        return <Habit key={habit} habit={habit} />
      })
    )
  }
  render() {

    return (
      <div>
        {this._renderHabits()}
      </div>
    );
  }
}
