import Footer from "@/components/footer";
import MainNav from "@/components/main-nav";
import { buttonVariants } from "@/components/ui/button";
import { marketingConfig } from "@/config/marketing";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <div className="sticky top-0">
        <MainNav items={marketingConfig.mainNav} />
        <Link
          href="/login"
          className={cn(
            buttonVariants({ variant: "secondary", size: "lg" }),
            "absolute right-10 top-4"
          )}
        >
          Login
        </Link>
      </div>
      {children}
      <Footer />
    </div>
  );
}
