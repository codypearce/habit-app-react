import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import Header from './shared/Header';
import Footer from './shared/Footer';
import AddHabit from './modals/AddHabit';
import HabitList from './habits/HabitList';

export default class App extends React.Component {
  constructor() {
    super();
    this.addHabit = this.addHabit.bind(this);
    this.state = {
      habits: [
        {name:'Wake up early', streak: []},
        {name:'Meditate', streak: []},
        {name:'Exercise', streak: []},
        {name:'Write', streak: []}
      ]
    };
  }
  addHabit(habit) {
    console.log(habit)
    this.setState({
      habits: this.state.habits.concat([{name: habit, streak: []}])
    })
  }
  render() {
    return (
     <div>
        <Header />
        <HabitList habits={this.state.habits}/>
        <AddHabit addHabit={this.addHabit} />
        <Footer />
      </div>
    );
  }
}
