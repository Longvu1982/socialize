import ImageList, { ImageRefType } from "@/components/common/image-list";
import UserAvatar from "@/components/common/user-avatar";
import PostList from "@/components/posts/post-list";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useTriggerLoading } from "@/hooks/common/useTriggerLoading";
import { createPost } from "@/service/post";
import { useUser } from "@clerk/clerk-react";
import { useRef, useState } from "react";
import { IoImageOutline, IoVideocamOutline } from "react-icons/io5";

export default function DashboardPage() {
  const { user } = useUser();
  const imageRef = useRef<ImageRefType>(null);
  const [content, setContent] = useState<string>("");
  const { triggerLoading } = useTriggerLoading();

  const handlePost = () => {
    triggerLoading(async () => {
      const imageList = await imageRef.current?.manualUpload();
      await createPost({
        content,
        creator: { email: user?.emailAddresses?.[0]?.emailAddress ?? "" },
        images: imageList?.map((img, index) => ({ order: index, url: img.data.link })) ?? [],
      });

      setContent("");
      imageRef.current?.clear();
    });
  };

  return (
    <div>
      <div className="bg-white rounded-lg p-4 mb-6">
        <div className="flex items-start gap-3 mb-4">
          <UserAvatar src={user?.imageUrl} className="size-10" fallback={user?.username?.charAt(0)} />
          <div className="flex-1">
            <div className="flex items-start gap-2">
              <Textarea
                className="w-full mb-4 border-none rounded-2xl bg-[#e9e9e99e] transition-all resize-none"
                placeholder="Share something..."
                spellCheck={false}
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
            <ImageList ref={imageRef} />
            <div className="flex items-center gap-4 justify-between mt-3">
              <Button
                variant="ghost"
                className="p-0 h-fit flex gap-[6px] items-center hover:bg-transparent hover:opacity-75"
                onClick={() => imageRef.current?.openFilePicker()}
              >
                <div className="flex items-center gap-[6px]">
                  <IoImageOutline />
                  <span>Image</span>
                </div>
                <span>/</span>
                <div className="flex items-center gap-[6px]">
                  <IoVideocamOutline size={16} />
                  <span>Video</span>
                </div>
              </Button>
            </div>
          </div>
        </div>
        <Button disabled={!content?.trim()} variant="default" onClick={handlePost} className="p-2 flex items-center w-full py-1">
          <span className="text-xs">POST</span>
        </Button>
      </div>
      <PostList />
    </div>
  );
}
