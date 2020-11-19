import firebase from 'firebase';
require ('@firebase/firestore') 
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB4WhkHIOgiLmWeZoKl062ExeuQbom_rfg",
    authDomain: "bartersystemapp-d1baa.firebaseapp.com",
    databaseURL: "https://bartersystemapp-d1baa.firebaseio.com",
    projectId: "bartersystemapp-d1baa",
    storageBucket: "bartersystemapp-d1baa.appspot.com",
    messagingSenderId: "1081003314263",
    appId: "1:1081003314263:web:6b62c191618279720de712"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()