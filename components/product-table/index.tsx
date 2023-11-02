import { columns } from "./columns";
import { DataTable } from "../data-table";
import { Product } from "@prisma/client";

export default async function ProductTable({
  products,
}: {
  products: Product[];
}) {
  return (
    <div className="flex h-full flex-1 flex-col space-y-8 p-8 min-h-0">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Products</h2>
          <p className="text-muted-foreground">
            Manage all the inventory at a single location
          </p>
        </div>
      </div>
      <DataTable data={products} columns={columns} />
    </div>
  );
}
