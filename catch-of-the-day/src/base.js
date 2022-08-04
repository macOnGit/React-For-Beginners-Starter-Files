import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCcFf-QthBPYluHp2XXSBpcTKTpu4q6OS4',
  authDomain: 'catch-of-the-day-cmac.firebaseapp.com',
  databaseURL: 'https://catch-of-the-day-cmac-default-rtdb.firebaseio.com',
  // projectId: 'catch-of-the-day-cmac',
  // storageBucket: 'catch-of-the-day-cmac.appspot.com',
  // messagingSenderId: '409370225255',
  // appId: '1:409370225255:web:0dc7d6348091e3517842c2',
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
