"use client";

import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <html>
      {/* ✅ เปลี่ยนพื้นหลังเป็นขาว + ตัวหนังสือดำ */}
      <body className="bg-white text-black">

        {/* ✅ Navbar */}
        <nav className="border-b border-gray-300">
          <div className="max-w-6xl mx-auto px-6 py-4 flex gap-6 font-medium">

            {/* ❌ เอา NETSHOP / Dashboard logo ออกแล้ว */}

            <Link
              href="/"
              className={pathname === "/" ? "text-blue-600" : "text-gray-600"}
            >
              Dashboard
            </Link>

            <Link
              href="/customers"
              className={pathname === "/customers" ? "text-blue-600" : "text-gray-600"}
            >
              Customers
            </Link>

            <Link
              href="/products"
              className={pathname === "/products" ? "text-blue-600" : "text-gray-600"}
            >
              Products
            </Link>

            <Link
              href="/orders"
              className={pathname === "/orders" ? "text-blue-600" : "text-gray-600"}
            >
              Orders
            </Link>

          </div>
        </nav>

        {/* ✅ Container ครอบทุกหน้า */}
        <main className="max-w-6xl mx-auto px-6 py-6">
          {children}
        </main>

      </body>
    </html>
  );
}