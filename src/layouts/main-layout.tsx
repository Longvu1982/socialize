import logo from "@/assets/images/logo.png";
import HeaderNav from "@/components/layouts/header-nav";
import { Input } from "@/components/ui/input";
import { useAuth } from "@clerk/clerk-react";
import * as React from "react";
import { IoIosSearch } from "react-icons/io";
import { Outlet, useNavigate } from "react-router-dom";

export default function MainLayout() {
  const { userId, isLoaded } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (isLoaded && !userId) {
      navigate("/sign-in");
    }
  }, [isLoaded]);

  if (!isLoaded) return "Loading...";

  return (
    <div>
      <nav className="flex items-center px-6 py-4 gap-5">
        <div className="w-14">
          <img src={logo} alt="logo" />
        </div>
        <Input
          className="max-w-[300px] rounded-full bg-[#e9e9e99e]"
          placeholder="Search"
          prefix=""
          icon={<IoIosSearch size={16} />}
        />
        <HeaderNav />
      </nav>
      <div className="container grid grid-cols-4">
        <div className="col-span-1"></div>
        <div className="col-span-2">
          <Outlet />
        </div>
        <div className="col-span-1"></div>
      </div>
    </div>
  );
}
