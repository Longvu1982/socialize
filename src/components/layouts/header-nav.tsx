import React from "react";
import { GoHome, GoHomeFill } from "react-icons/go";
import {
  IoChatbubblesOutline,
  IoChatbubblesSharp,
  IoSettingsOutline,
  IoSettingsSharp,
} from "react-icons/io5";
import { RiNotification3Fill, RiNotification3Line } from "react-icons/ri";
import NavigationButton from "./navigation-button";

const HeaderNav = () => {
  const [isShowChat, setShowChat] = React.useState(false);

  const navButtons = React.useMemo(
    () => [
      {
        key: "home",
        to: "/",
        activeIcon: GoHomeFill,
        icon: GoHome,
        label: "Home",
      },
      {
        key: "chat",
        to: "#",
        isActive: isShowChat,
        activeIcon: IoChatbubblesSharp,
        icon: IoChatbubblesOutline,
        label: "",
        onClick: () => setShowChat(!isShowChat),
      },
      {
        key: "noti",
        to: "/dashboard/invoices",
        activeIcon: RiNotification3Fill,
        icon: RiNotification3Line,
        label: "Notifications",
      },
      {
        key: "config",
        to: "contact",
        activeIcon: IoSettingsSharp,
        icon: IoSettingsOutline,
        label: "Configure",
      },
    ],
    [isShowChat]
  );

  return (
    <div className="flex items-center gap-3">
      {navButtons.map((item) => (
        <NavigationButton {...item} />
      ))}
    </div>
  );
};

export default HeaderNav;
