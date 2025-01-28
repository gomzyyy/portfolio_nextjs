import { darkTheme } from "@/hooks/useTheme";
import { CirclePlus, Plus } from "lucide-react";
import React, { useEffect, useState } from "react";
import CreateBlog from "./CreateBlog";
import { auth } from "@/firebase/firebase";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

function BlogNav() {
  const [hover, setHover] = useState<{ icon?: boolean; create?: boolean }>({
    icon: false,
    create: false,
  });
  const author = useSelector((s: RootState) => s.admin.admin?.uid);
  const authOk: boolean = author && author.length !== 0 ? true : false;
  // const [navBehaviourSticky, setNavBehaviourSticky] = useState<boolean>(false);
  const [openCreateScreen, setOpenCreateScreen] = useState<boolean>(false);

  // useEffect(() => {
  //   const handleNavBehaviour = () => {
  //     window.scrollY > 400
  //       ? setNavBehaviourSticky(true)
  //       : setNavBehaviourSticky(false);
  //   };
  //   window.addEventListener("scroll", handleNavBehaviour);
  // });

  const handleCloseCreateScreen = () => setOpenCreateScreen(false);

  return (
    <nav
      className="h-16 flex flex-col px-10 font-bold items-center justify-between nav-smooth w-full select-none"
      style={{
        color: darkTheme.text,
        backgroundColor: darkTheme.rootBg,
        top: "unset",
        position: "sticky",
      }}
    >
      {openCreateScreen && <CreateBlog close={handleCloseCreateScreen} />}
      <div className="flex w-full items-center flex-1 justify-between">
        <span
          className="cursor-pointer smooth"
          onMouseOver={() => setHover({ icon: true })}
          onMouseLeave={() => setHover({ icon: false })}
          style={{ color: hover.icon ? darkTheme.textLight : darkTheme.text }}
        >
          Blogs
        </span>
        {authOk ? (
          <span
            className="cursor-pointer smooth flex gap-1"
            onMouseOver={() => setHover({ create: true })}
            onMouseLeave={() => setHover({ create: false })}
            style={{
              color: hover.create ? darkTheme.textLight : darkTheme.text,
            }}
            onClick={() => setOpenCreateScreen(true)}
          >
            Create{" "}
            <span>
              <CirclePlus />
            </span>
          </span>
        ) : (
          <Link
            className="cursor-pointer smooth flex gap-1"
            style={{
              color: darkTheme.text,
            }}
            href={"/login"}
          >
            Login to create blogs
          </Link>
        )}
      </div>
      <span
        className="border-b w-[90%]"
        style={{
          color: darkTheme.text,
          borderBottomColor: darkTheme.border,
          position: "sticky",
          top: 0,
          backgroundColor: darkTheme.rootBg,
        }}
      />
    </nav>
  );
}

export default BlogNav;
