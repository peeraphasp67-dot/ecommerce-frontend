export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white border rounded-lg p-6 shadow">
          <p className="text-gray-500 text-sm">Customers</p>
          <h2 className="text-2xl font-bold">--</h2>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow">
          <p className="text-gray-500 text-sm">Products</p>
          <h2 className="text-2xl font-bold">--</h2>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow">
          <p className="text-gray-500 text-sm">Orders</p>
          <h2 className="text-2xl font-bold">--</h2>
        </div>
      </div>
    </div>
  );
}