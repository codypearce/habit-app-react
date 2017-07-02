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
      value: '',
    };
  }
  addHabit() {
    this.props.addHabit(this.state.value);
    this.setState({
      value: ''
    })
    this.handleClose();
  }
  handleOpen() {
    this.setState({open: true});
  };

  handleClose() {
    this.setState({open: false});
  };

  handleChange(event) {
    this.setState({value: event.target.value});
  }

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
        onTouchTap={() => this.addHabit()}
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
       <TextField floatingLabelText="Name"  value={this.state.value} onChange={(event) => this.handleChange(event)} />
       </Dialog>
     </div>
    );
  }
}
