"use client";

import { MainNavItem } from "@/types";
import React, { ReactNode, useState } from "react";
import { Icons } from "@/components/icons";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { cn } from "@/lib/utils";
import MobileNav from "./mobile-nav";

interface MainNavProps {
  items: MainNavItem[];
  children?: ReactNode;
}

const MainNav = ({ items, children }: MainNavProps) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <div className="container relative flex py-6 gap-10 items-center bg-background">
      <Link href="/" className="hidden md:flex gap-2 font-bold">
        <Icons.logo />
        <span>{siteConfig.name}</span>
      </Link>
      <div className="hidden md:flex gap-8 items-center">
        {items?.length
          ? items.map((item) => (
              <Link
                key={item.href}
                href={item.disabled ? "#" : item.href}
                className={cn(
                  "text-sm font-medium text-foreground/60 hover:text-foreground/80 transition-colors",
                  item.disabled && "cursor-not-allowed opacity-80"
                )}
              >
                {item.title}
              </Link>
            ))
          : null}
      </div>
      <button
        className="flex gap-3 items-center md:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        {showMobileMenu ? <Icons.close /> : <Icons.logo />}
        <span className="font-bold">Menu</span>
      </button>
      {showMobileMenu && items && (
        <MobileNav items={items}>{children}</MobileNav>
      )}
    </div>
  );
};

export default MainNav;
