"use client"
import AllProjects from "@/components/AllProjects";
import Profile from "@/components/Profile";
import Notification from "@/components/shared/Notification";
import SkillSection from "@/components/SkillSection";
import { auth } from "@/firebase/firebase";
import { useEffect } from "react";

export default function Home() {
  useEffect(()=>{
    if(typeof window === "undefined") return;
    const user = auth.currentUser;

  })
  return (
    <div className="flex flex-col lg:px-10 px-0 pb-6 pt-10">
      <Notification/>
      <div className="flex flex-col gap-6 items-center">
        <div className="flex flex-col lg:flex-row gap-6 justify-evenly items-center">
          <Profile />
          <SkillSection />
        </div>
        <AllProjects />
      </div>
    </div>
  );
}

{
  /* <AllProjects/>
    <AllProjects/>
    <AllProjects/>
    <AllProjects/>
    <AllProjects/>
    <AllProjects/>
    <AllProjects/> */
}
