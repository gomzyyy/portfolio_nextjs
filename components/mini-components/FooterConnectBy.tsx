import { ProfileData } from "@/constants/data";
import { darkTheme } from "@/hooks/useTheme";
import {
  Clipboard,
  ClipboardCheck,
  ClipboardCopy,
  Link2,
  Pointer,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

function FooterConnectBy() {
  const [hover, setHover] = useState<{
    email?: boolean;
    contactNumber?: boolean;
  }>({ email: false, contactNumber: false });
  const [copied, setCopied] = useState<boolean>(false);

  const handleContactNumber = async () => {
    try {
      !copied &&
        (await navigator.clipboard.writeText(
          `${ProfileData.more.contact.contactNumber}`
        ));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      throw new Error(
        error instanceof Error ? error.message : "Unable to copy contact number"
      );
    }
  };

  return (
    <div className="flex flex-col gap-3 px-3">
      <div className="flex flex-col pl-6">
        <div
          className="flex flex-col"
          style={{
            color: darkTheme.text,
          }}
        >
          <span>{"Sending a mail :"}</span>
          <div className="flex items-center gap-2 pl-28">
            <a
              onMouseOver={() => setHover({ email: true })}
              onMouseLeave={() => setHover({ email: false })}
              href={`mailto:${ProfileData.more.contact.email}`}
              style={{
                backgroundColor: hover.email
                  ? darkTheme.button
                  : darkTheme.rootBg,
                color: hover.email ? darkTheme.textDark : darkTheme.text,
              }}
              className="flex gap-1 items-center cursor-pointer border rounded-xl px-2 smooth"
            >
              {"Click to send mail."}
            </a>
            <Link2
              size={14}
              style={{ visibility: hover.email ? "visible" : "hidden" }}
            />
          </div>
        </div>
        <div
          className="flex flex-col"
          style={{
            color: darkTheme.text,
          }}
        >
          <span className="flex gap-1">
            Connecting via
            <Image src="/wpicon.png" alt="WhatsApp" width={24} height={24} />:
          </span>
          <div className="flex items-center gap-2 pl-28">
            <span
              className="text-[10px]"
              style={{
                visibility: hover.contactNumber ? "visible" : "hidden",
              }}
            ></span>
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
              }}
              onClick={handleContactNumber}
              className="cursor-pointer border rounded-xl px-2 smooth"
            >
              {copied ? (
                <span className="flex gap-1 items-center">
                  {"Contact number copied successfully"}
                </span>
              ) : (
                <span className="flex gap-1 items-center">
                  {"Click to copy WhatsApp number."}
                </span>
              )}
            </span>
            {copied ? (
              <ClipboardCheck
                size={14}
                style={{
                  visibility: hover.contactNumber ? "visible" : "hidden",
                }}
              />
            ) : (
              <ClipboardCopy
                size={14}
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
          <div><Sparkles size={18} className="" /></div>
          <div>{ProfileData.more.contact.disclamer}</div>
        </div>
      </div>
    </div>
  );
}

export default FooterConnectBy;
