import React, { useEffect, useState } from 'react'
import FooterLink from './FooterLink'
import { ProfileData } from '@/constants/data'
import { NavFeaturesType } from '@/types';
import { darkTheme } from '@/hooks/useTheme';
import { Github, Link, Linkedin } from 'lucide-react';

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

function FooterNavigation() {

  const [hover, setHover] = useState<{
    linkedin?: boolean;
    github?: boolean;
  }>({
    linkedin: false,
    github: false,
  });

  useEffect(()=>{
   if (typeof window !== 'undefined') return;
  })

  return (
    <div className="flex justify-between pr-16">
    <div className="flex flex-col gap-1 pl-28">
      {redirectLinks.map((s, i) => (
        <FooterLink s={s} key={i} />
      ))}
    </div>
    <div className="flex gap-4 items-center">
      <Link
        href={ProfileData.more.contact.linkedin}
        className="flex flex-col items-center gap-3"
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
        className="flex flex-col items-center gap-3"
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
  )
}

export default FooterNavigation