import { FC } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface UserAvatarProps {
  className?: string;
  src?: string;
  fallback?: string;
}

const UserAvatar: FC<UserAvatarProps> = ({ className, src, fallback }) => {
  return (
    <Avatar className={className}>
      <AvatarImage src={src} className="object-cover" />
      <AvatarFallback>{fallback}</AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
