"use client"
import Link from "next/link";
import React from "react";
import { ProfileData } from "../constants/data";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

function Profile() {
  const profileImg = ProfileData.image;
  const handleHireAs = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if(e.target.value==="freelancer"){
alert(`You have choosed to hire as Freelancer role, you will be redirected to Contact page in few seconds.`)
    }
    if(e.target.value==="partner"){
      alert(`You have choosed to hire as Partner role, you will be redirected to Contact page in few seconds.`)
    }
    if(e.target.value==="part_time"){
      alert(`You have choosed to hire as Part-Time role, you will be redirected to Contact page in few seconds.`)
    }
    if(e.target.value==="full_time"){
      alert(`You have choosed to hire as Full-Time role, you will be redirected to Contact page in few seconds.`)
    }
  };
  return (
    <div className="border-2 rounded-2xl p-4 w-[40%] select-none">
      <div className="flex flex-col items-center">
        {/* profile container */}
        <div className="overflow-hidden rounded-full bg-black">
          {/* profile image */}
          {profileImg({ height: 150, width: 150 })}
        </div>
        {/* profile text */}
        <div>
          <div className="text-center font-bold text-2xl mb-3">
            {ProfileData.name}
          </div>
          <p className="font-semi-bold mb-3">{ProfileData.bio}</p>
          <div className="flex justify-between px-8">
            <select
              className="relative right-6 active:outline-none focus:outline-none border-none outline-none px-2 py-1 bg-[#111827] text-white rounded-md hover:bg-[#282f3c] cursor-pointer"
              onChange={(e) => handleHireAs(e)}
            >
              <option disabled hidden>
                Hire as...
              </option>
              <option value="freelancer">Freelancer</option>
              <option value="partner">Partner</option>
              <option value="part_time">Part-time</option>
              <option value="full_time">Full-time</option>
            </select>
            <Button className="group flex items-center">
              Read more
              <div className="transform transition-transform group-hover:translate-x-1 ease-in">
                <ArrowRight />
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
