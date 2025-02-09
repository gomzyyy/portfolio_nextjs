import { darkTheme } from "@/hooks/useTheme";
import { ArrowLeft, ArrowRight } from "lucide-react";
import React, { useState } from "react";

type ForwardBackwardBlogBtnsType = {
  onForward?: () => void;
  onBackward?: () => void;
};

const ForwardBackwardButtons: React.FC<ForwardBackwardBlogBtnsType> = ({
  onForward,
  onBackward,
}): React.JSX.Element => {
  const [hover, setHover] = useState<{ f?: boolean; b?: boolean }>({
    f: false,
    b: false,
  });

  return (
    <div
      className="fixed flex w-full items-center justify-between px-4"
      style={{ top: "80%" }}
    >
      <div
        className="p-1 rounded-md border-2 cursor-pointer smooth"
        onClick={onBackward}
        style={{
          borderColor: darkTheme.text,
          backgroundColor: hover.b ? darkTheme.buttonHover : darkTheme.button,
        }}
        onMouseOver={() => setHover({ b: true })}
        onMouseLeave={() => setHover({ b: false })}
      >
        <ArrowLeft size={30} color="black" />
      </div>
      <div
        className="p-1 rounded-md border-2 bg-white cursor-pointer smooth"
        onClick={onForward}
        style={{
          borderColor: darkTheme.text,
          backgroundColor: hover.f ? darkTheme.buttonHover : darkTheme.button,
        }}
        onMouseOver={() => setHover({ f: true })}
        onMouseLeave={() => setHover({ f: false })}
      >
        <ArrowRight size={30} color="black" />
      </div>
    </div>
  );
};

export default ForwardBackwardButtons;
