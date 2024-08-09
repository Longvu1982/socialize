import logo from "@/assets/images/logo.png";
import HeaderNav from "@/components/layouts/header-nav";
import LeftNav from "@/components/layouts/left-nav";
import LayoutLoading from "@/components/layouts/page-loading";
import { Input } from "@/components/ui/input";
import { useLoading } from "@/hooks/store/useLoading";
import { UserButton, useAuth } from "@clerk/clerk-react";
import * as React from "react";
import { createPortal } from "react-dom";
import { IoIosSearch } from "react-icons/io";
import { Outlet, useNavigate } from "react-router-dom";

export default function MainLayout() {
  const { userId, isLoaded } = useAuth();
  const { isLoading } = useLoading();

  const navigate = useNavigate();

  React.useEffect(() => {
    if (isLoaded && !userId) {
      navigate("/sign-in");
    }
  }, [isLoaded]);

  if (!isLoaded) return <LayoutLoading />;

  React.useEffect(() => {
    const onPreventClick = (e: MouseEvent) => {
      console.log("here");
      e.preventDefault();
      return false;
    };
    if (isLoading) {
      document.addEventListener("click", onPreventClick);
    } else {
      document.removeEventListener("click", onPreventClick);
    }
    return () => document.removeEventListener("click", onPreventClick);
  }, [isLoading]);

  return (
    <>
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
          <div className="container grid grid-cols-4 flex-1 mt-[83px] gap-6 min-h-[calc(100vh-83px)]">
            <div className="sticky top-[83px] col-span-1 self-start">
              <LeftNav />
            </div>
            <div className="col-span-2 col-start-2 py-4">
              <Outlet />
            </div>
            <div className="sticky top-[83px] col-span-1 self-start">hihi</div>
          </div>
        </div>
      </div>
      {isLoading &&
        createPortal(
          <div className="flex items-center justify-center fixed inset-0 ">
            <div className="absolute inset-0 bg-gray-300 opacity-30"></div>
            <LayoutLoading isOverlay />
          </div>,
          document.body
        )}
    </>
  );
}
