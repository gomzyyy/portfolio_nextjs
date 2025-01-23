import { darkTheme } from '@/hooks/useTheme'
import Link from 'next/link';
import React, { useState } from 'react'
import { NavFeaturesType } from '@/types';

function SideBarFeature({e,close}:{e:NavFeaturesType,close:()=>void}) {
     const [hovered, setHovered] = useState<{
        navFeature?:boolean
      }>({
        navFeature:false
      });
  return (
    <div className="flex items-center justify-evenly w-fit gap-2 cursor-pointer  smooth"
    style={{color:hovered.navFeature?darkTheme.textLight:darkTheme.text}}
    onMouseOver={() => setHovered({ navFeature: true })}
    onMouseLeave={() => setHovered({ navFeature: false })}
    >
      {e.icon(30)}
      <Link
        href={e.navigation}
        onClick={() => close()}
        className="px-3 py-1 w-fit"
      >
        {e.name}
      </Link>
    </div>
  )
}

export default SideBarFeature