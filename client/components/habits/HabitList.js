import React, { Component } from 'react';
import Habit from './Habit';

export default class HabitList extends Component {
  constructor(props) {
    super(props);
  }
  componentWillReceiveProps() {
    console.log(this.props.habits)
  }
  _renderHabits() {
    return (
      this.props.habits.map(habit => {
        return <Habit key={habit.name} habit={habit} />
      })
    )
  }
  render() {

    return (
      <div className="col-xs-10 col-xs-offset-1">
        <div className="row">
          <div className="col-xs-2">
            <h4>Name</h4>
          </div>
          <div className="col-xs-10 row">
            <div className="col-xs-2 center-xs">
              <h4>Today</h4>
            </div>
            <div className="col-xs-2 center-xs">
              <h4>Yesterday</h4>
            </div>
            <div className="col-xs-2 center-xs">
              <h4>Friday</h4>
            </div>
            <div className="col-xs-2 center-xs">
              <h4>Thursday</h4>
            </div>
            <div className="col-xs-2 center-xs">
              <h4>Wednesday</h4>
            </div>
            <div className="col-xs-2 center-xs">
              <h4>Tuesday</h4>
            </div>
          </div>
        </div>
        {this._renderHabits()}
      </div>
    );
  }
}
