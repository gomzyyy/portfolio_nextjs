import { darkTheme } from "@/hooks/useTheme";
import { NavFeaturesType } from "@/types";
import { Link2 } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

function FooterLink({ s }: { s: NavFeaturesType }) {
  const [hover, setHover] = useState<{ l?: boolean }>({ l: false });
  return (
    <Link
      href={s.navigation}
      onMouseOver={() => setHover({ l: true })}
      onMouseLeave={() => setHover({ l: false })}
      style={{ color: hover.l ? darkTheme.textLight : darkTheme.text }}
      className="w-fit flex gap-1 items-center smooth font-semibold"
    >
      <Link2 size={14} className={`${hover.l ? "visible" : "invisible"}`} />
      <span>{s.name}</span>
    </Link>
  );
}

export default FooterLink;
