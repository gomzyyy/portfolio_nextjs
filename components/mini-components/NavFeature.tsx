"use client";
import { darkTheme } from "@/hooks/useTheme";
import { NavFeaturesType } from "@/types";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

type NavFeatureProps = { f: NavFeaturesType; click: () => any};

const NavFeature: React.FC<NavFeatureProps> = ({
  f
}: NavFeatureProps): React.JSX.Element => {
  const path = usePathname()

  const [hovered, setHovered] = useState<{
    no: boolean;
  }>({
    no: false,
  });

  const active = path===f.navigation?true:false;

  const containerStyle =
    "px-2 cursor-pointer flex items-center smooth";
  return (
    <>
      {f.navigation.trim().length !== 0 ? (
        <Link
          href={`${f.navigation}`}
          className={containerStyle}
          onMouseOver={() =>
            setHovered({
             no:true
            })
          }
          onMouseLeave={() =>
            setHovered({
              no:false
            })
          }
          style={{
            backgroundColor:hovered.no?darkTheme.buttonHover:darkTheme.rootBg,
            color:hovered.no?darkTheme.textInContrast:darkTheme.text,
            borderRadius:hovered.no?4:0,
            borderBottomWidth:active?1.6:0
          }}
        >
          <div>{f.name}</div>
        </Link>
      ) : (
        <div className={containerStyle} onClick={f.action}>
          {f.name}
        </div>
      )}
    </>
  );
};

export default NavFeature;
