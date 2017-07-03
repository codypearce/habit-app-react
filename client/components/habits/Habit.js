import React, { Component } from 'react';
import HabitBox from './HabitBox';
import MomentMod from 'moment';

export default class Habit extends Component {
  constructor() {
    super();
  }
  changeHabitState() {

  }
  _renderHabitBoxes() {
    let day, habitDay, key;
    const dates = [0, 1,2,3,4,5];
    return (
      dates.map(date => {
        day = MomentMod().add(String(date), 'd');
        habitDay = 'noData';
        for(key in this.props.habit.streak) {
          if(MomentMod(key).isSame(day, 'day')) {
            habitDay = this.props.habit.streak[key]
          }
        }
        return (
          <HabitBox key={date} habitState={habitDay} changeHabitState={this.changeHabitState}/>
        )
      })
    )
  }
  render() {
    return (
      <div className="row">
        <div className="col-xs-2">
          <h2>{this.props.habit.name}</h2>
        </div>
        <div className="col-xs-10 row habitrow">
          {this._renderHabitBoxes()}
        </div>
      </div>
    );
  }
}
