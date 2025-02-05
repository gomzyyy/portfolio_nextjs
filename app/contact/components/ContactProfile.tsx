"use client";
import { ProfileData } from "@/constants/data";
import { darkTheme } from "@/hooks/useTheme";
import React from "react";

const ContactProfile = (): React.JSX.Element => {
  const profileImg = ProfileData.image;
  return (
    <div
      className="sm:border-2 rounded-2xl lg:w-[100%] w-[70%] select-none h-fit px-4 pt-4 pb-1"
      style={{ borderColor: darkTheme.border }}
    >
      <div className="flex flex-col items-center">
        <div
          className="overflow-hidden rounded-full bg-black border-[3px]"
          style={{ borderColor: darkTheme.border }}
        >
          {profileImg({ height: 150, width: 150 })}
        </div>
        <div>
          <div
            className="text-center font-bold text-2xl mb-1"
            style={{ color: darkTheme.text }}
          >
            {`<${ProfileData.name}/>`}
          </div>

          <p className="font-semi-bold mb-3" style={{ color: darkTheme.text }}>
            {ProfileData.bio}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactProfile;
