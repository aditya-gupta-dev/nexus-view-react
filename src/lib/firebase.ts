import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCHckKgPwHZWl8Lc3dQt9bMOGM2oFjLKU4",
  authDomain: "nexusine.firebaseapp.com",
  projectId: "nexusine",
  storageBucket: "nexusine.firebasestorage.app",
  messagingSenderId: "659795144019",
  appId: "1:659795144019:web:f22bf429a40f766bdf85a6",
  measurementId: "G-4MT480PZPM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 