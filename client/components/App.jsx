import React from 'react';
import Header from './shared/Header';
import Footer from './shared/Footer';

export default class App extends React.Component {
  render() {
    return (
     <div>
        <Header />
        <h1>Habit App</h1>
        <Footer />
      </div>
    );
  }
}
