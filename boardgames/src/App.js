import React from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from 'firebase/app';
import 'firebase/database';

function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyDZuvDGMSaJunf_6ii8UosPY6sQNr-o5d8",
    authDomain: "boar-d6042.firebaseapp.com",
    databaseURL: "https://boar-d6042.firebaseio.com",
    projectId: "boar-d6042",
    storageBucket: "boar-d6042.appspot.com",
    messagingSenderId: "97299538707",
    appId: "1:97299538707:web:232705d5421931947770e6",
    measurementId: "G-6C5XDWMN1Z"
  };
  
  firebase.initializeApp(firebaseConfig);
  const db = firebase.database().ref();

  useEffect(() => {
    const handleData = snap => {
      if (snap.val()) console.log(snap.val());
    }
    db.on('value', handleData, error => alert(error));
    return () => { db.off('value', handleData); };
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
    </div>
  );
}

export default App;
