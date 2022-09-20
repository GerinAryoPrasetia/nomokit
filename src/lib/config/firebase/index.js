import firebase from "firebase/app";
// authentication
import "firebase/auth";
// database
// import 'firebase/firestore';

// let firebaseConfig = {
//   apiKey: "AIzaSyA9gTNJjssXMEFlRgydvE6czinRym-1JBY",
//   authDomain: "nomo-scratch.firebaseapp.com",
//   projectId: "nomo-scratch",
//   storageBucket: "nomo-scratch.appspot.com",
//   messagingSenderId: "1016819352792",
//   appId: "1:1016819352792:web:07974e45deff2ecfa4c3ad",
//   measurementId: "G-FYVNKYCD38"
// };
// Initialize Firebase
//firebase.initializeApp(firebaseConfig);
// firebase.analytics();
let firebaseConfig = {
    apiKey: "AIzaSyDbESnR0b9tGjI8dhTYYAxT_12iV2mADvE",
    authDomain: "roboclub-1212.firebaseapp.com",
    projectId: "roboclub-1212",
    storageBucket: "roboclub-1212.appspot.com",
    messagingSenderId: "831073661765",
    appId: "1:831073661765:web:a6f020a53a4dd498d7442c",
    measurementId: "G-83R5N972SV",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

export default firebase;
