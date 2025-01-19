"use client"
import { darkTheme } from '@/hooks/useTheme'
import { Skill } from '@/types'
import Link from 'next/link'
import React, { useState } from 'react'

function Button({x}:{x:Skill}) {
    const [hovered,setHovered] = useState<{st:boolean}>({st:false})

  return (
    <Link 
          href={`${x.link}`} 
          className={`border box-border px-4 py-2 rounded-2xl`} 
          style={{
            backgroundColor:x.themeColor,color:x.textColor,
            borderColor:hovered.st?darkTheme.textLight:x.themeColor
          }} 
          target="_blank"
          onMouseOver={()=>setHovered({st:true})}
          onMouseLeave={()=>setHovered({st:false})}
          >
            <span>{x.name}</span>
          </Link>
  )
}

export default Button