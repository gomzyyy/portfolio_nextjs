"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { NavFeaturesType } from "@/types";
import Link from "next/link";
import NavFeature from "./mini-components/NavFeature";
import { Github, Linkedin } from "lucide-react";
import { ProfileData } from "@/constants/data";
import { darkTheme } from "@/hooks/useTheme";

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
  {
    name: "Hire",
    action: () => {},
    navigation: "/hire",
  },
];

const Navbar: React.FC = (): React.JSX.Element => {
  const [searchText, setSearchText] = useState<string>("");
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [hovered, setHovered] = useState<{
    no: boolean;
  }>({
    no: false,
  });

  const handleToogleTheme = () =>
    theme === "light" ? setTheme("dark") : setTheme("light");

  return (
    <div
      className="h-16 border-b-2 flex px-6 font-bold items-center justify-between"
      style={{ color: darkTheme.text, borderBottomColor: darkTheme.border }}
    >
      <div className="flex cursor-pointer">
        <Link href={"/"} className="flex flex-col">
        <span className="text-xl">{"Portfolio"}</span>
          {/* <span className="text-xs">{"return("}</span>
          <div>
            <span className="text-xs">{"Portfolio."}</span>
            <span className="text-lg">{"GomzyDhingra"}</span>
          </div>
          <span className="text-xs">{")"}</span> */}
        </Link>
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
      <div className="flex items-center gap-4 select-none">
        <div className="flex gap-4 items-center justify-center">
          <Link href={ProfileData.more.contact.github} target="_blank">
            <Github size={26} />
          </Link>
          <Link href={ProfileData.more.contact.linkedin} target="_blank">
            <Linkedin size={26} />
          </Link>
        </div>
        {/* <div
          className="px-2 py-1 border rounded-sm hover:bg-gray-200 cursor-pointer"
          onClick={handleToogleTheme}
          aria-selected={false}
        >
          {theme === "dark" ? <SunIcon /> : <MoonIcon />}
        </div> */}
        <div
          className="px-2 py-1 border rounded-sm hover:bg-gray-200 cursor-pointer"
          style={{
            backgroundColor: hovered.no
              ? darkTheme.buttonHover
              : darkTheme.rootBg,
            color: hovered.no ? darkTheme.textInContrast : darkTheme.text,
          }}
        >
          <Link href={"/login"}>Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
