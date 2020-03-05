import firebase from "firebase.app";
import "firebase/firestore";

const firebaseConfig = firebase.initializaApp({
  apiKey: "",
  authDomain: "",
  databseURL: "",
  projectId: "",
  storageBucket: "",
  messageSender: "",
  apiId: ""
});

export { firebaseConfig as firebase };
