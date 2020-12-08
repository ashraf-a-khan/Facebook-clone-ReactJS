import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBccBhhmqg1vhrqaj_Qsszn6lFjwUd_9kE",
  authDomain: "facebook-clone-b1735.firebaseapp.com",
  projectId: "facebook-clone-b1735",
  storageBucket: "facebook-clone-b1735.appspot.com",
  messagingSenderId: "469986627942",
  appId: "1:469986627942:web:560aacbd59ab8a4350f8a7",
  measurementId: "G-6SX0WLEJB8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
