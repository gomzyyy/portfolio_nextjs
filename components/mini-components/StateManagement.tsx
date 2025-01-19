import { darkTheme } from '@/hooks/useTheme'
import { Skill } from '@/types'
import React from 'react'
import SkillOverlay from './SkillOverlay'

function StateManagement({skills}:{skills:Skill[]}) {
    return (
     <>
      <span className="font-extrabold text-xl flex items-center gap-2"
          style={{color:darkTheme.text}}
          >
            {"State Management:"}
          </span>
          <SkillOverlay skills={skills}/>
     </>
    )
  }

export default StateManagement