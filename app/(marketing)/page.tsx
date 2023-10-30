import React from "react";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { marketingConfig } from "@/config/marketing";
import FeatureCard from "@/components/feature-card";
import SubscriptionCard from "@/components/subscription-card";

const page = () => {
  return (
    <>
      {/** Marketing hero*/}
      <section className="py-6 pb-8 pt-6 md:pb-10 md:pt-12 lg:py-32">
        <div className="container max-w-[64rem] flex flex-col items-center justify-center gap-5 text-center">
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            An Opensource solution for hassle-free order collection and
            management
          </h1>
          <p className="text-lg md:text-xl max-w-[48rem] text-foreground/60">
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
      {/** Features */}
      <section
        id="features"
        className="py-6 pb-8 pt-6 md:pb-10 md:pt-12 lg:py-32 bg-slate-50 dark:bg-transparent"
      >
        <div className="container flex items-center justify-center flex-col gap-5 text-center">
          <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Features
          </h1>
          <p className="text-lg md:text-xl max-w-[48rem] text-foreground/60">
            Enhance Your Selling Experience: Explore Innovative Features for
            Effortless Order Processing and Insightful Sales Management
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {marketingConfig.features.map((feature) => (
              <FeatureCard feature={feature} />
            ))}
          </div>
        </div>
      </section>
      {/** Pricing */}
      <section
        id="pricing"
        className="py-6 pb-8 pt-6 md:pb-10 md:pt-12 lg:py-32"
      >
        <div className="container flex items-center justify-center flex-col gap-5 text-center">
          <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Simple, Transparent Pricing
          </h1>
          <p className="text-lg md:text-xl max-w-[48rem] text-foreground/60">
            Experience Unrestricted Power with Our Pro Plan: Enjoy Comprehensive
            Access to All Features at a Single, Transparent Price.
          </p>
          <div className="w-full flex-col md:flex-row max-w-[64rem]  flex gap-6">
            {marketingConfig.plans.map((plan) => (
              <div className="flex-1">
                <SubscriptionCard plan={plan} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
