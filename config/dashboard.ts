import { DashboardConfig } from "@/types";

export const dashboardConfig: DashboardConfig = {
  mainNav: [
    {
      title: "Invoices",
      href: "/dashboard/invoices",
      disabled: true,
    },
    {
      title: "Customers",
      href: "/dashboard/customers",
      disabled: true,
    },
    {
      title: "Products",
      href: "/dashboard/products",
    },
  ],
};
