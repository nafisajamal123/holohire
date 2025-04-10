// apiKey,authDomain..etc milega=>Firebase → Project Settings → General tab → Add web app → Copy config.
//got its code from firebase->holohire->web icon (</>)->Register the app (you can name it holohire-web)->copy code


import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbuYKgu0naTMhIEgHdcwOd4gxZsLZqB4U",
  authDomain: "holohire.firebaseapp.com",
  projectId: "holohire",
  storageBucket: "holohire.appspot.com",
  messagingSenderId: "318597283930",
  appId: "1:318597283930:web:c97fd35808f0f44eaa5863",
  measurementId: "G-NM9F3BXVX9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Optional: Initialize Firebase Analytics
const analytics = getAnalytics(app);

// Initialize Firebase Auth & Google Auth Provider
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Export for use in your React components
export { auth, provider, app };
