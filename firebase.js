import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAh5MMmlm_OtTuhxxSYqz5N7g4e29t2gD0",
    authDomain: "whatsapp-2-aea12.firebaseapp.com",
    projectId: "whatsapp-2-aea12",
    storageBucket: "whatsapp-2-aea12.appspot.com",
    messagingSenderId: "626700181690",
    appId: "1:626700181690:web:128642f08191a5ca9b6283"
};

const app = !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app()

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };