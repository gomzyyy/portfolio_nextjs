"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { NavFeaturesType } from "@/types";
import Link from "next/link";
import NavFeature from "./mini-components/NavFeature";
import { MoonIcon, SunIcon } from "lucide-react";

const NavFeatures: NavFeaturesType[] = [
  {
    name: "Home",
    action: () => {},
    navigation: "/",
  },
  {
    name: "Blogs",
    action: () => {},
    navigation: "/blogs",
  },
  {
    name: "Conversation",
    action: () => {},
    navigation: "/chat",
  },
  {
    name: "Contact",
    action: () => {},
    navigation: "/contact",
  },
];
const Navbar: React.FC = (): React.JSX.Element => {
  const [searchText, setSearchText] = useState<string>("");
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const handleToogleTheme = () =>
    theme === "light" ? setTheme("dark") : setTheme("light");
  return (
    <div className="h-16 border-b-2 flex px-6 font-bold items-center justify-between">
      <div className="flex cursor-pointer">
        <Link href={"/"}>Portfolio_Gomzy</Link>
      </div>
      <div className="flex gap-8">
        <div>
          <Input
            className="w-[400px] hover:ring-1 hover:ring-gray-300 placeholder-gray-500"
            placeholder="Search blogs"
            onKeyDown={(e) => e.key === "Enter" && console.log(searchText)}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          {NavFeatures.map((f, i) => (
            <NavFeature key={i} f={f} click={f.action} />
          ))}
        </div>
      </div>
      <div className="flex items-center gap-2 select-none">
        <div className="px-2 py-1 border rounded-sm hover:bg-gray-200 cursor-pointer" onClick={handleToogleTheme}
        aria-selected={false}
        >
          {theme === "dark" ? <SunIcon /> : <MoonIcon />}
        </div>
        <div className="px-2 py-1 border rounded-sm hover:bg-gray-200 cursor-pointer">
          <Link href={"/login"}>Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
