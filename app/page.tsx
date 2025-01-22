import AllProjects from "@/components/AllProjects";
import Footer from "@/components/Footer";
import Profile from "@/components/Profile";
import SkillSection from "@/components/SkillSection";

export default function Home() {
  return (
    <div className="flex flex-col px-10 pb-6 pt-10">
      <div className="flex flex-col gap-6 items-center">
        <div className="flex flex-col lg:flex-row gap-6 justify-evenly items-center">
          <Profile />
          <SkillSection />
        </div>
        <AllProjects />
        <Footer />
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
