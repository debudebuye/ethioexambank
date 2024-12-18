// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4CUrsGMlfAU49eYZ-OiK_XqtnpjV8OB4",
  authDomain: "ethioexambank2024.firebaseapp.com",
  projectId: "ethioexambank2024",
  storageBucket: "ethioexambank2024.firebasestorage.app",
  messagingSenderId: "878800004470",
  appId: "1:878800004470:web:126397d878a919bc688657",
  measurementId: "G-G31XY6Z7BQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth, app }
// const analytics = getAnalytics(app);