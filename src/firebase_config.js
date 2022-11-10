import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  databaseURL: "https://{posting-83d20}.firebaseio.com",

  apiKey: "AIzaSyA1AvRQtqL4l86tyne9vAd13QIyOqgF4Xw",
  authDomain: "posting-83d20.firebaseapp.com",
  projectId: "posting-83d20",
  storageBucket: "posting-83d20.appspot.com",
  messagingSenderId: "490799739105",
  appId: "1:490799739105:web:3aa51e71b7e0f826dfc7a0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

firebase.firestore().settings({ experimentalForceLongPolling: true });

const db = firebaseApp.firestore();

export const auth = getAuth(firebaseApp);

export { db };
export default firebaseApp;
