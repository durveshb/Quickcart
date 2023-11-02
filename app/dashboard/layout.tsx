import Footer from "@/components/footer";
import MainNav from "@/components/main-nav";
import UserAccountNav from "@/components/user-account-nav";
import { dashboardConfig } from "@/config/dashboard";
import { getCurrentUser } from "@/lib/session";
import React from "react";

export default async function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();
  return (
    <div className="h-screen flex flex-col">
      <div className="sticky top-0 z-20 bg-background">
        <MainNav items={dashboardConfig.mainNav} />
        <div className="absolute right-12 top-4">
          <UserAccountNav
            user={{ name: user?.name!, username: user?.username! }}
          />
        </div>
        <div className="h-[1px] bg-foreground/20" />
      </div>
      <div className="grow">{children}</div>
      <Footer />
    </div>
  );
}
