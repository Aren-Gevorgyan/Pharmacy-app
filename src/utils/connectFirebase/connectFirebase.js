import firebase from 'firebase/app';
import 'firebase/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyC1Bs40W5Gn0iX2wgeKu6DAmlwKy92wCvE",
    authDomain: "pharmacy-app-9dd43.firebaseapp.com",
    projectId: "pharmacy-app-9dd43",
    storageBucket: "pharmacy-app-9dd43.appspot.com",
    messagingSenderId: "325364617421",
    appId: "1:325364617421:web:1debb8aeab3d44cbd0d984"
});

const db = firebase.firestore();

export default db;