"use client";
import { darkTheme } from "@/hooks/useTheme";
import { NavFeaturesType } from "@/types";
import Link from "next/link";
import React, { useState } from "react";

type NavFeatureProps = { f: NavFeaturesType; click: () => any };
const NavFeature: React.FC<NavFeatureProps> = ({
  f,
}: NavFeatureProps): React.JSX.Element => {
  const [hovered, setHovered] = useState<{
    no: boolean;
  }>({
    no: false,
  });

  const containerStyle =
    "border rounded-sm px-2 cursor-pointer flex items-center";
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
