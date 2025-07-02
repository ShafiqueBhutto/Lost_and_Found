import React, { useEffect, useState } from "react";
import "./AdminPanel.css";
import Swal from "sweetalert2";

export default function AdminPanel() {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const res = await fetch("/api/admin/items", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const data = await res.json();
    setItems(data);
  };

  const deleteItems = async (id) => {
    try {
      const confirm = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, delete it!",
      });

      if (confirm.isConfirmed) {
        const res = await fetch(`/api/admin/items/${id}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        if (!res.ok) throw new Error("Failed to delete");

        setItems((prev) => prev.filter((item) => item._id !== id));

        Swal.fire({
          icon: "success",
          title: "Deleted!",
          text: "Item has been successfully deleted.",
          timer: 2000,
          showConfirmButton: false,
        });
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to delete the item.",
      });
      console.error(err);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="admin-panel">
      <h2>Admin Panel - Manage Items</h2>
      <ul>
        {items.map((item) => (
          <li key={item._id}>
            <span className="item-name">{item.name}</span>
            <span className={`item-type ${item.type}`}>{item.type}</span>
            <button onClick={() => deleteItems(item._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
