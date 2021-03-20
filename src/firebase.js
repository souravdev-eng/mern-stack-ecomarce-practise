import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyA-4vD-OVJZIQhjM9wUEZDItlH3twaz5xc',
  authDomain: 'e-commerce-1845b.firebaseapp.com',
  projectId: 'e-commerce-1845b',
  storageBucket: 'e-commerce-1845b.appspot.com',
  messagingSenderId: '211868509812',
  appId: '1:211868509812:web:446a12d5df79c098095321',
};

// initialize firebase app
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

// export
export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
