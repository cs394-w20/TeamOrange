import React from 'react';
import HomePage from './Pages/HomePage';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Route exact path="/" render={() => <HomePage />} />
    </BrowserRouter>
  );
}

export default App;
