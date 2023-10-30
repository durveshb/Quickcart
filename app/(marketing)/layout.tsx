import MainNav from "@/components/main-nav";
import { marketingConfig } from "@/config/marketing";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-screen">
      <MainNav items={marketingConfig.mainNav} />
      {children}
    </div>
  );
}
