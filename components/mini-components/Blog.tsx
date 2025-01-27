import { blogType } from "@/types";
import React from "react";

function SingleBlog({ s }: { s: blogType }) {
  return (
    <div className="scrollbar-hidden border p-4 h-fit max-h-[600px] max-w-[600px] w-fit rounded-xl flex flex-col gap-2 items-center">
      <div className="h-full w-full flex justify-center">
        <img
          src={s.thumbnail}
          className="w-full  h-full max-w-[561px] max-h-[330px] rounded-lg object-cover"
          alt="Invalid URI"
        />
      </div>
      <div className="flex flex-col justify-start gap-1 w-full">
        <div className="font-bold w-full">{s.title}</div>
        <div className="text-sm font-semibold w-full">{s.content}</div>
      </div>
    </div>
  );
}

export default SingleBlog;
