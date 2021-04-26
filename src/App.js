import React from 'react';
import './App.css';

//Componentes creados
import Contador from './components/Contador'
//

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Hola mundo</h1>
      <Contador> </Contador>
      </header>



    </div>
  );
}

export default App;

//Header anterior se borró
//Logo lo hace por medio de un import

//import logo from './logo.svg';
//#region  <header className="App-header">
      /*  <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      */
//#endregion