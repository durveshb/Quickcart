import React, { ReactNode } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Feature } from "@/types";

const FeatureCard = ({
  feature: { icon: Icon, title, description },
}: {
  feature: Feature;
}) => {
  return (
    <Card className="p-2">
      <CardHeader>
        <Icon size="2em" />
      </CardHeader>
      <CardContent className="space-y-3">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
