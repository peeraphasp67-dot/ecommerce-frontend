import { getProducts } from "@/lib/api";

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Products</h1>

      <div className="bg-white shadow rounded-lg overflow-hidden border">
        <table className="w-full text-sm text-left">

          <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
            <tr>
              <th className="px-4 py-3">ID</th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Price</th>
            </tr>
          </thead>

          <tbody>
            {products.map((p: any) => (
              <tr key={p.id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-3 text-gray-800">{p.id}</td>
                <td className="px-4 py-3 text-gray-800">{p.name}</td>
                <td className="px-4 py-3 text-gray-800">{p.price}</td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}