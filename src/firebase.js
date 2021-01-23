import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

// traemos la configuracion de firebase

var firebaseConfig = {
  apiKey: "AIzaSyDsTkGGEgWQjFBsbnf5w-2EIOigVA0Isos",
  authDomain: "bd-vue-login.firebaseapp.com",
  projectId: "bd-vue-login",
  storageBucket: "bd-vue-login.appspot.com",
  messagingSenderId: "589159545490",
  appId: "1:589159545490:web:eab0f785bf2244783dc44b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const db = firebase.firestore()
const auth = firebase.auth()


export {db , auth }