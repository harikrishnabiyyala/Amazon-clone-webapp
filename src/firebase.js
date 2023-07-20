import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRxxPl4GzfUwH3kHblmTHN6Vf30jQDiBo",
  authDomain: "clone-efd24.firebaseapp.com",
  projectId: "clone-efd24",
  storageBucket: "clone-efd24.appspot.com",
  messagingSenderId: "376592469049",
  appId: "1:376592469049:web:fa652457a33594866cd1e8",
  measurementId: "G-VBPSTTSG3C"
};


// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };