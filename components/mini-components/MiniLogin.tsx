import { auth, googleProvider } from "@/firebase/firebase";
import { darkTheme } from "@/hooks/useTheme";
import Image from "next/image";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setAdmin } from "../../store/slices/admin.slice";
import { LogIn, X } from "lucide-react";
import { AppDispatch } from "@/store/store";
import { signInWithPopup } from "firebase/auth";

function MiniLogin({ close }: { close: () => void }) {
  const dispatch = useDispatch<AppDispatch>();
  const [hover, setHover] = useState<{ logout: boolean }>({ logout: false });

  const handleLoginThroughGoogle = async () => {
    await signInWithPopup(auth, googleProvider);
    dispatch(setAdmin(auth.currentUser));
    close();
  };
  // const handleLoginThroughGithub = async () => {
  //   await loginWithGithub();
  // };

  return (
    <div>
      <div
        className="p-4 absolute right-3 top-20 h-fit select-none  border rounded-xl shadow-2xl smooth-render-fast"
        style={{ backgroundColor: darkTheme.rootBg }}
      >
        <span className="absolute right-2 top-2 cursor-pointer" onClick={close}><X size={14} /></span>
        <div className="flex flex-col items-center gap-2">
          <div className="p-2 flex items-center gap-2">
            <Image
              src={auth?.currentUser?.photoURL ?? "/no-profile.jpg"}
              alt="IMG"
              width={30}
              height={30}
              className="rounded-full"
            />
            <span>{"Anonymous user"}</span>
          </div>
          <span className="w-[60%] border-b" />
          <div
            className="flex gap-2 cursor-pointer smooth"
            style={{
              color: hover.logout ? darkTheme.textLight : darkTheme.text,
            }}
            onMouseOver={() =>
              setHover({
                logout: true,
              })
            }
            onMouseLeave={() =>
              setHover({
                logout: false,
              })
            }
            onClick={handleLoginThroughGoogle}
          >
            {"Login"}
            <span>
              <LogIn />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiniLogin;
