import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAoiRJDHGiediz7DST3pwbaImim-6uXg_s",
  authDomain: "konnect-ba540.firebaseapp.com",
  projectId: "konnect-ba540",
  storageBucket: "konnect-ba540.appspot.com",
  messagingSenderId: "611504961387",
  appId: "1:611504961387:web:c8638e1595b3597e36fe2e",
  measurementId: "G-3DCTFC2JCY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
