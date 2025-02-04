"use client";
import { auth } from "@/firebase/firebase";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

function AllRequests() {
  const router = useRouter();

  useEffect(() => {
    if (auth.currentUser?.uid !== "dZRovaGYgPh1Aj9Z2rskZBFXSa83") {
      router.replace("/");
    }
  }, []);
  return <div>AllRequests</div>;
}

export default AllRequests;
