"use client";
import SingleBlog from "@/components/mini-components/Blog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { blogRules } from "@/constants/data";
import { auth } from "@/firebase/firebase";
import { darkTheme } from "@/hooks/useTheme";
import { blogType } from "@/types";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { BrokenImage } from "@/constants/data";
import { ArrowLeft, X } from "lucide-react";
import { createBlog } from "@/service/api";

function CreateBlog({ close }: { close: () => void }) {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [thumbnail, setThumbnail] = useState<string>("");
  const [tags, setTags] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [pd, setPd] = useState<blogType>({
    title: "[title will appear here.]",
    content: "[content will appear here.]",
    author: {
      authorId: auth?.currentUser?.uid ?? "Anonymous",
      displayName: auth?.currentUser?.displayName ?? "Anonymous",
    },
    tags: ["tag1", "tag2", "tag3"],
    thumbnail: BrokenImage,
    datePublished: new Date().toDateString(),
    category: "Sample Category",
  });
  useEffect(() => {
    const checkPreviewable = (): boolean => {
      if (
        title.trim().length === 0 ||
        content.trim().length === 0 ||
        thumbnail.trim().length === 0 ||
        category.trim().length === 0
      ) {
        return false;
      } else {
        return true;
      }
    };
    setPreviewViewable(checkPreviewable());
  }, [title, thumbnail, category, content]);

  const [previewViewable, setPreviewViewable] = useState<boolean>();
  const [openPreview, setOpenPreview] = useState<boolean>(false);

  const handleTooglePreview = () => {
    if (previewViewable) {
      const blogTypeData: blogType = {
        title,
        thumbnail,
        content,
        category,
        author: {
          authorId: auth?.currentUser?.uid ?? "Anonymous",
          displayName: auth?.currentUser?.displayName ?? "Anonymous",
        },
        tags: tags.split(",").map((s) => s.trim()),
      };
      setPd(blogTypeData);
      setOpenPreview(true);
      return;
    } else {
      toast.error("Some entries are missing, cannot show preview.");
      return;
    }
  };

  const handleBlogCreate = async () => {
    try {
      const blogTypeData: blogType = {
        title,
        thumbnail,
        content,
        category,
        author: {
          authorId: auth?.currentUser?.uid ?? "Anonymous",
          displayName: auth?.currentUser?.displayName ?? "Anonymous",
        },
        tags: tags.split(",").map((s) => s.trim()),
      };
      const res = await createBlog(blogTypeData);
    } catch (error) {
      throw new Error("Error occured while creating blog.");
    }
  };

  return (
    <div
      className="fixed w-full h-screen top-[64px] pb-20 flex justify-center z-50 scrollbar-hidden overflow-auto smooth-render-slow1"
      style={{
        backgroundColor: "rgba(0,0,0,0.6)",
      }}
      onClick={close}
    >
      <ToastContainer
        stacked
        autoClose={4000}
        style={{ cursor: "grab" }}
        draggable
        theme="dark"
        position="bottom-right"
      />
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex justify-evenly gap-6 xl:gap-12"
        style={{
          paddingTop: openPreview ? 0 : window.screen.height / 9,
          alignItems: openPreview ? "center" : "unset",
        }}
      >
        {/* Creation form */}
        {!openPreview && (
          <div className="">
            <form
              className="px-10 pt-2 pb-6 h-fit w-fit border rounded-xl flex flex-row gap-8 mb-6 relative"
              style={{
                backgroundColor: darkTheme.rootBg,
                borderColor: darkTheme.border,
              }}
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <span
                className="absolute top-2 right-2 cursor-pointer"
                onClick={close}
              >
                <X size={16} />
              </span>
              <div>
                <div className="text-center">Create blog</div>
                <div className="flex flex-col gap-2 mt-8">
                  <div>
                    <span>Title*</span>
                    <Input
                      className="w-[100%]"
                      placeholder="title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                  <div>
                    <span>Content*</span>
                    <Input
                      className="w-[100%]"
                      placeholder="content"
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                    />
                  </div>
                  <div>
                    <span>Thumbnail*</span>
                    <Input
                      className="w-[100%]"
                      placeholder="add a thumbnail"
                      value={thumbnail}
                      onChange={(e) => setThumbnail(e.target.value)}
                    />
                  </div>
                  <div>
                    <span>Tags*</span>
                    <Input
                      className="w-[100%]"
                      placeholder="add relevant 
                    tags with commas; react,next"
                      value={tags}
                      onChange={(e) => setTags(e.target.value)}
                    />
                  </div>
                  <div>
                    <span>Category*</span>
                    <Input
                      className="w-[100%]"
                      placeholder="add relevant tags with commas; react,next"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex justify-between mt-4">
                  <Button onClick={handleBlogCreate}>Create</Button>
                  <Button onClick={handleTooglePreview}>Preview</Button>
                </div>
              </div>
              <div className="lg:block hidden">
                <span className="text-center underline">
                  Keep in mind while creating blogs.
                </span>
                {window.screen.width > 500 && (
                  <div className="flex flex-col gap-4 mt-9 w-fit max-w-[300px]">
                    {blogRules.map((s, i) => (
                      <span key={s.id} className="text-sm">
                        * {s.rule}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </form>
          </div>
        )}
        {/* Preview */}
        {previewViewable && openPreview && (
          <div
            className="h-fit w-fit max-h-[500px] max-w-[500px] border rounded-xl px-10 pt-2 pb-6 mb-6 relative"
            style={{
              backgroundColor: darkTheme.rootBg,
              borderColor: darkTheme.border,
            }}
          >
            <div className="text-center">Your blog will look like this.</div>
            <span
              className="absolute top-3 left-3 cursor-pointer z-10"
              onClick={() => setOpenPreview(false)}
            >
              <ArrowLeft size={18} />
            </span>
            <div className="mt-6 flex justify-center">
              <SingleBlog s={pd} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CreateBlog;
