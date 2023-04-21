import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: 'AIzaSyAqpxEYVthPY82C1M5x-z-rma-lbnA1VzE',
    authDomain: 'clientlist-7430c.firebaseapp.com',
    projectId: 'clientlist-7430c',
    storageBucket: 'clientlist-7430c.appspot.com',
    messagingSenderId: '615204846147',
    appId: '1:615204846147:web:4246a05f72c7e1dfc372f6',
    measurementId: 'G-8E2B84N825'
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };

