import { darkTheme } from "@/hooks/useTheme";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { LogIn, Search } from "lucide-react";
import { NavFeatures } from "../Navbar";
import Link from "next/link";
import SideBarFeature from "./sub-components/sideBarFeature";

function Sidebar({ close }: { close: () => void }) {
  const [searchText, setSearchText] = useState<string>("");
  const [hovered, setHovered] = useState<{
    searchBtn?: boolean;
    login?: boolean;
  }>({
    searchBtn: false,
    login: false,
  });
  return (
    <div className="flex h-screen w-[100%] xl:hidden absolute z-50 bg-[rgba(0,0,0,0.8)] top-16 right-0 justify-end select-none">
      <div
        className="flex-1 flex justify-center cursor-pointer"
        onClick={() => close()}
      >
        <span className="text-center mt-3 text-xl">Tap anywhere to close.</span>
      </div>
      <div
        className="h-ful w-[30%] min-w-[220px] max-w-[320px] px-3 py-4 flex flex-col justify-between pb-20"
        style={{ backgroundColor: darkTheme.rootBg }}
      >
        <div>
          <div className="border rounded-xl relative">
            <Input
              placeholder="Search blog..."
              autoFocus={true}
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
          <Link
            href={"/login"}
            onClick={() => close()}
            className="flex items-center gap-2 w-fit"
            onMouseOver={() => setHovered({ login: true })}
            onMouseLeave={() => setHovered({ login: false })}
            style={{
              color: hovered.login ? darkTheme.textLight : darkTheme.text,
            }}
          >
            <LogIn />
            <span className="px-3 py-1 w-fit">Login</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
