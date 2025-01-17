import Image from "next/image";
import React from "react";
import { ImageProps } from "@/types";
import { cn } from "@/lib/utils";

const AdminProfileImage: React.FC<ImageProps> = ({
  height = 100,
  width = 100,
  className,
}) => {
  return (
    <Image
      src={"/profile-gradient.jpg"}
      alt="profile"
      height={height}
      width={width}
      className={cn(className)}
    />
  );
};

export default AdminProfileImage;
