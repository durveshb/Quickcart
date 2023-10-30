import Footer from "@/components/footer";
import MainNav from "@/components/main-nav";
import { marketingConfig } from "@/config/marketing";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <div className="sticky top-0">
        <MainNav items={marketingConfig.mainNav} />
      </div>
      {children}
      <Footer />
    </div>
  );
}
