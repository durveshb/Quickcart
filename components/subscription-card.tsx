import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SubscriptionPlan } from "@/types";
import { Icons } from "./icons";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

const SubscriptionCard = ({ plan }: { plan: SubscriptionPlan }) => {
  return (
    <Card className="p-2">
      <CardHeader>
        <div className="flex justify-between">
          <CardTitle className="font-heading text-3xl">{plan.title}</CardTitle>
          <h1 className="font-heading text-3xl">
            <span className="text-foreground/60 text-sm">Rs. </span>
            {` ${plan.price}`}
            <span className="text-foreground/60 text-sm">/an </span>
          </h1>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-8">
        <div className="grid grid-cols-2">
          {plan.features.map((feature) => (
            <div className="flex text-left items-center gap-2">
              <Icons.check size={15} />
              {feature}
            </div>
          ))}
        </div>
        <Link
          href={plan.purchaseRoute}
          className={cn(buttonVariants({ size: "lg" }))}
        >
          Get Started
        </Link>
      </CardContent>
    </Card>
  );
};

export default SubscriptionCard;
