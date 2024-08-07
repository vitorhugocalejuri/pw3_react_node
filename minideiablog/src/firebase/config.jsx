// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeirq1nt4T1YI_E2Oz7RMZCxdGWGpgl0o",
  authDomain: "miniblog-vitorsilva.firebaseapp.com",
  projectId: "miniblog-vitorsilva",
  storageBucket: "miniblog-vitorsilva.appspot.com",
  messagingSenderId: "305901001893",
  appId: "1:305901001893:web:3011902bfb2d259a20414c",
  measurementId: "G-JXSFGJZ82L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);