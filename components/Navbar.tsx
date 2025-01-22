"use client";
import React, { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { NavFeaturesType } from "@/types";
import Link from "next/link";
import NavFeature from "./mini-components/NavFeature";
import { Github, Linkedin } from "lucide-react";
import { ProfileData } from "@/constants/data";
import { darkTheme } from "@/hooks/useTheme";

export const NavFeatures: NavFeaturesType[] = [
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
  const [navBehaviourSticky, setNavBehaviourSticky] = useState<boolean>(false);
  const [hovered, setHovered] = useState<{
    l?: boolean;
    linkedIn?: boolean;
    github?: boolean;
  }>({
    l: false,
    linkedIn: false,
    github: false,
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    
    const handleNavBehaviour = () =>
      window.scrollY > 400
        ? setNavBehaviourSticky(true)
        : setNavBehaviourSticky(false);

    window.addEventListener("scroll", handleNavBehaviour);
    return () => window.removeEventListener("scroll", handleNavBehaviour);
  }, []);

  return (
    <div
      className="h-16 border-b-2 flex px-6 font-bold items-center justify-between nav-smooth z-50"
      style={{
        color: darkTheme.text,
        borderBottomColor: darkTheme.border,
        position: navBehaviourSticky ? "sticky" : "unset",
        top: 0,
        backgroundColor: darkTheme.rootBg,
      }}
    >
      <div className="flex cursor-pointer">
        <Link href={"/"} className="flex flex-col">
          <span className="text-xl">{"Portfolio"}</span>
          <div>
            <span className="text-xs">{"Portfolio."}</span>
            <span className="text-lg">{"GomzyDhingra"}</span>
          </div>
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
        <div className="hidden lg:flex gap-2 lg:visible">
          {NavFeatures.map((f, i) => (
            <NavFeature key={i} f={f} click={f.action} />
          ))}
        </div>
      </div>
      <div className="flex items-center gap-4 select-none">
        <div className="flex gap-4 items-center justify-center">
          <Link 
            href={ProfileData.more.contact.github} 
            target="_blank"
            onMouseOver={() => setHovered((prev) => ({ ...prev, linkedIn: true }))}
            onMouseLeave={() => setHovered((prev) => ({ ...prev, linkedIn: false }))}
            style={{ color: hovered.linkedIn ? darkTheme.textLight : darkTheme.text }}
            className="smooth"
          >
            <Github size={26} />
          </Link>
          <Link 
            href={ProfileData.more.contact.linkedin} 
            target="_blank"
            onMouseOver={() => setHovered((prev) => ({ ...prev, github: true }))}
            onMouseLeave={() => setHovered((prev) => ({ ...prev, github: false }))}
            style={{ color: hovered.github ? darkTheme.textLight : darkTheme.text }}
            className="smooth"
          >
            <Linkedin size={26} />
          </Link>
        </div>
        <div
          className="px-2 py-1 border rounded-sm hover:bg-gray-200 cursor-pointer smooth"
          style={{
            backgroundColor: hovered.l ? darkTheme.buttonHover : darkTheme.rootBg,
            color: hovered.l ? darkTheme.textInContrast : darkTheme.text,
          }}
          onMouseOver={() => setHovered((prev) => ({ ...prev, l: true }))}
          onMouseLeave={() => setHovered((prev) => ({ ...prev, l: false }))}
        >
          <Link href={"/login"}>Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
