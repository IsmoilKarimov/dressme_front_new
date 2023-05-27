import React, { useEffect, useState } from "react";
import TopHeader from "../top";
import MediumHeader from "../medium";
import { Outlet } from "react-router-dom";
import AuthenticationNavbar from "./AuthenticationNavbar";
import AuthenMedium from "./AuthenMedium";
import NavMenu from "../nav-menu";
export default function AuthenIndex() {
  return (
    <div>
      <header className="border-b border-searchBgColor">
        <TopHeader />
        <AuthenMedium />
        <AuthenticationNavbar />
      </header>

      <div className="mb-[50px]">
        <Outlet />
      </div>
      <div
        className={`fixed  bottom-0 w-full bg-white    z-[54] block md:hidden`}
      >
        <NavMenu />
      </div>
    </div>
  );
}
