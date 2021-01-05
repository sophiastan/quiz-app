import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="app">
      <div className="jumbotron text-center" style={{backgroundColor: "#252d4a"}}>
        <h1>Quiz App</h1>
      </div>
      <div className="col text-center">
        <Link to="/quiz">
          <button>Start</button>
        </Link>
      </div>
    </div>
  )
}

export default Home;