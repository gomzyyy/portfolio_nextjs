"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { darkTheme } from "@/hooks/useTheme";
import { Eye, EyeClosed } from "lucide-react";
import React, { useEffect, useState } from "react";
import {
  loginWithEmailAndPassword,
  loginWithGoogle,
  loginWithGithub,
} from "../../firebase/service/service.js";
import Image from "next/image";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation.js";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store.jsx";
import { auth, googleProvider } from "@/firebase/firebase.js";
import { getRedirectResult, signInWithPopup } from "firebase/auth";
import WrappedWithReduxLogin from "./WrappedWithReduxLogin";
import { setAdmin } from "@/store/slices/admin.slice";

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

function Login(): React.JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const [emailId, setEmailId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const validateCredientials = (): boolean => {
    const emailOk = emailRegex.test(emailId);
    if (!emailOk || emailId.trim().length === 0) {
      toast.error("Please enter a valid email");
      return false;
    } else if (password.trim().length > 16 || password.trim().length < 4) {
      toast.error("Password should between 4-16 characters.");
      return false;
    }
    return true;
  };

  const navigateAfterLogin = () => router.replace("/");

  const handleLoginThroughGoogle = async () => {
    await signInWithPopup(auth, googleProvider);
    dispatch(setAdmin(auth.currentUser));
    navigateAfterLogin();
  };
  const handleLoginThroughGithub = async () => {
    await loginWithGithub();
  };

  useEffect(() => {
    auth.currentUser && navigateAfterLogin();
  }, []);

  return (
    <WrappedWithReduxLogin
      handleLoginThroughGoogle={handleLoginThroughGoogle}
    />
  );
}

export default Login;

// const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
//   e.preventDefault();
//   const dataOk = validateCredientials();
//   if (!dataOk) return;
//   await loginWithEmailAndPassword({ email: emailId, password });
// };
