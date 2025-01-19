import AllProjects from "@/components/AllProjects";
import Profile from "@/components/Profile";
import SkillSection from "@/components/SkillSection";

export default function Home() {

  return (
  <div className="flex flex-col px-10 py-6">
    <div className="flex flex-col gap-6">
    <div className="flex gap-6 justify-evenly">
      <Profile/>
    <SkillSection/>
   </div>
    <AllProjects/>
    </div>
   
   <div>Footer</div>
  </div>
  );
}
