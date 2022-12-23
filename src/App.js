import React from 'react';
import './App.css';

function App(props) {
  return (
      <div className="App">
          <h3>Kalvium Gallery - function component </h3>
          <div className="image">
              {props.imageData.map((ele) => {
                  return <img src={ele.img} alt="elephant" key={ele.id} />;
              })}
          </div>
      </div>
  );
}

export default App;