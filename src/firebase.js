import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXAbnPYOlIiYoIdw5K9QM4tLWYK_u7ljc",
  authDomain: "inspiron-e6c32.firebaseapp.com",
  projectId: "inspiron-e6c32",
  storageBucket: "inspiron-e6c32.appspot.com",
  messagingSenderId: "66752638395",
  appId: "1:66752638395:web:aac2247ed7785354a3e89e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
