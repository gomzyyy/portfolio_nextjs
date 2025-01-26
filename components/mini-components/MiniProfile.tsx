import { darkTheme } from "@/hooks/useTheme";
import { AppDispatch, RootState } from "@/store/store";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeAdmin } from "../../store/slices/admin.slice";
import { LogOut, X } from "lucide-react";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase/firebase";
import Image from "next/image";

function MiniProfile({ close }: { close: () => void }) {
  const dispatch = useDispatch<AppDispatch>();
  const admin = useSelector((s: RootState) => s.admin.admin);
  const [hover, setHover] = useState<{ logout: boolean }>({ logout: false });

  const logout = async () => {
    try {
      const res = confirm("Are you sure to logout?");
      if (res) {
        await signOut(auth);
        dispatch(removeAdmin());
        close();
      } else {
        return;
      }
    } catch (error) {
      throw new Error(
        error instanceof Error ? error.message : "Unable to logout"
      );
    }
  };

  return (
    <div className="hidden xl:flex">
      <div
        className="p-4 absolute right-3 top-20 h-fit select-none  border rounded-xl shadow-2xl"
        style={{ backgroundColor: darkTheme.rootBg }}
      >
        <span className="absolute right-2 top-2 cursor-pointer" onClick={close}>
          <X size={14} />
        </span>
        <div className="flex flex-col items-center gap-2">
          <div className="p-2 flex items-center gap-2">
            <Image
              src={auth?.currentUser?.photoURL ?? "/no-profile.jpg"}
              alt="IMG"
              width={30}
              height={30}
              className="rounded-full"
            />
            <span>{admin.displayName}</span>
          </div>
          <span className="w-[60%] border-b" />
          <div
            className="flex gap-2 cursor-pointer smooth"
            onClick={logout}
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
          >
            {"Logout"}
            <span>
              <LogOut />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiniProfile;
