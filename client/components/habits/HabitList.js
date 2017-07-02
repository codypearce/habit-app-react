import React, { Component } from 'react';


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
        return <span>{habit}</span>
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
