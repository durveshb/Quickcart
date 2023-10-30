import MainNav from "@/components/main-nav";
import { marketingConfig } from "@/config/marketing";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen w-screen flex flex-col">
      <MainNav items={marketingConfig.mainNav} />
      <div className="flex-grow">{children}</div>
    </div>
  );
}
