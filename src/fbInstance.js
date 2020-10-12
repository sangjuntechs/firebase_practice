import * as firebase from 'firebase/app'
import 'firebase/auth';

let firebaseConfig = {
    apiKey: "AIzaSyCi4bHp4MzlDN-3GzNtVwL4q4y2q4SSbvU",
    authDomain: "fir-practice-f1246.firebaseapp.com",
    databaseURL: "https://fir-practice-f1246.firebaseio.com",
    projectId: "fir-practice-f1246",
    storageBucket: "fir-practice-f1246.appspot.com",
    messagingSenderId: "794500505711",
    appId: "1:794500505711:web:2f7bbea88f33b5cb89ad9a",
    measurementId: "G-FYRBX7V78L"
  };

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;

export const authService = firebase.auth();