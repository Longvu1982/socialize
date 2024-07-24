import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useUser } from "@clerk/clerk-react";
import { IoImageOutline, IoVideocamOutline } from "react-icons/io5";

export default function DashboardPage() {
  const { user } = useUser();
  return (
    <div>
      <div className="bg-white rounded-lg p-4">
        <div className="flex items-start gap-3">
          <Avatar className="size-10">
            <AvatarImage src={user?.imageUrl} className="object-cover" />
            <AvatarFallback>{user?.username?.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <Input
              className="w-full mb-4 border-none rounded-full bg-[#e9e9e99e] transition-all"
              placeholder="Share something..."
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
    </div>
  );
}
