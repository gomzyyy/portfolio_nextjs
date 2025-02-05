"use client";
import { ProfileData } from "@/constants/data";
import { darkTheme } from "@/hooks/useTheme";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const ContactMediaLinks = (): React.JSX.Element => {
  const [hover, setHover] = useState<{ linkedin?: boolean; github?: boolean }>({
    linkedin: false,
    github: false,
  });
  return (
    <div
      className="sm:border-2 border-t-2 sm:rounded-2xl rounded-none lg:w-[100%] w-[70%] select-none h-fit px-4 py-2 flex justify-evenly flex-1 items-center"
      style={{ borderColor: darkTheme.border }}
    >
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
  );
};

export default ContactMediaLinks;
