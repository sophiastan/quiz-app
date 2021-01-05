import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './Home';
import Quiz from './quiz';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Route exact path="/" component={Home} />
          <Route exact path="/quiz" component={Quiz} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
