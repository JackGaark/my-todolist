import firebase from "firebase.app";
import "firebase/firestore";

const firebaseConfig = firebase.initializaApp({
  apiKey: "AIzaSyBMGdVFLo20ZpyZgv7PFTmq3FTZofqIPT8",
  authDomain: "my-todolist-6d0fd.firebaseapp.com",
  databaseURL: "https://my-todolist-6d0fd.firebaseio.com",
  projectId: "my-todolist-6d0fd",
  storageBucket: "my-todolist-6d0fd.appspot.com",
  messagingSenderId: "436608999888",
  appId: "1:436608999888:web:4db14868c13395fb6719d5"
});

export { firebaseConfig as firebase };
