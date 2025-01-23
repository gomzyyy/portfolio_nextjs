"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { darkTheme } from "@/hooks/useTheme";
import { Eye, EyeClosed } from "lucide-react";
import React, { useState } from "react";
import {
  loginWithEmailAndPassword,
  loginWithGoogle,
  loginWithGithub,
} from "../../firebase/service/service.js";
import Image from "next/image";
import { toast, ToastContainer } from "react-toastify";

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

function Login(): React.JSX.Element {
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

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const dataOk = validateCredientials();
    if (!dataOk) return;
    await loginWithEmailAndPassword({ email: emailId, password });
  };
  const handleLoginThroughGoogle = async () => {
    await loginWithGoogle();
  };
  const handleLoginThroughGithub = async () => {
    await loginWithGithub();
  };

  return (
    <div className="flex items-center justify-center h-screen select-none">
      <ToastContainer
        stacked
        autoClose={4000}
        style={{ cursor: "grab" }}
        draggable
        theme="dark"
      />
      <div>
        <div
          className="px-4 pt-2 pb-4 border-2 rounded-xl flex flex-col items-center"
          style={{
            borderColor: darkTheme.border,
            color: darkTheme.textLight,
          }}
        >
          <div
            className="text-center border-b w-[80%] flex-semibold mb-2"
            style={{ borderColor: darkTheme.border }}
          >
            Login here!
          </div>

          <form
            onSubmit={(e) => handleLogin(e)}
            className="flex flex-col gap-4"
          >
            <div>
              <Input
                placeholder="email..."
                type="email"
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
              />
            </div>
            <div className="relative">
              <Input
                placeholder="password..."
                type={isPasswordVisible ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                className="absolute right-2 top-[28%] cursor-pointer"
                onClick={() => setIsPasswordVisible((p) => !p)}
              >
                {isPasswordVisible ? (
                  <Eye size={14} />
                ) : (
                  <EyeClosed size={14} />
                )}
              </span>
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
          <div className="text-center text-sm font-bold">•</div>
          <Button className="w-full" onClick={handleLoginThroughGoogle}>
            Login with
            <Image
              src={"/google-icon.png"}
              alt="Google"
              width={20}
              height={20}
            />
          </Button>
          <div className="text-center text-sm font-bold">•</div>
          <Button className="w-full" onClick={handleLoginThroughGithub}>
            Login with
            <Image src={"/github.png"} alt="Google" width={20} height={20} />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
