"use client";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import React from "react";
import { Icons } from "./icons";
import Link from "next/link";
import { signOut } from "next-auth/react";

interface UserAccountNavProps {
  user: {
    name: string;
    username: string;
  };
}

const UserAccountNav = ({ user: { name, username } }: UserAccountNavProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="bg-foreground/10 p-1 rounded-xl text-foreground/50">
        <Icons.user size={20} />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="shadow-md rounded-md min-w-[200px]"
        align="end"
      >
        <DropdownMenuLabel>
          <div className="p-1">
            <h1 className="text-md font-semibold leading-none">{name}</h1>
            <p className="text-foreground/60 font-medium">{username}</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/dashboard">Dashboard</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/dashboard/invoices">Invoices</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/dashboard/customers">Customers</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/dashboard/products">Products</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="cursor-pointer"
          onSelect={(event) => {
            event.preventDefault();
            signOut({
              callbackUrl: `${window.location.origin}/login`,
            });
          }}
        >
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserAccountNav;
