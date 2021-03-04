import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// firebase init - add your own config here
const firebaseConfig = {
  apiKey: "AIzaSyBotaCHJK07S9J6efFscw1jvZSxwSAIgZ8",
  authDomain: "challengemaxrep.firebaseapp.com",
  databaseURL: "https://challengemaxrep-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "challengemaxrep",
  storageBucket: "challengemaxrep.appspot.com",
  messagingSenderId: "693905975044",
  appId: "1:693905975044:web:738f9d0eef6fee794b5251",
  measurementId: "G-JL5NYD21BC"
}
firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()
const auth = firebase.auth()

// collection references
const usersCollection = db.collection('users')

// export utils/refs
export default {
  db,
  auth,
  usersCollection
}
