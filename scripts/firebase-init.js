// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);