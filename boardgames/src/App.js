import React, { useContext, useParams } from 'react';
import HomePage from './Pages/Home/HomePage';
import ListingPage from './Pages/Listing/ListingPage';
import { AppState } from './context';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  const appState = useContext(AppState);
  const { data } = appState;
  const { id } = useParams();

  return (
    <BrowserRouter>
      <Route exact path="/" render={() => <HomePage />} />
      <Route path="/:id" render={() => <ListingPage val={data[id]} /> } />
    </BrowserRouter>
  );
}

export default App;
