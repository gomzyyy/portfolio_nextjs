"use client";
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import WhyHireMe from "./components/WhyHireMe";

function Hire() {
  const query = useSearchParams();
  const hireAs = query.get("hireAs");
  const [role, setRole] = useState<string>("");
  const handleHireAs = (): string => {
    let i: string = "";
    if (hireAs?.toLowerCase() === "partner") i = "Partner";
    if (hireAs?.toLowerCase() === "freelancer") i = "Freelancer";
    if (hireAs?.toLowerCase() === "part_time") i = "Part time";
    if (hireAs?.toLowerCase() === "full_time") i = "Full time";
    return i;
  };
  useEffect(() => {
    hireAs && hireAs?.trim().length !== 0 && setRole(handleHireAs());
  }, []);
  return (
    <div className="px-8 py-6">
      <WhyHireMe />
    </div>
  );
}

export default Hire;
