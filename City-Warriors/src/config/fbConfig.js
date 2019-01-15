import * as firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBsSEWFljnveYxam5mbEQqRKZ2xacUi3LY",
    authDomain: "publicgood-45291.firebaseapp.com",
    databaseURL: "https://publicgood-45291.firebaseio.com",
    projectId: "publicgood-45291",
    storageBucket: "publicgood-45291.appspot.com",
    messagingSenderId: "594592201335"
  };
  firebase.initializeApp(config);

  firebase.firestore().settings()