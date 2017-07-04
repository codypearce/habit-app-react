import React, { Component } from 'react';
import Habit from './Habit';
import Moment from 'react-moment';
import MomentMod from 'moment';

export default class HabitList extends Component {
  constructor(props) {
    super(props);
  }
  _renderDates() {
    let day;
    const dates = [1,2,3,4,5];
    return (
      dates.map(date => {
        day = MomentMod().add(String(date), 'd');
        return (
          <div key={date} className="col-xs-2 center-xs">
            <Moment className="habitBlockText" format='dddd'>{day}</Moment>
          </div>
        )
      })
    )
  }
  _renderHabits() {
    return (
      this.props.habits.map(habit => {
        return <Habit key={habit.name} habit={habit}  changeHabitState={this.props.changeHabitState}/>
      })
    )
  }
  render() {
    let date = new Date();

    return (
      <div className="col-xs-10 col-xs-offset-1">
        <div className="row">
          <div className="col-xs-2">
            <h4>Name</h4>
          </div>
          <div className="col-xs-10 row">
            <div className="col-xs-2 center-xs middle-xs">
              <Moment className="habitBlockText" format='dddd'>{date}</Moment>
            </div>
            {this._renderDates()}
          </div>
        </div>
        {this._renderHabits()}
      </div>
    );
  }
}
