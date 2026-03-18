"use client";

import { useEffect, useState } from "react";
import { getOrders, createOrder } from "@/lib/api";

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const [customerId, setCustomerId] = useState("");
  const [productId, setProductId] = useState("");
  const [quantity, setQuantity] = useState("");

  const loadData = async () => {
    const data = await getOrders();
    setOrders(data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleAdd = async () => {
    if (!customerId || !productId || !quantity) return;

    await createOrder({
      customer_id: Number(customerId),
      product_id: Number(productId),
      quantity: Number(quantity),
    });

    setCustomerId("");
    setProductId("");
    setQuantity("");
    loadData();
  };

  return (
    <div className="container">
      <h1>Orders</h1>

      <input
        placeholder="Customer ID"
        value={customerId}
        onChange={(e) => setCustomerId(e.target.value)}
      />
      <input
        placeholder="Product ID"
        value={productId}
        onChange={(e) => setProductId(e.target.value)}
      />
      <input
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>

      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>customer_id</th>
            <th>product_id</th>
            <th>quantity</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((o: any) => (
            <tr key={o.id}>
              <td>{o.id}</td>
              <td>{o.customer_id}</td>
              <td>{o.product_id}</td>
              <td>{o.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}