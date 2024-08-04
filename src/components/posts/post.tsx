import { useUser } from "@clerk/clerk-react";
import { CiShare2 } from "react-icons/ci";
import { IoChatbubbleEllipsesOutline, IoHeartOutline } from "react-icons/io5";
import UserAvatar from "../common/user-avatar";
import { Button } from "../ui/button";

const Post = () => {
  const { user } = useUser();

  return (
    <div className="bg-white rounded-lg p-4">
      <div className="flex gap-3 mb-4">
        <UserAvatar
          src={user?.imageUrl}
          className="size-10"
          fallback={user?.username?.charAt(0)}
        />
        <div>
          <p className="font-bold text-sm mb-1">{user?.username}</p>
          <p className="text-xs opacity-75">12 minutes</p>
        </div>
      </div>
      <p>
        <span>Beautiful art</span>
        <Button variant="link" className="pl-1 pr-0">
          #abc
        </Button>
        <Button variant="link" className="pl-1 pr-0">
          #def
        </Button>
        <Button variant="link" className="pl-1 pr-0">
          #ghi
        </Button>
      </p>

      <div className="w-full min-h-20">
        <img
          src="https://picsum.photos/536/354"
          alt=""
          className="w-full rounded-md mb-1"
          onLoad={() => console.log("finish")}
        />
      </div>

      <div className="flex gap-3">
        <Button
          variant="ghost"
          className="flex gap-1 hover:bg-transparent p-0 hover:opacity-75 items-center mr-2"
        >
          <IoHeartOutline size={22} className="text-red-500" />
          {/* <IoHeartSharp size={22} className="text-red-500" /> */}
          <span className="text-sm">120</span>
        </Button>
        <Button
          variant="ghost"
          className="flex gap-1 hover:bg-transparent p-0 hover:opacity-75 items-center"
        >
          <IoChatbubbleEllipsesOutline size={20} color="#555" />
          <span className="text-sm">120</span>
        </Button>
        <Button
          variant="ghost"
          className="flex gap-1 hover:bg-transparent p-0 hover:opacity-75 items-center ml-auto"
        >
          <CiShare2 size={22} />
          <span>Share</span>
        </Button>
      </div>
    </div>
  );
};

export default Post;
