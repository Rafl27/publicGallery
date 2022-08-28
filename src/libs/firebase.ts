import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDJ6z-7m5aymutu2nUXY9j0nQUHrY__EAo",
    authDomain: "publicgallery2.firebaseapp.com",
    projectId: "publicgallery2",
    storageBucket: "publicgallery2.appspot.com",
    messagingSenderId: "347555135810",
    appId: "347555135810:web:f5f925d80b97a0847d08db",
    measurementId: "G-LK1379Z46G",
};

const firebaseApp = initializeApp(firebaseConfig)

export const storage = getStorage(firebaseApp)

