import { Skill } from "@/types";
import React from "react";
import Button from "./sub-components/button";

function SkillTab({ skills }: { skills: Skill[] }) {
  return (
    <>
      {skills.map((x, i) => (
        <Button x={x} key={i} />
      ))}
    </>
  );
}

export default SkillTab;
