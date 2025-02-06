"use client";
import React, { useCallback, useEffect } from "react";
import { useRouter } from "next/navigation.js";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store.jsx";
import { auth, googleProvider } from "@/firebase/firebase.js";
import { signInWithPopup } from "firebase/auth";
import WrappedWithReduxLogin from "./WrappedWithReduxLogin";
import { setAdmin } from "@/store/slices/admin.slice";

// const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

function Login(): React.JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const author = useSelector((s:RootState)=>s.admin.admin)
  const router = useRouter();
  // const [emailId, setEmailId] = useState<string>("");
  // const [password, setPassword] = useState<string>("");
  // const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  // const validateCredientials = (): boolean => {
  //   const emailOk = emailRegex.test(emailId);
  //   if (!emailOk || emailId.trim().length === 0) {
  //     toast.error("Please enter a valid email");
  //     return false;
  //   } else if (password.trim().length > 16 || password.trim().length < 4) {
  //     toast.error("Password should between 4-16 characters.");
  //     return false;
  //   }
  //   return true;
  // };

  const navigateAfterLogin = useCallback(() => router.back(),[router])

  const handleLoginThroughGoogle = async () => {
    await signInWithPopup(auth, googleProvider);
    dispatch(setAdmin(auth.currentUser));
    navigateAfterLogin();
  };

  useEffect(() => {
    if(author) navigateAfterLogin();
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
