import { darkTheme } from "@/hooks/useTheme";
import React from "react";
import SkillTab from "./SkillTab";
import { Skill } from "@/types";

function SkillOverlay({ skills }: { skills: Skill[] }) {
    
  return (
    <div
      className="border-2 rounded-2xl py-4 lg:px-36 px-16 flex flex-wrap justify-evenly gap-4"
      style={{ borderColor: darkTheme.border }}
    >
      <SkillTab skills={skills} />
    </div>
  );
}

export default SkillOverlay;
