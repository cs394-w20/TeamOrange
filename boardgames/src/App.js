import React, { useEffect } from 'react';
import HomePage from './Pages/HomePage';
import { BrowserRouter, Route } from 'react-router-dom';
import { db } from './firebase';

function App() {

  useEffect(() => {
    const handleData = snap => {
      if (snap.val()) console.log(snap.val());
    }
    db.on('value', handleData, error => alert(error));
    return () => { db.off('value', handleData); };
  }, []);

  return (
    <BrowserRouter>
      <Route exact path="/" render={() => <HomePage />} />
    </BrowserRouter>
  );
}

export default App;
