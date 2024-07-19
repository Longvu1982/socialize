import { cn } from "@/lib/utils";
import { IconType } from "react-icons";
import { Link, useLocation } from "react-router-dom";

interface NavigationButtonProps {
  to: string;
  isActive?: boolean;
  icon: IconType;
  activeIcon: IconType;
  label?: string;
  onClick?: () => void;
}

const NavigationButton = ({
  to,
  isActive,
  activeIcon: ActiveIcon,
  icon: Icon,
  label,
  onClick,
}: NavigationButtonProps) => {
  const location = useLocation();
  const pathname = location.pathname;

  const isPathActive = () => {
    if (to === "" || to === "/") return pathname === "/";
    return pathname.includes(to);
  };

  const active = isActive ?? isPathActive();

  return (
    <Link
      to={to}
      onClick={onClick}
      className={cn(
        "p-2 rounded-full bg-[#c850c019] flex items-center gap-1 transition-all",
        !active && "bg-transparent"
      )}
    >
      {active ? <ActiveIcon color={"#c850c0"} /> : <Icon color="#555" />}
      {active && label && (
        <span className="text-[#c850c0] text-xs font-semibold">{label}</span>
      )}
    </Link>
  );
};

export default NavigationButton;
