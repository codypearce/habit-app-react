import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import Add from 'material-ui/svg-icons/content/add';

export default class AddHabit extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
    };
  }

  handleOpen() {
    this.setState({open: true});
  };

  handleClose() {
    this.setState({open: false});
  };
  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={() => this.handleClose()}
      />,
      <FlatButton
        label="Add"
        primary={true}
        onTouchTap={() => this.handleClose()}
      />,
    ];
    return (
      <div>
       <FloatingActionButton onTouchTap={() => this.handleOpen()} className="addHabitBtn">
        <Add />
       </FloatingActionButton>
       <Dialog
         title="Add Habit"
         actions={actions}
         modal={false}
         open={this.state.open}
         onRequestClose={() => this.handleClose()}
       >
       <TextField floatingLabelText="Name" />
       </Dialog>
     </div>
    );
  }
}
