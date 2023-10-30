import { MainNavItem } from "@/types";
import Link from "next/link";
import React, { ReactNode } from "react";
import { Icons } from "./icons";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  items?: MainNavItem[];
  children?: ReactNode;
}

const MobileNav = ({ items }: MobileNavProps) => {
  return (
    <div className="fixed z-50 top-16 left-3 slide-in-from-bottom-96 shadow-md animate-in flex flex-col p-5 gap-6 w-[calc(100vw-1.5rem)] md:hidden">
      <Link href="/" className="flex gap-2 font-bold">
        <Icons.logo />
        <span>{siteConfig.name}</span>
      </Link>
      <div className="flex flex-col gap-3 px-2">
        {items?.length
          ? items.map((item) => (
              <Link
                key={item.href}
                href={item.disabled ? "/#" : item.href}
                className={cn(
                  "text-sm font-medium",
                  item.disabled && "opacity-80"
                )}
              >
                {item.title}
              </Link>
            ))
          : null}
      </div>
    </div>
  );
};

export default MobileNav;
