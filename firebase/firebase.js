// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
import {
    GoogleAuthProvider,
    GithubAuthProvider,
  } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "portfolio-next-gomzy.firebaseapp.com",
  projectId: "portfolio-next-gomzy",
  storageBucket: "portfolio-next-gomzy.firebasestorage.app",
  messagingSenderId: "817944420313",
  appId: "1:817944420313:web:235a933f92c4c1bce303c8",
  measurementId: "G-ESKVS13PL6"
};

const app = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()
const auth = getAuth(app)

export {auth,googleProvider,githubProvider}

// https://portfolio-next-gomzy.firebaseapp.com/__/auth/handler
