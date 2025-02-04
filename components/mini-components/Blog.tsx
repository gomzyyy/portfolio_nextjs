import { darkTheme } from "@/hooks/useTheme";
import { AppDispatch, RootState } from "@/store/store";
import { blogType } from "@/types";
import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../ui/button";
import { setCount } from "@/store/slices/admin.slice";

function SingleBlog({ s }: { s: blogType }) {
  const dispatch = useDispatch<AppDispatch>();
  // const count = useSelector((s:RootState)=>s.admin.count)
  const author = useSelector((s: RootState) => s.admin.admin?.uid);
  const blogByAdmin: boolean = s.author.authorId === author ? true : false;

  return (
    <div className="scrollbar-hidden border p-4 h-fit max-h-[600px] max-w-[00px] w-full rounded-xl flex flex-col gap-6 items-center min-w-[100%] min-h-[280px]">
      {/* <Button onClick={()=>dispatch(setCount())}>Count ++ {count}</Button> */}
      <div className="w-full max-w-[561px] h-auto flex justify-center overflow-hidden rounded-lg">
        <Image
          src={s.thumbnail}
          alt="Invalid URI"
          width={561}
          height={330}
          className="w-full h-auto rounded-lg object-cover"
          priority
        />
      </div>

      <div className="flex flex-col justify-start gap-1 w-full">
        <div className="font-bold w-full flex gap-2">
          <span>{s.title}</span>
          <span>{`~${blogByAdmin ? "You" : s.author.displayName}`}</span>
        </div>
        <div className="flex gap-2">
          {s.tags.map((t, i) => (
            <span
              key={i}
              className="text-sm px-1 rounded-md"
              style={{
                backgroundColor: darkTheme.button,
                color: darkTheme.rootBg,
              }}
            >
              {t}
            </span>
          ))}
        </div>
        <div className="text-sm font-semibold w-full">{s.content}</div>
      </div>
    </div>
  );
}

export default SingleBlog;
