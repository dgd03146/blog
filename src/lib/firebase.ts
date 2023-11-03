// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA_s0WKW5j1y-cz83s0nx65Wd5_FxEd22o',
  authDomain: 'junglog-90043.firebaseapp.com',
  projectId: 'junglog-90043',
  storageBucket: 'junglog-90043.appspot.com',
  messagingSenderId: '938901366367',
  appId: '1:938901366367:web:4d28af1a2d3b9303629dea',
  measurementId: 'G-XXMWWGCQZ6',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app)
