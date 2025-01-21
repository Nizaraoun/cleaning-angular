import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const environment = {
    production: false,
    firebase :{
        apiKey: "apiKey",
        authDomain: "mbarkigroupe.firebaseapp.com",
        projectId: "mbarkigroupe",
        storageBucket: "mbarkigroupe.appspot.com",
        messagingSenderId: "693752349619",
        appId: "ApiId",
        measurementId: "G-CXKK1JSF3J"
},
};  
// Initialize Firebase
const app = initializeApp(environment.firebase);
const analytics = getAnalytics(app);
