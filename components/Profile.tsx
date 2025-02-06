"use client";
import React, { useEffect, useRef, useState } from "react";
import { ProfileData } from "../constants/data";
import { Button } from "./ui/button";
import { ArrowRight, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { darkTheme, comonColors } from "@/hooks/useTheme";
import Link from "next/link";
import { toast } from "react-toastify";
import { AppDispatch, RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { setAdmin } from "@/store/slices/admin.slice";
import { auth } from "@/firebase/firebase";

type profilePropType = {
  showBtnHire?:boolean;
  showBtnContact?:boolean;
}

const Profile:React.FC<profilePropType>=({showBtnHire=true,showBtnContact=true}):React.JSX.Element=> {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const admin = useSelector((s: RootState) => s.admin.admin);

  useEffect(() => {
    const getAdminAfterLogin = async () => {
      try {
        if (!admin) {
          const user = auth.currentUser ?? undefined;
          dispatch(setAdmin(user));
        }
      } catch (error) {
        throw new Error(error instanceof Error ? error.message : "Unexpected error occured.")
      }
    };
    getAdminAfterLogin();
  }, [dispatch,admin]);//

  const [timer, setTimer] = useState<number>(5);
  const [redirecting, setRedirecting] = useState<boolean>(false);
  const [hovered, setHovered] = useState<{
    h: boolean;
    r: boolean;
    re: boolean;
    c: boolean;
  }>({
    h: false,
    r: false,
    re: false,
    c: false,
  });

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const counterRef = useRef<number>(5);
  const timeOutRef = useRef<NodeJS.Timeout | null>(null);

  const handleTimer = (): void => {
    if(timerRef.current) clearInterval(timerRef.current);
    counterRef.current = 5;
    timerRef.current = setInterval(() => {
      setTimer((prev) => prev - 1);
      counterRef.current -= 1;
      if (counterRef.current === 5 && timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }, 1000);
  };

  const profileImg = ProfileData.image;

  const handleHireAs = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const role = e.target.value;
    toast.success(
      `You have chosen to hire as ${role.replace(
        "_",
        " "
      )}. Redirecting to Contact page in 5 seconds.`
    );
    if (timeOutRef.current) clearTimeout(timeOutRef.current);
    handleTimer();
    setRedirecting(true);

    timeOutRef.current = setTimeout(() => {
      router.push(`/hire?hireAs=${role}`);
    }, 5000);
  };

  const handleCancelRedirecting = () => {
    if (timeOutRef.current) {
      toast.warn("You have canceled hiring.");
      clearTimeout(timeOutRef.current);
      if(timerRef.current) clearTimeout(timerRef.current);
      setRedirecting(false);
      counterRef.current = 5;
      setTimer(5);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setRedirecting(false);
    }
    return () => {
    if(timerRef.current) clearInterval(timerRef.current);
      if(timeOutRef.current) clearTimeout(timeOutRef.current);
    };
  }, []);

  return (
    <div
      className="sm:border-2 rounded-2xl lg:w-[40%] py-4 px-6 min-w-[385px] w-[80%] select-none h-fit"
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
          <div className="flex justify-between px-6">
            {showBtnHire && (!redirecting ? (
              <select
                className={`outline-none h-9 px-4 py-2 rounded-md font-bold hover:bg-[#282f3c] cursor-pointer border-2 smooth`}
                style={{
                  backgroundColor: hovered.h
                    ? darkTheme.buttonHover
                    : darkTheme.rootBg,
                  color: hovered.h
                    ? darkTheme.rootBgContrastHover
                    : darkTheme.buttonHover,
                  borderColor: hovered.r
                    ? darkTheme.textLight
                    : darkTheme.buttonHover,
                }}
                onMouseOver={() =>
                  setHovered({
                    h: true,
                    r: false,
                    re: false,
                    c: false,
                  })
                }
                onMouseLeave={() =>
                  setHovered({
                    h: false,
                    r: false,
                    re: false,
                    c: false,
                  })
                }
                onChange={handleHireAs}
                defaultValue={"Hire as..."}
              >
                <option disabled hidden>
                  Hire as...
                </option>
                <option value="freelancer">Freelancer</option>
                <option value="partner">Partner</option>
                <option value="part_time">Part-time</option>
                <option value="full_time">Full-time</option>
              </select>
            ) : (
              <div
                className="border-2 outline-none px-4 py-1 items-center font-bold rounded-md hover:bg-[#282f3c] smooth cursor-progress"
                style={{
                  backgroundColor: darkTheme.rootBg,
                  color: darkTheme.buttonHover,
                  borderColor: darkTheme.buttonHover,
                }}
                onMouseOver={() =>
                  setHovered({
                    h: false,
                    r: false,
                    re: true,
                    c: false,
                  })
                }
                onMouseLeave={() =>
                  setHovered({
                    h: false,
                    r: false,
                    re: false,
                    c: false,
                  })
                }
              >
                Redirecting in {timer}s
              </div>)
            )}

            { showBtnContact && (!redirecting ? (
              <Link href={"/contact"}>
                <Button
                  className="group font-bold border-2 flex items-center smooth"
                  style={{
                    backgroundColor: hovered.r
                      ? darkTheme.buttonHover
                      : darkTheme.rootBg,
                    color: hovered.r
                      ? darkTheme.rootBgContrastHover
                      : darkTheme.buttonHover,
                    borderColor: hovered.r
                      ? darkTheme.textLight
                      : darkTheme.buttonHover,
                  }}
                  onMouseOver={() =>
                    setHovered({
                      h: false,
                      r: true,
                      re: false,
                      c: false,
                    })
                  }
                  onMouseLeave={() =>
                    setHovered({
                      h: false,
                      r: false,
                      re: false,
                      c: false,
                    })
                  }
                >
                  Contact
                  <div className="transform transition-transform font-bold group-hover:translate-x-1 ease-in">
                    <ArrowRight />
                  </div>
                </Button>
              </Link>
            ) : (
              <div
                className="border outline-none h-9 px-4 py-2 items-center font-bold bg-[#111827] flex gap-2 text-white rounded-md hover:bg-[#282f3c] cursor-pointer"
                onClick={handleCancelRedirecting}
                onMouseOver={() =>
                  setHovered({
                    h: false,
                    r: false,
                    re: false,
                    c: true,
                  })
                }
                onMouseLeave={() =>
                  setHovered({
                    h: false,
                    r: false,
                    re: false,
                    c: false,
                  })
                }
                style={{
                  backgroundColor: hovered.c
                    ? comonColors.danger
                    : darkTheme.rootBg,
                  color: hovered.c ? darkTheme.buttonHover : comonColors.danger,
                  borderColor: hovered.c
                    ? darkTheme.textLight
                    : comonColors.danger,
                }}
              >
                Cancel <X size={20} />
              </div>)
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
