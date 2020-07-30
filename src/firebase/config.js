import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyD2lxdbAVxuhn1soiwJKYgBSQB-rSEEl54",
    authDomain: "aleshere-firegram.firebaseapp.com",
    databaseURL: "https://aleshere-firegram.firebaseio.com",
    projectId: "aleshere-firegram",
    storageBucket: "aleshere-firegram.appspot.com",
    messagingSenderId: "328259354716",
    appId: "1:328259354716:web:5870be55c799b6e54e2699"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectFirestore, projectStorage, timestamp };