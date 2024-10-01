import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
   apiKey: "AIzaSyCeirq1nt4T1YI_E2Oz7RMZCxdGWGpgl0o",
  authDomain: "miniblog-vitorsilva.firebaseapp.com",
  projectId: "miniblog-vitorsilva",
  storageBucket: "miniblog-vitorsilva.appspot.com",
  messagingSenderId: "305901001893",
  appId: "1:305901001893:web:3011902bfb2d259a20414c",
  measurementId: "G-JXSFGJZ82L"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)

export {db};