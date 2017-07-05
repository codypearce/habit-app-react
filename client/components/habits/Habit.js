import React, { Component } from 'react';
import HabitBox from './HabitBox';
import MomentMod from 'moment';

export default class Habit extends Component {
  constructor() {
    super();
    this.state = {
      editing: false,
      value: '',
    }
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleSubmit() {
    this.setState({
      editing: false,
      value: ''
    })
    this.props.editHabit(this.props.habit, this.state.value);
  }
  _renderHabitBoxes() {
    let day, habitDay, key, habitState;
    const dates = [0, 1,2,3,4,5];
    return (
      dates.map(date => {
        day = MomentMod().subtract(String(date), 'd');
        habitState = 'noData';
        habitDay = day._d;
        for(key in this.props.habit.streak) {
          if(MomentMod(key).isSame(day, 'day')) {
            habitState = this.props.habit.streak[key];
            habitDay = key;
          }
        }
        return (
          <HabitBox key={date} habitName={this.props.habit.name} habitDay={habitDay} habitState={habitState} changeHabitState={this.props.changeHabitState}/>
        )
      })
    )
  }
  _renderName() {
    return (
      <div className="habitName between-xs middle-xs row">
        <h2>{this.props.habit.name}</h2>
        <div>
          <span className="editHabit" onTouchTap={() => this.setState({editing: true})}>Edit</span>
          <span className="deleteHabit" onTouchTap={() => this.props.deleteHabit(this.props.habit)}>Delete</span>
        </div>
      </div>

    );
  }
  _renderInput() {
    return (
      <div className="habitName between-xs middle-xs row">
        <input className="inputName" value={this.state.value} onChange={(event) => this.handleChange(event)} />
        <div>
          <span className="editHabit" onTouchTap={() => this.handleSubmit()}>Yes</span>
          <span className="deleteHabit" onTouchTap={() => this.setState({editing: false})}>Cancel</span>
        </div>
      </div>

    );
  }
  render() {
    return (
      <div className="row">
        <div className="col-xs-2">
          {this.state.editing ? this._renderInput() : this._renderName()}
        </div>
        <div className="col-xs-10 row habitrow">
          {this._renderHabitBoxes()}
        </div>
      </div>
    );
  }
}
