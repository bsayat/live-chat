import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDSaWQFzrvSrDZWz2QiUgRKS7Yu8as7IAU",
  authDomain: "vue-firebase-fe577.firebaseapp.com",
  projectId: "vue-firebase-fe577",
  storageBucket: "vue-firebase-fe577.appspot.com",
  messagingSenderId: "750084098757",
  appId: "1:750084098757:web:c4f9129768f70a06dbfeac",
};

/* Initialize firebase */
firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, timestamp, projectAuth };
