import { Icons } from "@/components/icons";
import { MarketingConfig } from "@/types";

export const marketingConfig: MarketingConfig = {
  mainNav: [
    {
      title: "Features",
      href: "/#features",
    },
    {
      title: "Pricing",
      href: "/#pricing",
    },
    {
      title: "Blog",
      href: "/blog",
      disabled: true,
    },
    {
      title: "Documentation",
      href: "/docs",
      disabled: true,
    },
  ],
  features: [
    {
      title: "Order Flow",
      description:
        "Streamlined order management with real-time updates and controls.",
      icon: Icons.shuffle,
    },
    {
      title: "Quick Access",
      description:
        "Effortlessly navigate through a simplified, intuitive user interface.",
      icon: Icons.fastForward,
    },
    {
      title: "Custom Forms",
      description:
        "Personalize order templates with custom fields and branding options.",
      icon: Icons.galleryVertical,
    },
    {
      title: "Stock Aware",
      description:
        "Automated inventory tracking with alerts for low stock levels.",
      icon: Icons.layers,
    },
    {
      title: "Secure Vault",
      description:
        "High-level security protocols for safe, cloud-based data storage.",
      icon: Icons.shieldCheck,
    },
    {
      title: "Smart Stats",
      description:
        "Advanced analytics for insightful sales trends and detailed reporting.",
      icon: Icons.lightbulb,
    },
  ],
  plans: [
    {
      title: "Free Tier",
      features: ["1 Admin", "3 Agents", "50 Orders/mo", "Basic Analytics"],
      price: 0,
      purchaseRoute: "/login",
    },
    {
      title: "Premium",
      features: [
        "Unlimited Admin",
        "Unlimited Agents",
        "Unlimited Orders/mo",
        "Advance insights ",
      ],
      price: 2499,
      purchaseRoute: "/login",
    },
  ],
};
