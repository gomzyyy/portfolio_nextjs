"use client";
import React, { useState } from "react";
import { darkTheme } from "@/hooks/useTheme";
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import ContactForm from "./components/ContactForm";
import ContactProfile from "./components/ContactProfile";
import ContactMediaLinks from "./components/ContactMediaLinks";

function Contact() {
  const [loading, setLoading] = useState<boolean>(false);
  const author: any = useSelector((s: RootState) => s.admin.admin);

  return (
    <div className="select-none smooth">
      <ToastContainer
        stacked
        autoClose={4000}
        style={{ cursor: "grab" }}
        draggable
        theme="dark"
        position="bottom-right"
      />
      <div
        className="px-10 py-6 flex justify-evenly flex-col  lg:items-start lg:flex-row gap-4"
        style={{ color: darkTheme.text }}
      >
        <div className="flex justify-center">
          <ContactForm />
        </div>
        <div className="flex flex-col w-[100%] lg:w-[30%] gap-4 items-center">
          <ContactProfile />
          <ContactMediaLinks />
        </div>
      </div>
    </div>
  );
}

export default Contact;
