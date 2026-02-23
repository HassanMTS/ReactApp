import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Explore = () => {
  const [filterValue, setFilterValue] = useState("all devices");
  const products = [
    {
      id: 1,
      category: "smartphone",
      name: "Smartphone",
      image: "/images/buy.webp",
      price: "£699",
      desc: "Fast, modern smartphone ideal for daily use with advanced camera and long battery life.",
    },
    {
      id: 2,
      category: "laptop",
      name: "Laptop",
      image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=700&q=80",
      price: "£1099",
      desc: "A powerful and reliable laptop for work and school with fast processor and ample storage.",
    },
    {
      id: 3,
      category: "headphones",
      name: "Headphones",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=80",
      price: "£199",
      desc: "Premium wireless headphones with noise cancellation and excellent sound quality.",
    },
    {
      id: 4,
      category: "tablet",
      name: "Tablet",
      image:
        "https://images.unsplash.com/photo-1526045612519-1fc6e4662adf?auto=format&fit=crop&w=700&q=80",
      price: "£449",
      desc: "Lightweight tablet perfect for entertainment and productivity on the go.",
    },
    {
      id: 5,
      category: "smartwatch",
      name: "Smartwatch",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=80",
      price: "£299",
      desc: "Feature-rich smartwatch with fitness tracking and notification alerts.",
    },
    {
      id: 6,
      category: "console",
      name: "Gaming Console",
      image:
        "https://images.unsplash.com/photo-1578303512453-a87efb8fdc5f?auto=format&fit=crop&w=700&q=80",
      price: "£399",
      desc: "Latest gaming console for immersive gaming experience.",
    },
  ];
  const filteredProducts = products.filter((product) => {
    if (filterValue === "all devices") return true;
    return filterValue.toLowerCase().includes(product.category);
  });
  return (
    <>
      <Header />
      <div className="search-container">
        <input type="text" placeholder="Search for devices..." />
      </div>
      <div className="filter-bar">
        <button
          className={`filter-btn ${filterValue === "all devices" ? "active" : ""}`}
          onClick={() => setFilterValue("all devices")}
        >
          All Devices
        </button>
        <button
          className={`filter-btn ${filterValue === "smartphones" ? "active" : ""}`}
          onClick={() => setFilterValue("smartphones")}
        >
          Smartphones
        </button>
        <button
          className={`filter-btn ${filterValue === "laptops" ? "active" : ""}`}
          onClick={() => setFilterValue("laptops")}
        >
          Laptops
        </button>
        <button
          className={`filter-btn ${filterValue === "headphones" ? "active" : ""}`}
          onClick={() => setFilterValue("headphones")}
        >
          Headphones
        </button>
        <button
          className={`filter-btn ${filterValue === "tablets" ? "active" : ""}`}
          onClick={() => setFilterValue("tablets")}
        >
          Tablets
        </button>
      </div>
      <div className="container">
        <div
          className="product-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: "2rem",
            padding: "2rem 0",
          }}
        >
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.desc}</p>
              <div className="price">{product.price}</div>
              <button className="btn primary" style={{ width: "calc(100% - 2rem)", margin: "1rem" }}>
                Add to cart
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Explore;
