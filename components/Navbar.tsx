"use client";
import React, { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { blogType, NavFeaturesType } from "@/types";
import Link from "next/link";
import NavFeature from "./mini-components/NavFeature";
import {
  ChevronsRight,
  Github,
  Handshake,
  Home,
  Linkedin,
  MailCheck,
  Menu,
  MessageSquareText,
  Newspaper,
  X,
} from "lucide-react";
import { ProfileData } from "@/constants/data";
import { darkTheme } from "@/hooks/useTheme";
import Sidebar from "./mini-components/Sidebar";
import { auth } from "@/firebase/firebase";
import { useRouter } from "next/navigation";
import { setAdmin, setAllBlogs } from "@/store/slices/admin.slice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import Image from "next/image";
import MiniProfile from "./mini-components/MiniProfile";
import MiniLogin from "./mini-components/MiniLogin";
import { useAsyncDebounce } from "@/hooks/useDebounce";
import { getBlogsByQuery } from "@/service/api";

export const NavFeatures: NavFeaturesType[] = [
  {
    name: "Home",
    action: () => {},
    navigation: "/",
    icon: (size) => <Home size={size} />,
  },
  {
    name: "Blogs",
    action: () => {},
    navigation: "/blogs",
    icon: (size) => <Newspaper size={size} />,
  },
  // {
  //   name: "Conversation",
  //   action: () => {},
  //   navigation: "/chat",
  //   icon: (size) => <MessageSquareText size={size} />,
  // },
  {
    name: "Contact",
    action: () => {},
    navigation: "/contact",
    icon: (size) => <MailCheck size={size} />,
  },
  {
    name: "Hire",
    action: () => {},
    navigation: "/hire",
    icon: (size) => <Handshake size={size} />,
  },
];

const Navbar: React.FC = (): React.JSX.Element => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const author = useSelector((s: RootState) => s.admin.admin?.uid);
  const photo = useSelector((s: RootState) => s.admin.admin?.photoURL);
  const authOk: boolean = author && author.length !== 0 ? true : false;
  const [searchText, setSearchText] = useState<string>("");
  const [theme, setTheme] = useState<"light" | "dark">("light");
  // const [navBehaviourSticky, setNavBehaviourSticky] = useState<boolean>(false);
  const [menuOpened, setMenuOpened] = useState<boolean>(false);
  const [profileOpened, setProfileOpened] = useState<boolean>(false);
  const [miniLoginOpened, setMiniLoginOpened] = useState<boolean>(false);

  const [hovered, setHovered] = useState<{
    l?: boolean;
    linkedIn?: boolean;
    github?: boolean;
    menu?: boolean;
  }>({
    l: false,
    linkedIn: false,
    github: false,
    menu: false,
  });

  useEffect(() => {
    const setNewBlogResults = async () => {
      const res:{blogs:blogType[],noOfPages:string} = await getBlogsByQuery(searchText);
      Array.isArray(res) && dispatch(setAllBlogs(res.blogs));
    };
    // useAsyncDebounce(() => setNewBlogResults());
    setNewBlogResults();
  }, [searchText]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (auth.currentUser) {
      dispatch(setAdmin(auth.currentUser));
    }
  }, []);

  const onKeyDownSearch=()=>{
    
  }
  const handleCloseMenu = () => setMenuOpened(false);
  const handleCloseProfile = () => setProfileOpened(false);
  const handleCloseMiniLogin = () => setMiniLoginOpened(false);

  return (
    <div
      className="h-16 border-b-2 flex px-6 font-bold items-center justify-between nav-smooth z-50 select-none"
      style={{
        color: darkTheme.text,
        borderBottomColor: darkTheme.border,
        position: "sticky",
        top: 0,
        backgroundColor: darkTheme.rootBg,
      }}
    >
      {menuOpened && <Sidebar close={handleCloseMenu} />}

      <div className="flex cursor-pointer">
        <Link href={"/"} className="flex flex-col">
          <span className="text-xl">{"Portfolio"}</span>
        </Link>
      </div>
      <div className="flex gap-8">
        <div className="">
          <Input
            className="w-[400px] hover:ring-1 xl:flex hidden hover:ring-gray-300 placeholder-gray-500"
            placeholder="Search blogs..."
            onKeyDown={(e) => e.key === "Enter" && console.log(searchText)}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <div className="hidden xl:flex gap-2 lg:visible">
          {NavFeatures.map((f, i) => (
            <NavFeature key={i} f={f} click={f.action} />
          ))}
        </div>
      </div>
      <div className="flex items-center gap-2 select-none">
        <div className="flex gap-4 items-center justify-center">
          <Link
            href={ProfileData.more.contact.github}
            target="_blank"
            onMouseOver={() => setHovered({ linkedIn: true })}
            onMouseLeave={() => setHovered({ linkedIn: false })}
            style={{
              color: hovered.linkedIn ? darkTheme.textLight : darkTheme.text,
            }}
            className="smooth"
          >
            <Github size={26} />
          </Link>
          <Link
            href={ProfileData.more.contact.linkedin}
            target="_blank"
            onMouseOver={() => setHovered({ github: true })}
            onMouseLeave={() => setHovered({ github: false })}
            style={{
              color: hovered.github ? darkTheme.textLight : darkTheme.text,
            }}
            className="smooth"
          >
            <Linkedin size={26} />
          </Link>
        </div>
        {!authOk ? (
          <div className="ml-1">
            <div
              className="px-2 py-1 min-h-8 min-w-16 border rounded-sm xl:flex items-center justify-center hidden hover:bg-gray-200 cursor-pointer smooth"
              style={{
                backgroundColor: darkTheme.rootBg,
                color: hovered.l ? darkTheme.textInContrast : darkTheme.text,
              }}
              onClick={() => setMiniLoginOpened((p) => !p)}
              onMouseOver={() => setHovered({ l: true })}
              onMouseLeave={() => setHovered({ l: false })}
            >
              <div>Login</div>
            </div>
            {miniLoginOpened && <MiniLogin close={handleCloseMiniLogin} />}
          </div>
        ) : (
          <div>
            <div
              className="border-1 p-2 rounded-full overflow-hidden cursor-pointer"
              onClick={() => setProfileOpened((p) => !p)}
              style={{}}
            >
              <Image
                src={photo ?? "/no-profile.jpg"}
                alt="Profile"
                width={30}
                height={30}
                className="rounded-full"
              />
            </div>
            {profileOpened && <MiniProfile close={handleCloseProfile} />}
          </div>
        )}
        <div
          className="cursor-pointer smooth xl:hidden flex"
          onMouseOver={() => setHovered({ menu: true })}
          onMouseLeave={() => setHovered({ menu: false })}
          style={{
            color: hovered.menu ? darkTheme.textLight : darkTheme.text,
          }}
        >
          {menuOpened ? (
            <ChevronsRight
              size={30}
              className="ml-1"
              onClick={() => setMenuOpened(false)}
            />
          ) : (
            <Menu
              size={30}
              className="ml-1"
              onClick={() => setMenuOpened(true)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// const handleNavBehaviour = () =>
//   window.scrollY > 400
//     ? setNavBehaviourSticky(true)
//     : setNavBehaviourSticky(false);

// window.addEventListener("scroll", handleNavBehaviour);
// return () => window.removeEventListener("scroll", handleNavBehaviour);
