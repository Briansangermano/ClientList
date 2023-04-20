import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyAqpxEYVthPY82C1M5x-z-rma-lbnA1VzE',
    authDomain: 'clientlist-7430c.firebaseapp.com',
    projectId: 'clientlist-7430c',
    storageBucket: 'clientlist-7430c.appspot.com',
    messagingSenderId: '615204846147',
    appId: '1:615204846147:web:4246a05f72c7e1dfc372f6',
    measurementId: 'G-8E2B84N825'
};

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

export default firestore;