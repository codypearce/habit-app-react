import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import Header from './shared/Header';
import Footer from './shared/Footer';
import AddHabit from './habits/AddHabit';
import HabitList from './habits/HabitList';
import Key from './habits/Key';
import MomentMod from 'moment';


export default class App extends React.Component {
  constructor() {
    super();
    this.addHabit = this.addHabit.bind(this);
    this.deleteHabit = this.deleteHabit.bind(this);
    this.editHabit = this.editHabit.bind(this);
    this.changeHabitState = this.changeHabitState.bind(this);
    this.state = {
      habits: [
        {name:'Wake up early', streak: this.randomStreak()},
        {name:'Meditate', streak: this.randomStreak()},
        {name:'Exercise', streak:this.randomStreak()},
        {name:'Write', streak: this.randomStreak()},
      ]
    };
  }
  randomStreak() {
    let streak = {};
    let day;
    const dates = [0, 1,2,3,4,5];
    dates.map(date => {
      day = MomentMod().subtract(String(date), 'd');
      streak[day._d] = this.randomValue();
    })
    console.log(streak)
    return streak;
  }
  randomValue() {
    const rand = Math.floor((Math.random() * 4) + 1);
    console.log(rand)
    if(rand === 1) {
      return 'success';
    } else if(rand === 2) {
      return 'failure';
    } else if(rand == 3) {
      return 'skip';
    } else {
      return 'success';
    }
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
