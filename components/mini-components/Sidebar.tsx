import { darkTheme } from "@/hooks/useTheme";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { LogIn, LogOut, Search } from "lucide-react";
import { NavFeatures } from "../Navbar";
import Link from "next/link";
import SideBarFeature from "./sub-components/sideBarFeature";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import Image from "next/image";
import { auth } from "@/firebase/firebase";
import { removeAdmin } from "@/store/slices/admin.slice";
import { signOut } from "firebase/auth";

type sidebarPropType = {
  close: () => void;
  opened: boolean;
  setOpened: (arg:boolean) => void;
};

const Sidebar: React.FC<sidebarPropType> = ({
  close,
  opened,
  setOpened,
}): React.JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();
  const [searchText, setSearchText] = useState<string>("");
  const [hovered, setHovered] = useState<{
    searchBtn?: boolean;
    login?: boolean;
    logout?: boolean;
  }>({
    searchBtn: false,
    login: false,
    logout: false,
  });

  const handleToogleSidebar = () => {
    setOpened(false);
    setTimeout(() => {
      close();
    }, 300);
  };

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
    <div className="flex h-screen w-[100%] xl:hidden absolute z-50 bg-[rgba(0,0,0,0.6)] top-16 right-0 justify-end select-none smooth-render-slow2">
      <div className="flex-1 flex justify-center" onClick={handleToogleSidebar}>
        <span className="text-center mt-3 text-xl">Tap anywhere to close.</span>
      </div>
      <div
        className={`h-full w-[30%] lg:min-w-px min-w-[220px] max-w-[320px] px-3 py-4 flex flex-col justify-between pb-36 sm:pb-20 smooth-sidebar-${
          opened ? "open" : "close"
        } overflow-auto`}
        style={{ backgroundColor: darkTheme.rootBg }}
      >
        {/* min-w-[220px] */}
        {/* <div> */}
        <div className="flex flex-col gap-3 mt-1">
          <div className="flex items-center gap-2 px-1">
            <Image
              src={auth?.currentUser?.photoURL ?? "/no-profile.jpg"}
              height={30}
              width={30}
              alt=""
              className="rounded-full"
            />
            <span className="text-nowrap">
              {auth?.currentUser?.displayName ?? "Anonymous User"}
            </span>
          </div>
          <div className="border rounded-xl relative min-w-[160px]">
            <Input
              placeholder="Search blog..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="border-none outline-none"
            />
            <span
              className="absolute right-1 top-[12%] cursor-pointer p-1 rounded-lg smooth"
              style={{
                color: hovered.searchBtn ? darkTheme.textLight : darkTheme.text,
                backgroundColor: hovered.searchBtn
                  ? "rgba(84, 84, 84,0.5)"
                  : "transparent",
              }}
              onMouseOver={() => setHovered({ searchBtn: true })}
              onMouseLeave={() => setHovered({ searchBtn: false })}
            >
              <Search size={18} />
            </span>
          </div>

          <div className="px-4 mt-4 flex flex-col gap-6">
            {NavFeatures.map((e, i) => (
              <SideBarFeature close={close} e={e} key={i} />
            ))}
          </div>
        </div>
        <div className="cursor-pointer px-4 border-t pt-3">
          {!auth?.currentUser ? (
            <Link
              href={"/login"}
              onClick={() => close()}
              className="flex items-center gap-2 w-fit smooth"
              onMouseOver={() => setHovered({ login: true })}
              onMouseLeave={() => setHovered({ login: false })}
              style={{
                color: hovered.login ? darkTheme.textLight : darkTheme.text,
              }}
            >
              <LogIn />
              <span className="px-3 py-1 w-fit">Login</span>
            </Link>
          ) : (
            <div
              className="flex items-center gap-2 w-fit smooth"
              onClick={logout}
              style={{
                color: hovered.logout ? darkTheme.textLight : darkTheme.text,
              }}
              onMouseOver={() =>
                setHovered({
                  logout: true,
                })
              }
              onMouseLeave={() =>
                setHovered({
                  logout: false,
                })
              }
            >
              <span className="px-3 py-1 w-fit">Logout</span>
              <LogOut />
            </div>
          )}
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Sidebar;
