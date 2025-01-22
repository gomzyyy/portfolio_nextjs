import React from 'react'
import { Skill } from '@/types'
import { darkTheme } from '@/hooks/useTheme'
import SkillOverlay from './SkillOverlay'

function LanguagesDatabases({skills}:{skills:Skill[]}) {
  return (
   <>
    <span className="font-extrabold text-xl flex items-center gap-2"
        style={{color:darkTheme.text}}
        >
          {"Technologies 'n Databases:"}
        </span>
        <SkillOverlay skills={skills}/>
   </>
  )
}

export default LanguagesDatabases