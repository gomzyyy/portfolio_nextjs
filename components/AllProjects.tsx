import React from "react";
import { myProjects } from "@/constants/data";
import { darkTheme } from "@/hooks/useTheme";
import Image from "next/image";
import { Github } from "lucide-react";
import Link from "next/link";
import Project from "./mini-components/Project";

function AllProjects() {
  return (
    <div
      className=" lg:rounded-2xl lg:border-2 lg:w-[100%] w-[90%] p-4 flex-col items-center select-none"
      style={{ borderColor: darkTheme.border }}
    >
      <span
        className="font-extrabold text-xl flex items-center mb-2"
        style={{ color: darkTheme.text }}
      >
        Projects:
      </span>
      <div className="flex justify-evenly px-8 gap-8 flex-wrap">
        {myProjects.map((d, i) => (
          <Project key={i} d={d}/>
        ))}
      </div>
    </div>
  );
}

export default AllProjects;
