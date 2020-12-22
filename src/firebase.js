import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCgFR-L7T1Ru29Zmf3hSvmsfHT_khRnPpM",
    authDomain: "clone-fdcab.firebaseapp.com",
    databaseURL: "https://clone-fdcab.firebaseio.com",
    projectId: "clone-fdcab",
    storageBucket: "clone-fdcab.appspot.com",
    messagingSenderId: "932719203017",
    appId: "1:932719203017:web:e1a5ea3f9731510d56f318",
    measurementId: "G-24BKY22YM7"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };