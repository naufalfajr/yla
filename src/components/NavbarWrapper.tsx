"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { HomeNavbar } from "@/components/HomeNavbar";

export function NavbarWrapper() {
  const pathname = usePathname();
  
  // Use HomeNavbar only for the home page (/)
  if (pathname === "/") {
    return <HomeNavbar />;
  }
  
  // Use regular Navbar for all other pages
  return <Navbar />;
}
