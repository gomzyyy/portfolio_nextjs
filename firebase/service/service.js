import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
  signOut,
} from "firebase/auth";
import { googleProvider, githubProvider, auth } from "../firebase.js";

export const loginWithEmailAndPassword = async ({ email, password }, next) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    if (typeof next === "function") {
      next();
    }
  } catch (error) {
    return error;
  }
};
export const loginWithGoogle = async (next) => {
  try {
   const res = await signInWithPopup(auth, googleProvider);
    if (typeof next === "function") {
      next();
    }
    return res;
  } catch (error) {
    return error;
  }
};
export const loginWithGithub = async (next) => {
  try {
    await signInWithPopup(auth, githubProvider);
    if (typeof next === "function") {
      next();
    }
  } catch (error) {
    return error;
  }
};
export const logoutFromFirebase = async (next) => {
  try {
    await signOut();
  } catch (error) {
    return error;
  }
};
