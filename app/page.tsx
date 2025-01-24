"use client";
import AllProjects from "@/components/AllProjects";
import Profile from "@/components/Profile";
import Notification from "@/components/shared/Notification";
import SkillSection from "@/components/SkillSection";
import { auth } from "@/firebase/firebase";
import { useEffect } from "react";
import ReduxProvider from "@/store/provider";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { setAdmin } from "@/store/slices/admin.slice";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    if (auth.currentUser) {
      dispatch(setAdmin(auth.currentUser));
    }
  }, [auth.currentUser]);
  return (
    <ReduxProvider>
      <div className="flex flex-col lg:px-10 px-0 pb-6 pt-10">
        <Notification />
        <div className="flex flex-col gap-6 items-center">
          <div className="flex flex-col lg:flex-row gap-6 justify-evenly items-center">
            <Profile />
            <SkillSection />
          </div>
          <AllProjects />
        </div>
      </div>
    </ReduxProvider>
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
