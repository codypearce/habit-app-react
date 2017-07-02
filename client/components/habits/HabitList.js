import React, { Component } from 'react';
import Habit from './Habit';

export default class HabitList extends Component {
  constructor(props) {
    super(props);
  }
  _renderHabits() {
    return (
      this.props.habits.map(habit => {
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
