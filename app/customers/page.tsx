import { getCustomers } from "@/lib/api";

export default async function CustomersPage() {
  const customers = await getCustomers();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Customers</h1>

      {/* ✅ ทำ table ให้ขาว อ่านง่าย */}
      <div className="bg-white shadow rounded-lg overflow-hidden border">
        <table className="w-full text-sm text-left">

          {/* header */}
          <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
            <tr>
              <th className="px-4 py-3">ID</th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Email</th>
            </tr>
          </thead>

          {/* body */}
          <tbody>
            {customers.map((c: any) => (
              <tr
                key={c.id}
                className="border-t hover:bg-gray-50 transition"
              >
                <td className="px-4 py-3 text-gray-800">{c.id}</td>
                <td className="px-4 py-3 text-gray-800">{c.name}</td>
                <td className="px-4 py-3 text-gray-800">{c.email}</td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}