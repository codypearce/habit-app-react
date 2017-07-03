import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import Header from './shared/Header';
import Footer from './shared/Footer';
import AddHabit from './habits/AddHabit';
import HabitList from './habits/HabitList';

export default class App extends React.Component {
  constructor() {
    super();
    this.addHabit = this.addHabit.bind(this);
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
