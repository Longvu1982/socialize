import { useUser } from "@clerk/clerk-react";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import UserAvatar from "../common/user-avatar";
import { Button } from "../ui/button";

const LeftNav = () => {
  const { user } = useUser();
  return (
    <ScrollArea
      className="col-span-1 bg-red max-h-[calc(100vh-83px)] scrollbar-hide rounded-lg py-4"
      scrollHideDelay={0}
    >
      <div className="rounded-lg bg-white p-4">
        <div className="h-20 relative rounded-lg mb-7">
          <div className="w-full h-full rounded-lg overflow-hidden">
            <img
              src="https://picsum.photos/536/354"
              alt="cover-picture"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 rounded-full bg-white size-14 flex items-center justify-center">
            <UserAvatar
              src={user?.imageUrl}
              fallback={user?.username?.charAt(0)}
              className="size-12"
            />
          </div>
        </div>
        <p className="text-center line-clamp-1 text-sm font-bold mb-1">
          {user?.username}
        </p>
        <p className="text-center text-sm opacity-45 font-semibold mb-5">
          {(user?.primaryEmailAddress?.emailAddress?.split("@")?.[0] ?? "") +
            "@"}
        </p>
        <div className="flex items-center justify-between px-2 mb-5">
          <div className="text-center text-sm">
            <p className="font-bold">200</p>
            <p className="font-semibold opacity-45">Posts</p>
          </div>
          <div className="text-center text-sm">
            <p className="font-bold">450</p>
            <p className="font-semibold opacity-45">Followers</p>
          </div>
          <div className="text-center text-sm">
            <p className="font-bold">1290</p>
            <p className="font-semibold opacity-45">Following</p>
          </div>
        </div>
        <Button className="text-xs w-full rounded-lg">View Profile Page</Button>
      </div>
    </ScrollArea>
  );
};

export default LeftNav;
