import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCmiT_hl4zjkoOUDLebG0LelC3H1sjs1HY",
    authDomain: "vatsan-2bf48.firebaseapp.com",
    projectId: "vatsan-2bf48",
    storageBucket: "vatsan-2bf48.appspot.com",
    messagingSenderId: "224637085884",
    appId: "1:224637085884:web:c9260aa03d7887973188b9",
    measurementId: "G-DST9TNFC4E"
  };



// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db