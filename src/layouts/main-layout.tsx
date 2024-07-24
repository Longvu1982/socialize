import logo from "@/assets/images/logo.png";
import HeaderNav from "@/components/layouts/header-nav";
import LeftNav from "@/components/layouts/left-nav";
import { Input } from "@/components/ui/input";
import { UserButton, useAuth } from "@clerk/clerk-react";
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
    <div className="flex flex-col max-h-screen">
      <nav className="flex bg-white items-center px-6 py-4 gap-5 fixed top-0 left-0 right-0 z-10 border-b-[1px] justify-between">
        <div className="flex items-center gap-5">
          <div className="w-14">
            <img src={logo} alt="logo" />
          </div>
          <Input
            className="max-w-[300px] rounded-full bg-[#e9e9e99e] focus-within:max-w-[400px] w-[400px] transition-all"
            placeholder="Search"
            prefix=""
            icon={<IoIosSearch size={16} />}
          />
          <HeaderNav />
        </div>
        <UserButton />
      </nav>
      <div className="bg-gray-100">
        <div className="container grid grid-cols-4 flex-1 mt-[83px] gap-4 min-h-[calc(100vh-83px)]">
          <LeftNav />
          <div className="col-span-2 py-4">
            <Outlet />
          </div>
          <div className="col-span-1"></div>
        </div>
      </div>
    </div>
  );
}
