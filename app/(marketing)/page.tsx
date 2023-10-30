import React from "react";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

const page = () => {
  return (
    <>
      <section className="py-6 pb-8 pt-6 md:pb-10 md:pt-12 lg:py-32">
        <div className="container max-w-[64rem] flex flex-col items-center justify-center gap-5 text-center">
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            An Opensource solution for hassle-free order collection and
            management
          </h1>
          <p className="text-xl md:text-2xl max-w-[48rem] text-foreground/60">
            Empower your order collection partners with Quickcart and never go
            back to order books
          </p>
          <div className="flex gap-5">
            <Link href="/login" className={cn(buttonVariants({ size: "lg" }))}>
              Get Started
            </Link>
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              Github
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
