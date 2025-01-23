import Image from 'next/image'
import React from 'react'
import { cn } from '@/lib/utils'
import { ImageProps } from 'next/image'

type DefaultImageProps={
    height:number;
    width:number;
    className:ImageProps
}

const DefaultProfile:React.FC<DefaultImageProps>=({height,width,className})=> {
  return (
      <Image
          src={"/profile-gradient.jpg"}
          alt="profile"
          height={height}
          width={width}
          className={cn(className)}
        />
  )
}

export default DefaultProfile