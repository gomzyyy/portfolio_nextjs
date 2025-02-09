import Image from "next/image";
import React from "react";

type LoadingComponentType = {
  height?: number;
  width?: number;
};

const loadingAnimation = `https://res.cloudinary.com/dgki5gnzf/image/upload/v1739090050/cd514331234507.564a1d2324e4e_dadipx.gif`;

const Loading: React.FC<LoadingComponentType> = ({
  height = 50,
  width = 50,
}): React.JSX.Element => {
  return (
    <span>
      <Image src={loadingAnimation} height={height} width={width} alt="" />
    </span>
  );
};

export default Loading;
