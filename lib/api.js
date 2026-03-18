const BASE_URL = "https://ecommerce-api-olive.vercel.app/api";

// ---------- Customers ----------
export const getCustomers = async () => {
  const res = await fetch(`${BASE_URL}/customers`);
  if (!res.ok) return [];
  return res.json();
};

export const createCustomer = async (data) => {
  await fetch(`${BASE_URL}/customers`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
};

// ---------- Products ----------
export const getProducts = async () => {
  const res = await fetch(`${BASE_URL}/products`);
  if (!res.ok) return [];
  return res.json();
};

export const createProduct = async (data) => {
  await fetch(`${BASE_URL}/products`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
};

// ---------- Orders ----------
export const getOrders = async () => {
  const res = await fetch(`${BASE_URL}/orders`);
  if (!res.ok) return [];
  return res.json();
};

export const createOrder = async (data) => {
  await fetch(`${BASE_URL}/orders`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
};