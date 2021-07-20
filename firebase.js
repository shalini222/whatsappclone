import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyB8d4Mi33bxv_4dfr2m-2pKSecqBsmSj1w",
  authDomain: "wpcl333.firebaseapp.com",
  projectId: "wpcl333",
  storageBucket: "wpcl333.appspot.com",
  messagingSenderId: "928165102571",
  appId: "1:928165102571:web:d505a45e5c74df14548fae"
};


const app = !firebase.apps.length
	? firebase.initializeApp(firebaseConfig)
	: firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };