import prisma from "@/prisma/client";
import { faker } from "@faker-js/faker";
import { $Enums, Product } from "@prisma/client";
import { NextResponse } from "next/server";

export const GET = async () => {
  const products: Omit<Product, "id">[] = new Array(100).fill(0).map(() => {
    const category = faker.helpers.arrayElement(Object.values($Enums.Category));
    const fragrance = faker.helpers.arrayElement(
      Object.values($Enums.Fragrance)
    );
    const packaging = faker.helpers.arrayElement(
      Object.values($Enums.Packaging)
    );
    const weight = faker.helpers.arrayElement(Object.values($Enums.Weight));

    return {
      code: [
        category,
        fragrance,
        packaging,
        weight,
        faker.datatype.number({ min: 1, max: 100 }),
      ].join("_"),
      name: [
        category,
        fragrance,
        packaging,
        weight,
        faker.datatype.number({ min: 1, max: 100 }),
      ].join(" "),
      category,
      fragrance,
      packaging,
      weight,
      price: faker.commerce.price({
        min: 50,
        max: 500,
      }),
    };
  });

  const newProducts = await prisma.product.createMany({
    data: products,
  });

  return NextResponse.json(newProducts, { status: 201 });
};
