import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCovFmGm3y60SPP03QPW20mf_vDwC-X49c",
    authDomain: "my-tech-shop-db.firebaseapp.com",
    databaseURL: "https://my-tech-shop-db.firebaseio.com",
    projectId: "my-tech-shop-db",
    storageBucket: "my-tech-shop-db.appspot.com",
    messagingSenderId: "34653304869",
    appId: "1:34653304869:web:bfc05e3515ecbe36c127cc",
    measurementId: "G-G8BGVCLWBF"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt:'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase