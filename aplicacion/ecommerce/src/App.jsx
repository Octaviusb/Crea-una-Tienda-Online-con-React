/* eslint-disable no-unused-vars */
import React from 'react';

const API_URL = import.meta.env.VITE_API_URL;

function App() {
  return (
    <div>
      <h1>Hola {API_URL}</h1>
    </div>
  );
}

export default App;
