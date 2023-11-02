import { Metadata } from "next";

import prisma from "@/prisma/client";
import React from "react";
import ProductTable from "@/components/product-table";

export const metadata: Metadata = {
  title: "Products",
  description: "A comprehensive list of all your brand product",
};

const page = async () => {
  const products = await prisma.product.findMany();

  return <ProductTable products={products} />;
};

export default page;
