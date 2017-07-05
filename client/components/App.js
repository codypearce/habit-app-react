import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import Header from './shared/Header';
import Footer from './shared/Footer';
import AddHabit from './habits/AddHabit';
import HabitList from './habits/HabitList';
import Key from './habits/Key';

export default class App extends React.Component {
  constructor() {
    super();
    this.addHabit = this.addHabit.bind(this);
    this.deleteHabit = this.deleteHabit.bind(this);
    this.editHabit = this.editHabit.bind(this);
    this.changeHabitState = this.changeHabitState.bind(this);
    this.state = {
      habits: [
        {name:'Wake up early', streak: {'Mon Jul 03 2017 19:19:29 GMT-0600 (MDT)': 'success'}},
        {name:'Meditate', streak: {'Mon Jul 03 2017 19:19:29 GMT-0600 (MDT)': 'success'}},
        {name:'Exercise', streak: {'Mon Jul 03 2017 19:19:29 GMT-0600 (MDT)': 'success'}},
        {name:'Write', streak: {'Mon Jul 03 2017 19:19:29 GMT-0600 (MDT)': 'success'}},
      ]
    };
  }
  addHabit(habit) {
    if(!habit) {
      return;
    }
    this.setState({
      habits: this.state.habits.concat([{name: habit, streak: []}])
    })
  }
  editHabit(habit, name) {
    const newHabits = this.state.habits;
    newHabits[newHabits.indexOf(habit)].name = name;
    this.setState({habits: newHabits})
  }
  deleteHabit(habit) {
    const newHabits = this.state.habits;
    newHabits.splice(newHabits.indexOf(habit), 1);
    this.setState({habits: newHabits})
  }

  changeHabitState(name, day) {
    const newHabits = this.state.habits;
    const habit = newHabits.filter((habit) => {return habit.name === name});
    if(habit[0].streak[day] == 'success') {
      habit[0].streak[day] = 'failure';
    } else if (habit[0].streak[day] == 'failure') {
      habit[0].streak[day] = 'skip';
    } else if (habit[0].streak[day] == 'skip') {
      habit[0].streak[day] = 'noData';
    } else {
      habit[0].streak[day] = 'success';
    }
    this.setState({habits: newHabits})
  }
  render() {
    return (
     <div>
        <Header />
        <Key />
        <HabitList habits={this.state.habits} editHabit={this.editHabit} deleteHabit={this.deleteHabit} changeHabitState={this.changeHabitState}/>
        <AddHabit addHabit={this.addHabit} />
        <Footer />
      </div>
    );
  }
}
