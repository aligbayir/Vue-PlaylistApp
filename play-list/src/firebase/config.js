import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDWfmp5pkQ4aYAHbGNcoO0xgfMpECAyKF8",
  authDomain: "playlist-vue-7ff7d.firebaseapp.com",
  projectId: "playlist-vue-7ff7d",
  storageBucket: "playlist-vue-7ff7d.appspot.com",
  messagingSenderId: "1001962226523",
  appId: "1:1001962226523:web:82434517bdc2ac840cd07e"
};

firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage()

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {projectFirestore, projectAuth, timestamp,projectStorage};