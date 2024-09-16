import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js'

// If you enabled Analytics in your project, add the Firebase SDK for Google Analytics
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js'

// Add Firebase products that you want to use
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js'
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js'

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyAOTD04xQC3NPSp6_WiXBuTJR2D6YPA2ac",
    authDomain: "game2study.firebaseapp.com",
    databaseURL: "https://game2study-default-rtdb.firebaseio.com",
    projectId: "game2study",
    storageBucket: "game2study.appspot.com",
    messagingSenderId: "66347308815",
    appId: "1:66347308815:web:528eaa90a09c5e967b107a",
    measurementId: "G-R382H0H6HL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
