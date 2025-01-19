import React from 'react'
import { Skill } from '@/types'
import { darkTheme } from '@/hooks/useTheme'
import SkillOverlay from './SkillOverlay'

function VersionControl({skills}:{skills:Skill[]}) {
  return (
   <>
    <span className="font-extrabold text-xl flex items-center gap-2"
        style={{color:darkTheme.text}}
        >
          {"Version Control:"}
        </span>
        <SkillOverlay skills={skills}/>
   </>
  )
}

export default VersionControl