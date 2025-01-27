import SingleBlog from "@/components/mini-components/Blog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { blogRules } from "@/constants/data";
import { blogs } from "@/constants/serverData";
import { auth } from "@/firebase/firebase";
import { darkTheme } from "@/hooks/useTheme";
import { blogType } from "@/types";
import { setConsent } from "firebase/analytics";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { BrokenImage } from "@/constants/data";
import { X } from "lucide-react";

function CreateBlog({ close }: { close: () => void }) {
  const b = blogs[0];
  //   const [blogData, setBlogData] = useState({
  //     title: "",
  //     content: "",
  //     author: auth?.currentUser?.displayName ?? "Anonymous",
  //     tags: "",
  //     thumbnail: "",
  //     datePublished: "",
  //     category: "",
  //   });
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [thumbnail, setThumbnail] = useState<string>("");
  const [tags, setTags] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [pd, setPd] = useState<blogType>({
    title: "[title will appear here.]",
    content: "[content will appear here.]",
    author: auth?.currentUser?.displayName ?? "Anonymous",
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
        author: auth?.currentUser?.displayName ?? "Anonymous",
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

  return (
    <div
      className="absolute w-full h-screen top-0 pb-20 px-6 flex justify-center z-50 scrollbar-hidden overflow-auto"
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
        className="flex justify-evenly gap-6 xl:gap-12 flex-col xl:flex-row"
        style={{
          alignItems: openPreview ? "center" : "unset",
          paddingTop: openPreview ? 0 : 40,
        }}
      >
        {/* Creation form */}
        <div className="">
          <form
            className="px-10 pt-2 pb-6 h-fit w-fit border rounded-xl flex flex-col lg:flex-row gap-8 mb-6 relative"
            style={{
              backgroundColor: darkTheme.rootBg,
              borderColor: darkTheme.border,
            }}
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <span className="absolute top-2 right-2" onClick={close}>
              <X size={16} />
            </span>
            <div>
              <div className="text-center">Create blog</div>
              <div className="flex flex-col gap-2 mt-8">
                <div>
                  <span>Title*</span>
                  <Input
                    className="w-[280px]"
                    placeholder="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div>
                  <span>Content*</span>
                  <Input
                    className="w-[280px]"
                    placeholder="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  />
                </div>
                <div>
                  <span>Thumbnail*</span>
                  <Input
                    className="w-[280px]"
                    placeholder="add a thumbnail"
                    value={thumbnail}
                    onChange={(e) => setThumbnail(e.target.value)}
                  />
                </div>
                <div>
                  <span>Tags*</span>
                  <Input
                    className="w-[280px]"
                    placeholder="add relevant 
                    tags with commas; react,next"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                  />
                </div>
                <div>
                  <span>Category*</span>
                  <Input
                    className="w-[280px]"
                    placeholder="add relevant tags with commas; react,next"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex justify-between mt-4">
                <Button>Create</Button>
                <Button onClick={handleTooglePreview}>Preview</Button>
              </div>
            </div>
            <div>
              <span className="text-center underline">
                Keep in mind while creating blogs.
              </span>
              <div className="flex flex-col gap-4 mt-9 w-fit max-w-[300px]">
                {blogRules.map((s, i) => (
                  <span key={s.id} className="text-sm">
                    * {s.rule}
                  </span>
                ))}
              </div>
            </div>
          </form>
        </div>
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
              className="absolute top-2 right-2 cursor-pointer z-10"
              onClick={() => setOpenPreview(false)}
            >
              <X size={18} />
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
