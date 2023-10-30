import Footer from "@/components/footer";
import MainNav from "@/components/main-nav";
import { buttonVariants } from "@/components/ui/button";
import { marketingConfig } from "@/config/marketing";
import { getCurrentUser } from "@/lib/session";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export default async function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();
  return (
    <div className="min-h-screen">
      <div className="sticky top-0">
        <MainNav items={marketingConfig.mainNav} />
        <Link
          href={user ? "/dashboard" : "/login"}
          className={cn(
            buttonVariants({ variant: "secondary", size: "lg" }),
            "absolute right-10 top-4"
          )}
        >
          {user ? "Dashboard" : "Login"}
        </Link>
      </div>
      {children}
      <Footer />
    </div>
  );
}
