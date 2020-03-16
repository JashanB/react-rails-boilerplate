import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Search from '../search'
import Place from '../place'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


class App extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     message: 'Click the button to load data!'
  //   }
  // }
  render() {
    return (
      <Router>
        <div className="App">
          <h1> Search box</h1>
          {/* <Search /> */}
          <Route path='/users/:id' render={(props) => <Search {...props}/>}/>
          <Route path='/users/:user_id/places/:id' render={(props) => <Place {...props}/>}/>
        </div>
      </Router>
    );
  }
}

export default App;
