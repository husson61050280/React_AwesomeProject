import firebase from 'firebase';

//Add firebase config realtime Database

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyDeyqT5v7jmJeGX9Yvjc8wspx0BauQa5Do",
        authDomain: "facebook-messenger-clone-8af9b.firebaseapp.com",
        databaseURL: "https://facebook-messenger-clone-8af9b.firebaseio.com",
        projectId: "facebook-messenger-clone-8af9b",
        storageBucket: "facebook-messenger-clone-8af9b.appspot.com",
        messagingSenderId: "733648119048",
        appId: "1:733648119048:web:cb20868beb78776ffab8bd",
        measurementId: "G-XG389B7VVF"
});

const db  = firebaseApp.firestore();

export default db ;