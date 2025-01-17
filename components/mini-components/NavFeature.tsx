"use client";
import { NavFeaturesType } from "@/types";
import Link from "next/link";
import React from "react";

type NavFeatureProps = { f: NavFeaturesType; click: () => any };
const NavFeature: React.FC<NavFeatureProps> = ({
  f,
  click,
}: NavFeatureProps): React.JSX.Element => {
    
  const containerStyle =
    "border rounded-sm px-2 cursor-pointer hover:bg-gray-200 flex items-center";
  return (
    <>
      {f.navigation.trim().length !== 0 ? (
        <Link href={`${f.navigation}`} className={containerStyle}>
          <div>{f.name}</div>
        </Link>
      ) : (
        <div className={containerStyle} onClick={f.action}>{f.name}</div>
      )}
    </>
  );
};

export default NavFeature;
