import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAOu0k_6UbL2HEb3jVlzFngzPe0EhU2ph4",
  authDomain: "instagram-clone-a84e2.firebaseapp.com",
  projectId: "instagram-clone-a84e2",
  storageBucket: "instagram-clone-a84e2.appspot.com",
  messagingSenderId: "494865521567",
  appId: "1:494865521567:web:38e898030600ecc9f47baa",
  measurementId: "G-HF1733DXKC"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
