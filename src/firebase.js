import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDzDfnyf3y92K5hHSfD1OqGCVc4rIb-Z6s',
  authDomain: 'clone-83ea3.firebaseapp.com',
  databaseURL: 'https://clone-83ea3.firebaseio.com',
  projectId: 'clone-83ea3',
  storageBucket: 'clone-83ea3.appspot.com',
  messagingSenderId: '132545710636',
  appId: '1:132545710636:web:9523da1a4adcc705441f89',
  measurementId: 'G-WDDP51GK1L'
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }
