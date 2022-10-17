import * as firebase from "firebase/app"

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBkkX-y_DpL2Dfz0IjL9ug11VKh9Azx7G0",
  authDomain: "login-7da10.firebaseapp.com",
  projectId: "login-7da10",
  storageBucket: "login-7da10.appspot.com",
  messagingSenderId: "878285863888",
  appId: "1:878285863888:web:9491224e89e866b429d7d5",
  measurementId: "G-13Q7863SPK"
};

// Initialize Firebase
let firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAuth = getAuth();
let firebaseDb = getDatabase()

export {firebaseAuth, firebaseDb}