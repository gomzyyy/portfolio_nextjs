"use client";
import { darkTheme } from "@/hooks/useTheme";
import { ProjectDetailsType } from "@/types";
import { Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function Project({ d }: { d: ProjectDetailsType }) {
  const [hover, setHover] = useState<{
    img?: boolean;
    l1?: boolean;
    l2?: boolean;
  }>({
    img: false,
    l1: false,
    l2: false,
  });
  return (
    <div
      className="px-2 pb-2 pt-3 border-2 rounded-xl flex flex-col gap-2 items-center h-fit w-[250px]"
      style={{ color: darkTheme.text }}
    >
      <div
        className="rounded-xl overflow-hidden relative w-fit border-2 smooth"
        style={{
          backgroundColor: darkTheme.buttonHover1,
          borderColor: hover.img
            ? d.liveLink.trim().length !== 0
              ? darkTheme.commonGreen
              : darkTheme.textLight
            : "transparent",
        }}
        onMouseOver={() => setHover({ img: true })}
        onMouseLeave={() => setHover({ img: false })}
      >
        <p
          className="absolute right-[-4px] top-[-4px] text-sm border-b-[2px] border-l-[2px]  rounded-md box-border pt-2 pb-1 px-2"
          style={{
            backgroundColor: darkTheme.button,
            color: darkTheme.textDark,
            borderColor: darkTheme.border,
          }}
        >
          {d.deployed ? "Deployed✅" : "Deploying soon🕑"}
        </p>
        {d.liveLink.trim().length !== 0 ? (
          <a href={d.liveLink} target="_blank">
            <Image src={d.image} alt={d.alt} height={200} width={200} />
          </a>
        ) : (
          <Image src={d.image} alt={d.alt} height={200} width={200} />
        )}
      </div>
      <div className="p-2 mx-2 flex flex-col gap-2">
        <span className="font-bold">
          {d.label}
          {": "}
        </span>
        <p className="font-semi-bold text-xs">{d.description}</p>
      </div>
      <div
        className="flex gap-2 justify-center"
        style={{
          color: darkTheme.text,
          borderBottomColor: darkTheme.border,
          top: 0,
          backgroundColor: darkTheme.rootBg,
        }}
      >
        <div
          className="flex gap-2 items-center border-b smooth"
          style={{
            borderBottomColor: hover.l1
              ? darkTheme.rootBgContrastHover
              : darkTheme.textLight,
          }}
          onMouseOver={() => setHover({ l1: true })}
          onMouseLeave={() => setHover({ l1: false })}
        >
          <Link
            href={d.links.githubLink1.link}
            target="_blank"
            className="flex items-center"
          >
            <Github size={18} />
            <span>{`(${d.links.githubLink1?.label})`}</span>
          </Link>
        </div>
        {d.links.githubLink2?.ok && <span className="">•</span>}
        {d.links.githubLink2?.ok && (
          <div
            className="flex gap-2 border-b smooth"
            style={{
              borderBottomColor: hover.l2
                ? darkTheme.rootBgContrastHover
                : darkTheme.textLight,
            }}
            onMouseOver={() => setHover({ l2: true })}
            onMouseLeave={() => setHover({ l2: false })}
          >
            <Link
              href={d.links.githubLink2?.link}
              target="_blank"
              className="flex items-center"
            >
              <Github size={18} />
              <span>{`(${d.links.githubLink2?.label})`}</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Project;
