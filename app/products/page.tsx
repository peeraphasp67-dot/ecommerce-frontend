"use client";

import { useEffect, useState } from "react";
import { getProducts, createProduct } from "@/lib/api";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");

  const loadData = async () => {
    const data = await getProducts();
    setProducts(data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleAdd = async () => {
    if (!name || !price || !stock) return;

    await createProduct({
      name,
      price: Number(price),
      stock: Number(stock),
    });

    setName("");
    setPrice("");
    setStock("");
    loadData();
  };

  return (
    <div className="container">
      <h1>Products</h1>

      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        placeholder="Stock"
        value={stock}
        onChange={(e) => setStock(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>

      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>price</th>
            <th>stock</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p: any) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>{p.price}</td>
              <td>{p.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}