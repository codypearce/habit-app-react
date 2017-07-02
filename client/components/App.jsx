import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import Header from './shared/Header';
import Footer from './shared/Footer';
import AddHabit from './modals/AddHabit';
import HabitList from './habits/HabitList';

export default class App extends React.Component {
  render() {
    return (
     <div>
        <Header />
        <HabitList />
        <AddHabit />
        <Footer />
      </div>
    );
  }
}
