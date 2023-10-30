import { Icons } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import UserAuthForm from "@/components/user-auth-form";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const Login = ({
  searchParams,
}: {
  searchParams: {
    error?: string;
  };
}) => {
  return (
    <div className="container flex flex-col h-screen w-screen justify-center items-center gap-8">
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: "secondary", size: "lg" }),
          "absolute left-10 top-4 flex space-x-2"
        )}
      >
        <Icons.arrowLeft size={15} />
        <span>Back</span>
      </Link>
      <div className="flex flex-col items-center justify-center text-center">
        <Icons.logo size={30} />
        <h1 className="text-2xl font-semibold">Welcome back</h1>
        <p className="text-md text-foreground/60">
          Enter username and passord to log in to your account
        </p>
      </div>
      <UserAuthForm invalidCred={!!searchParams?.error} />
    </div>
  );
};

export default Login;
