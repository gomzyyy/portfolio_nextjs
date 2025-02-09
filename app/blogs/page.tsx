"use client";
import React, { useEffect, useState } from "react";
import { getBlogs } from "../../service/api";
import { blogType } from "@/types";
import { darkTheme } from "@/hooks/useTheme";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import SingleBlog from "@/components/mini-components/Blog";
import BlogNav from "./components/BlogNav";
import ForwardBackwardButtons from "@/components/mini-components/sub-components/ForwardBackwardButtons";
import Loading from "@/components/mini-components/sub-components/loading";

type fetchBlogsRes = {
  blogs: blogType[];
  noOfPages: number;
};

function Blog() {
  const query = useSearchParams();
  const pageNumber =
    Number(query.get("page")) === 0 ? 1 : Number(query.get("page"));
  const [result, setResult] = useState<blogType[]>([]);
  const [noOfPages, setNoOfPages] = useState<number[]>([]);
  const [openCreateScreen, setOpenCreateScreen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      const res: fetchBlogsRes = await getBlogs(process.env.NEXT_PUBLIC_AUTH_KEY,pageNumber);
      if (Array.isArray(res.blogs)) {
        setResult(res.blogs ?? []);
      }
      const arr = Array.from({ length: res.noOfPages }, (_, i) => i + 1);
      setNoOfPages(arr);
      setLoading(false);
    };

    fetchBlogs();
  }, [pageNumber]);

  return (
    <div style={{ color: darkTheme.text }} className="flex flex-col pb-6">
      <BlogNav
        openCreateScreen={openCreateScreen}
        setOpenCreateScreen={setOpenCreateScreen}
      />
      {noOfPages.length > 1 && !openCreateScreen && <ForwardBackwardButtons />}
      <div className="pt-6 lg:px-56 px-8">
        {result.length === 0 ? (
          loading ? (
            <div className="h-screen flex justify-center">
              <Loading height={200} width={200} />
            </div>
          ) : (
            <div className="text-center font-bold text-xl h-screen">
              No blog found, start by writing a blog.
            </div>
          )
        ) : (
          <div className="flex justify-center flex-wrap gap-8 select-none smooth-render-slow1">
            {result.map((s, i) => (
              <SingleBlog s={s} key={i} />
            ))}
          </div>
        )}
        <div className="mt-4">
          <div className="flex justify-center gap-2">
            {noOfPages.map((n, i) => (
              <Link
                key={i}
                href={`/blogs?page=${n}`}
                className="border rounded-lg px-2 py-1 h-fit w-fit"
                style={{
                  backgroundColor: darkTheme.button,
                  color: darkTheme.textDark,
                }}
              >
                <span>{n}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
