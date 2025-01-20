// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const environment = {
    production: false,
    firebase :{
        apiKey: "AIzaSyBqS8NxXbfcGLcKXrLIIT-d9N9XWmv_YFw",
        authDomain: "mbarkigroupe.firebaseapp.com",
        projectId: "mbarkigroupe",
        storageBucket: "mbarkigroupe.appspot.com",
        messagingSenderId: "693752349619",
        appId: "1:693752349619:web:81305ebdccca051169c1c6",
        measurementId: "G-CXKK1JSF3J"
},
};  
// Initialize Firebase
const app = initializeApp(environment.firebase);
const analytics = getAnalytics(app);