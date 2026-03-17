const BASE_URL = "https://ecommerce-api-olive.vercel.app/api";

export async function getCustomers() {
  const res = await fetch(`${BASE_URL}/customers`, { cache: "no-store" });
  if (!res.ok) throw new Error("error");
  return res.json();
}

export async function getProducts() {
  const res = await fetch(`${BASE_URL}/products`, { cache: "no-store" });
  return res.json();
}

export async function getOrders() {
  const res = await fetch(`${BASE_URL}/orders`, { cache: "no-store" });
  return res.json();
}