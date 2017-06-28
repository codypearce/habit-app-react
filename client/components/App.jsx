import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import Header from './shared/Header';
import Footer from './shared/Footer';
import AddHabit from './modals/AddHabit';


export default class App extends React.Component {
  render() {
    return (
     <div>
        <Header />
        <h1>Habit App</h1>
        <AddHabit />
        <Footer />
      </div>
    );
  }
}
