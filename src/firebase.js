import firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDys_BoZlL08nFvCuB_ibcWVPjiUyZW7nw",
  authDomain: "previsao-tempo-1cd6e.firebaseapp.com",
  projectId: "previsao-tempo-1cd6e",
  storageBucket: "previsao-tempo-1cd6e.appspot.com",
  messagingSenderId: "230375311200",
  appId: "1:230375311200:web:2c6d68cf76cb50e68a8005",
  measurementId: "G-WMGG5K9R32"
};

const db = firebase.firestore();
const storage = firebase.storage();
const auth = firebase.auth();
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);