import UserAvatar from "@/components/common/user-avatar";
import PostList from "@/components/posts/post-list";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useUser } from "@clerk/clerk-react";
import { IoImageOutline, IoVideocamOutline } from "react-icons/io5";

export default function DashboardPage() {
  const { user } = useUser();
  return (
    <div>
      <div className="bg-white rounded-lg p-4 mb-6">
        <div className="flex items-start gap-3">
          <UserAvatar
            src={user?.imageUrl}
            className="size-10"
            fallback={user?.username?.charAt(0)}
          />
          <div className="flex-1">
            <Textarea
              className="w-full mb-4 border-none rounded-2xl bg-[#e9e9e99e] transition-all resize-none"
              placeholder="Share something..."
              spellCheck={false}

              // icon={<IoIosSearch size={16} />}
            />
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                className="p-0 h-fit flex gap-[6px] items-center hover:bg-transparent hover:opacity-75"
              >
                <IoImageOutline />
                Image
              </Button>
              <Button
                variant="ghost"
                className="p-0 h-fit flex gap-[6px] items-center hover:bg-transparent hover:opacity-75"
              >
                <IoVideocamOutline size={16} />
                Video
              </Button>
            </div>
          </div>
        </div>
      </div>
      <PostList />
    </div>
  );
}
