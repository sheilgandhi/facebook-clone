import firebase from 'firebase'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBwTPENNKU6ffgY47UqopwQP5AZgcyfsvE",
    authDomain: "facebook-clone-caaff.firebaseapp.com",
    projectId: "facebook-clone-caaff",
    storageBucket: "facebook-clone-caaff.appspot.com",
    messagingSenderId: "564100165880",
    appId: "1:564100165880:web:9068c106c6a9c7b4b00b0d",
    measurementId: "G-NQ1LWLX7HS"
  };

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

const db = app.firestore()
const storage = firebase.storage()

export { db, storage }