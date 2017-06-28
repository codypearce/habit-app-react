import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Add from 'material-ui/svg-icons/content/add';

export default class AddHabit extends React.Component {
  _openModal() {
    console.log('opened')
  }
  render() {
    return (
     <FloatingActionButton onTouchTap={() => this._openModal()} className="addHabitBtn">
      <Add />
     </FloatingActionButton>
    );
  }
}
