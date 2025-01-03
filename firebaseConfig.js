// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyC_8AowfOXLZ8J_HwumPwIL-Jqh4eg2Beo",
  authDomain: "mediguide-ai-dev.firebaseapp.com",
  databaseURL: "https://mediguide-ai-dev-default-rtdb.firebaseio.com",
  projectId: "mediguide-ai-dev",
  storageBucket: "mediguide-ai-dev.firebasestorage.app",
  messagingSenderId: "58774430142",
  appId: "1:58774430142:web:084d708dc78457929d59ef",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);
export { app, auth, analytics, db };
