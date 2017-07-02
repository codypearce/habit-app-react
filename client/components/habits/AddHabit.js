import React, { Component } from 'react';

export default class AddHabit extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      value: '',
    };
  }
  addHabit() {
    this.props.addHabit(this.state.value);
    this.setState({
      value: ''
    })
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {

    return (
      <div className="col-xs-10 col-xs-offset-1">
       <input value={this.state.value} onChange={(event) => this.handleChange(event)} />
       <button onTouchTap={() => this.addHabit()}>Add Habit</button>
     </div>
    );
  }
}
