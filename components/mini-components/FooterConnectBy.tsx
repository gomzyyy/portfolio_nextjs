import { ProfileData } from "@/constants/data";
import { darkTheme } from "@/hooks/useTheme";
import {
  CircleAlert,
  ClipboardCheck,
  ClipboardCopy,
  Link2,
} from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

function FooterConnectBy() {
  const [hover, setHover] = useState<{
    email?: boolean;
    contactNumber?: boolean;
  }>({ email: false, contactNumber: false });
  const [copied, setCopied] = useState<boolean>(false);

  const handleContactNumber = async () => {
    try {
      if (!navigator.clipboard) {
        toast.error("Your browser doesn't support copying to clipboard");
        setTimeout(() => {
          toast.info("Admin: Lets connect on WhatsApp: +91-9781295937👍.");
        }, 3000);
        return;
      }
      if (!copied) {
        await navigator.clipboard.writeText(
          `${ProfileData.more.contact.contactNumber}`
        );
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      throw new Error(
        error instanceof Error ? error.message : "Unable to copy contact number"
      );
    }
  };

  return (
    <div className="flex flex-col gap-3 lg:px-3 px-0 lg:font-semibold font-normal">
      <ToastContainer
        stacked
        autoClose={4000}
        style={{ cursor: "grab" }}
        draggable
        theme="dark"
        position="bottom-right"
      />
      <div className="flex flex-row lg:flex-col lg:pl-6 pl-0 gap-1 justify-center pt-4">
        <div
          className="flex flex-col"
          style={{
            color: darkTheme.text,
          }}
        >
          <span className="hidden lg:flex">{"Sending a mail :"}</span>
          <div className="flex items-center gap-1 pl-0 lg:pl-28">
            <Link2
              size={16}
              style={{ visibility: hover.email ? "visible" : "hidden" }}
            />
            <a
              onMouseOver={() => setHover({ email: true })}
              onMouseLeave={() => setHover({ email: false })}
              href={`mailto:${ProfileData.more.contact.email}`}
              style={{
                backgroundColor: hover.email
                  ? darkTheme.button
                  : darkTheme.rootBg,
                color: hover.email ? darkTheme.textDark : darkTheme.text,
                borderColor: hover.email
                  ? darkTheme.textLight
                  : darkTheme.rootBg,
                borderRadius: hover.email ? 10 : 4,
                textDecorationLine: !hover.email ? "underline" : "unset",
              }}
              className="flex gap-1 items-center cursor-pointer border px-2 smooth"
            >
              {"Click to send mail."}
            </a>
          </div>
        </div>
        <span className="flex lg:hidden items-center">•</span>
        <div
          className="flex flex-col"
          style={{
            color: darkTheme.text,
          }}
        >
          <span className="hidden gap-1 lg:flex">
            Connecting via
            <Image src="/wpicon.png" alt="WhatsApp" width={24} height={24} />:
          </span>
          <div className="flex items-center gap-1 pl-0 lg:pl-28">
            <span
              onMouseOver={() => setHover({ contactNumber: true })}
              onMouseLeave={() => setHover({ contactNumber: false })}
              style={{
                backgroundColor: hover.contactNumber
                  ? darkTheme.button
                  : darkTheme.rootBg,
                color: hover.contactNumber
                  ? darkTheme.textDark
                  : darkTheme.text,
                borderColor: hover.contactNumber
                  ? darkTheme.textLight
                  : darkTheme.rootBg,
                borderRadius: hover.contactNumber ? 10 : 4,
                textDecorationLine: !hover.contactNumber
                  ? "underline"
                  : "unset",
              }}
              onClick={handleContactNumber}
              className="cursor-pointer border rounded-xl px-2 smooth"
            >
              {copied
                ? "Contact number copied successfully"
                : "Click to copy WhatsApp number."}
            </span>
            {copied ? (
              <ClipboardCheck
                size={16}
                style={{
                  visibility: copied ? "visible" : "hidden",
                }}
              />
            ) : (
              <ClipboardCopy
                size={16}
                style={{
                  visibility: hover.contactNumber ? "visible" : "hidden",
                }}
              />
            )}
          </div>
        </div>
      </div>

      <div className="px-2">
        <div className="font-bold text-sm border-t pt-2 text-center flex">
          <div className="flex">
            <div className="flex gap-1">
              <span className="">
                <CircleAlert size={16} />
              </span>
              {ProfileData.more.contact.disclamer}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterConnectBy;
