import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import App from './App.jsx';

import {blue500} from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: blue500,
  },
});


export default class Index extends React.Component {
  render() {
    return (
     <MuiThemeProvider muiTheme={muiTheme}>
        <App />
     </MuiThemeProvider>
    );
  }
}
