import React from 'react';
import NumberOp from "./component/numberOp";
import './App.css';

function App() {
  return (
    <div className="App" >
      <div style={{
        topPadding: "10px",
        display: "grid",
        gridTemplateColumns:"auto auto auto"
      }}>
        <NumberOp start={111} />
        <NumberOp start={3} />
        <NumberOp start={20} />
        <NumberOp start={30} />
        <NumberOp start={30} />
        <NumberOp start={1} />
        <NumberOp start={25} />
        <NumberOp start={10000} />
        <NumberOp start={25} />
      </div>
    </div>
  );
}

export default App;
