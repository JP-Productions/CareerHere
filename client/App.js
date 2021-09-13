import React, { Component } from 'react';
import Landing from './containers/Landing';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Landing />;
  }
}

export default App;
