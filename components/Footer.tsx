"use client";
import { darkTheme } from "@/hooks/useTheme";
import React, { useState } from "react";
import Link from "next/link";
import { NavFeaturesType } from "@/types";
import FooterLink from "./mini-components/FooterLink";
import { Copyright, Github, Linkedin } from "lucide-react";
import { ProfileData } from "@/constants/data";
import FooterConnectBy from "./mini-components/FooterConnectBy";
import FooterNavigation from "./mini-components/FooterNavigation";

const redirectLinks: NavFeaturesType[] = [
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

function Footer() {
  const [hover, setHover] = useState<{
    linkedin?: boolean;
    github?: boolean;
    email?: boolean;
    contactNumber?: boolean;
  }>({
    linkedin: false,
    github: false,
    email: false,
    contactNumber: false,
  });

  return (
    <div
      className="border-t-2 w-[90%] lg:w-[100%] pt-4 pb-2 px-6 select-none h-fit flex flex-col gap-3 items-center"
      style={{ borderColor: darkTheme.border, color: darkTheme.text }}
    >
      <div className="flex gap-16 flex-col lg:flex-row flex-1 w-[90%]">
        <div
          className="p-2 flex flex-col flex-1 gap-2"
          style={{ borderColor: darkTheme.border }}
        >
          <div className="font-bold text-center text-2xl border-b-2">
            Redirecting links
          </div>
          <div className="flex justify-between pr-0 lg:pr-16">
            <div className="flex flex-col gap-4 lg:gap-1 pl-0 lg:pl-28 justify-center items-center lg:justify-start lg:items-start">
              {redirectLinks.map((s, i) => (
                <FooterLink s={s} key={i} />
              ))}
            </div>
            <div className="flex gap-4 items-center flex-col lg:flex-row">
              <Link
                href={ProfileData.more.contact.linkedin}
                className="flex flex-col items-center gap-3 smooth"
                onMouseOver={() => setHover({ linkedin: true })}
                onMouseLeave={() => setHover({ linkedin: false })}
                style={{
                  color: hover.linkedin ? darkTheme.textLight : darkTheme.text,
                }}
              >
                <span className="font-bold text-2xl">LinKedIn</span>
                <Linkedin size={40} />
              </Link>
              <span className="font-bold text-2xl">•</span>
              <Link
                href={ProfileData.more.contact.github}
                className="flex flex-col items-center gap-3 smooth"
                onMouseOver={() => setHover({ github: true })}
                onMouseLeave={() => setHover({ github: false })}
                style={{
                  color: hover.github ? darkTheme.textLight : darkTheme.text,
                }}
              >
                <span className="font-bold text-2xl">GitHub</span>
                <Github size={40} />
              </Link>
            </div>
          </div>
        </div>
        <div className="p-2 flex-1" style={{ borderColor: darkTheme.border }}>
          <div className="font-bold text-center text-2xl border-b-2">
            Reach me via
          </div>
          <FooterConnectBy />
        </div>
      </div>

      <div className="text-center border-t w-[60%] pt-2">
        <div className="flex justify-center"><pre>Portfolio • GomzyDhingra, </pre><div className="flex items-center"><pre>Copyright </pre><Copyright size={16}/><pre> 2025.</pre></div></div>
        <div>Thanks for visiting</div>
      </div>
    </div>
  );
}

export default Footer;
