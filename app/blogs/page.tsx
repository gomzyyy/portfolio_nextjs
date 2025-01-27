"use client";
import React, { useEffect, useState } from "react";
import { getBlogs } from "../../service/api";
import { blogType } from "@/types";
import { darkTheme } from "@/hooks/useTheme";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import SingleBlog from "@/components/mini-components/Blog";
import { auth } from "@/firebase/firebase";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import BlogNav from "./components/BlogNav";

type fetchBlogsRes = {
  blogs: blogType[];
  noOfPages: number;
};

function Blog() {
  const query = useSearchParams();
  const pageNumber = Number(query.get("page"));
  const allBlogs = useSelector((s: RootState) => s.admin.allBlogs);

  const [result, setResult] = useState<blogType[]>([]);
  const [noOfPages, setNoOfPages] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(pageNumber ?? 1);

  useEffect(() => {
    const fetchBlogs = async () => {
      const res: fetchBlogsRes = await getBlogs(pageNumber);
      Array.isArray(res.blogs) && setResult(res.blogs ?? []);
      const arr = Array.from({ length: res.noOfPages }, (_, i) => i + 1);
      setNoOfPages(arr);
    };
    fetchBlogs();
  }, [pageNumber]);
  return (
    <div
      style={{ color: darkTheme.text }}
      className="flex flex-col pb-6"
    >
      <BlogNav />

      <div className="pt-6 lg:px-10 px-8">
        {result.length === 0 ? (
          <div className="text-center font-bold text-xl h-screen">
            No blog found, start by writing a blog.
          </div>
        ) : (
          <div className="flex justify-center flex-wrap gap-8 select-none">
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
