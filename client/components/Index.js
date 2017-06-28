import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './App.jsx';

export default class Index extends React.Component {
  render() {
    return (
     <MuiThemeProvider>
      <App />
     </MuiThemeProvider>
    );
  }
}
