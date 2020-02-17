import React, { useContext } from 'react';
import HomePage from './Pages/Home/HomePage';
import ListingPage from './Pages/Listing/ListingPage';
import { AppState } from './context';
import { BrowserRouter, Route, useParams, useLocation } from 'react-router-dom';
import Listing from './Pages/Listing/Listing1';

function App() {
  const appState = useContext(AppState);
  const { data } = appState;

  return (
    data.length !== 0 ? 
    <BrowserRouter>
      <Route exact path="/" render={() => <HomePage />} />
      <Route exact path="/:id" render={() => <ListingPage listing={data[0]} /> } />
    </BrowserRouter>
    : null
  );
}

export default App;
