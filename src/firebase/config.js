import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional 
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpLViRHr0pxo7nKKqCLGWLS-Qe4YG9LXs",
  authDomain: "vue-cli-practice-45048.firebaseapp.com",
  projectId: "vue-cli-practice-45048",
  storageBucket: "vue-cli-practice-45048.appspot.com",
  messagingSenderId: "684461468919",
  appId: "1:684461468919:web:d4741661a98796e0f837f2",
  measurementId: "G-LHQDVV11CT"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFirestore, timestamp }