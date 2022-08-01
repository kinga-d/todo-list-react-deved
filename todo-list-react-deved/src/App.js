import React from "react";
import './App.css';

//Importing components
import Form from "./components/Form";

function App() {
  return (
      <div className="App">
          <header>
              <h1>Lista Maszy</h1>
          </header>
          <Form />
      </div>
  );
}

export default App;