import { Icon } from "@/components/icons";

export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

export type Feature = {
  icon: Icon;
  title: string;
  description: string;
};

export type SubscriptionPlan = {
  title: string;
  features: string[];
  price: number;
  purchaseRoute: string;
};

export type MainNavItem = NavItem;

export type MarketingConfig = {
  mainNav: MainNavItem[];
  features: Feature[];
  plans: SubscriptionPlan[];
};

export type SiteConfig = {
  name: string;
  description: string;
  links: {
    github: string;
  };
};
