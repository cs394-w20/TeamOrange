import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "nu-hiit.firebaseapp.com",
  databaseURL: "https://nu-hiit.firebaseio.com",
  projectId: "nu-hiit",
  storageBucket: "nu-hiit.appspot.com",
  messagingSenderId: "719477044477",
  appId: "1:719477044477:web:f2347fc0247c9e3190ba94",
  measurementId: "G-ZLZB3V2C2V"
};

firebase.initializeApp(firebaseConfig);

export const firebaseDb = firebase.database().ref();
