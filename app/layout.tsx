import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* 🔥 Navbar */}
        <nav
          style={{
            background: "#2d3436",
            padding: "10px",
            marginBottom: "20px",
          }}
        >
          <Link href="/" style={{ color: "white", marginRight: "15px" }}>
            Dashboard
          </Link>
          <Link href="/customers" style={{ color: "white", marginRight: "15px" }}>
            Customers
          </Link>
          <Link href="/products" style={{ color: "white", marginRight: "15px" }}>
            Products
          </Link>
          <Link href="/orders" style={{ color: "white" }}>
            Orders
          </Link>
        </nav>

        {/* 🔥 Content */}
        {children}
      </body>
    </html>
  );
}