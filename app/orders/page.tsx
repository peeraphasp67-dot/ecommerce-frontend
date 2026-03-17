import { getOrders } from "@/lib/api";

export default async function OrdersPage() {
  const orders = await getOrders();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Orders</h1>

      <div className="bg-white shadow rounded-lg overflow-hidden border">
        <table className="w-full text-sm text-left">

          <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
            <tr>
              <th className="px-4 py-3">ID</th>
              <th className="px-4 py-3">Customer ID</th>
              <th className="px-4 py-3">Total</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((o: any) => (
              <tr key={o.id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-3 text-gray-800">{o.id}</td>
                <td className="px-4 py-3 text-gray-800">{o.customerId}</td>
                <td className="px-4 py-3 text-gray-800">{o.total}</td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}