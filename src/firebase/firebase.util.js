import firebase from 'firebase/app';

import 'firebase/firestore'

import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCPSnj0DbHSUsWQ3Z6Jhys1YsPsGvVzfjA",
    authDomain: "crwn-db-26d73.firebaseapp.com",
    projectId: "crwn-db-26d73",
    storageBucket: "crwn-db-26d73.appspot.com",
    messagingSenderId: "11645039190",
    appId: "1:11645039190:web:ac0271746d4a046709c1f7",
    measurementId: "G-EHBP9HP8R7"
  }

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})

export const signInWithGoogle = ()=> auth.signInWithPopup(provider)

export default firebase