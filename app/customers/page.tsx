"use client";

import { useEffect, useState } from "react";
import { getCustomers, createCustomer } from "@/lib/api";

export default function Customers() {
  const [customers, setCustomers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const loadData = async () => {
    const data = await getCustomers();
    setCustomers(data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleAdd = async () => {
    if (!name || !email) return;

    await createCustomer({ name, email });
    setName("");
    setEmail("");
    loadData();
  };

  return (
    <div className="container">
      <h1>Customers</h1>

      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>

      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((c: any) => (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{c.name}</td>
              <td>{c.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}