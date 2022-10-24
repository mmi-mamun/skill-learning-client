// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA9lg2s1Y97zGCieEWXLHCgttFV70mTclo",
    authDomain: "auth-skill-learning-project.firebaseapp.com",
    projectId: "auth-skill-learning-project",
    storageBucket: "auth-skill-learning-project.appspot.com",
    messagingSenderId: "97495600565",
    appId: "1:97495600565:web:e15381de7f3e0900061dfc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;