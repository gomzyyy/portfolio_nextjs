import React from "react";
import { ProfileData } from "@/constants/data";
import { darkTheme } from "@/hooks/useTheme";
import LanguagesDatabases from "./mini-components/Languages_Databases";
import Frameworks from "./mini-components/Frameworks";
import VersionControl from "./mini-components/VersionControl";
import StateManagement from "./mini-components/StateManagement";

function SkillSection() {
  const s = ProfileData.skills;
  const ld=[...s.languages,...s.databases]
  const f=[...s.frameworksAndLibraries]
  const st=[...s.stateManagement]
  const v=[...s.versionControl]
  return (
    <div className="border-2 rounded-2xl p-8 w-[80%]  lg:w-[60%] min-w-[385px] select-none"
    style={{borderColor:darkTheme.border}}
    >
      {/* <div className="border-2 rounded-2xl p-4 flex flex-col gap-2"
      style={{borderColor:darkTheme.border}}
      > */}
        <LanguagesDatabases skills={ld}/>
        <Frameworks skills={f}/>
       <StateManagement skills={st}/>
       <VersionControl skills={v}/>
      {/* </div> */}
    </div>
  );
}

export default SkillSection;
