import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ShoppingCart,
  Flame,
  Search,
  User,
  Settings,
  LogOut,
  Facebook,
  Twitter,
  Instagram,
  Smartphone,
  Shirt,
  Home,
  Gamepad,
  Heart,
  Book,
} from "lucide-react";
import "./Deals.css";

const Deals = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const toCompare = () => navigate("/list");

  // --- Hot Deals Data ---
  const hotDeals = [
    {
      name: "Samsung Galaxy S24 Ultra",
      price: 1299.99,
      image:
        "data:image/jpeg;base64,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",
    },
    {
      name: "Apple MacBook Air",
      price: 1099.0,
      image:
        "https://m.media-amazon.com/images/I/71jG+e7roXL._UF1000,1000_QL80_.jpg",
    },
    {
      name: "Sony WH-1000XM5",
      price: 349.99,
      image: "data:image/webp;base64,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",
    },

    {
      name: "Daikin 1.5 Ton AC",
      price: 42000.0,
      image: "data:image/jpeg;base64,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",
    },
  ];

  // --- Categories Data ---
  const categories = [
    { name: "Electronics", icon: <Smartphone size={20} /> },
    { name: "Fashion", icon: <Shirt size={20} /> },
    { name: "Home & Kitchen", icon: <Home size={20} /> },
    { name: "Gaming", icon: <Gamepad size={20} /> },
    { name: "Beauty", icon: <Heart size={20} /> },
    { name: "Books", icon: <Book size={20} /> },
  ];

  return (
    <div>
      {/* Navbar */}
      <nav>
        <div className="nav-left">
          <a className="brand">
            <ShoppingCart size={22} style={{ marginRight: "8px" }} />
            SmartBuy
          </a>
        </div>

        <div className="nav-center">
          <a onClick={toCompare} style={{ cursor: "pointer" }}>
            <ShoppingCart size={16} /> My List
          </a>
          <a href="#hot-deals">
            <Flame size={16} /> Hot Deals
          </a>
          <div className="search-box">
            <Search size={18} className="search-icon" />
            <input type="search" placeholder="Search products" />
          </div>
        </div>

        <div className="nav-right">
          <div className="profile" onClick={toggleDropdown}>
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              alt="profile"
              className="profile-pic"
            />
          </div>
          {dropdownOpen && (
            <div className="dropdown animated-dropdown">
              <button>
                <User size={16} /> Profile
              </button>
              <button>
                <Settings size={16} /> Settings
              </button>
              <button>
                <LogOut size={16} /> Log Out
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hot Deals Section */}
      <section className="hot-deals" id="hot-deals">
        <h2>
          <Flame size={24} style={{ color: "#ef4444" }} /> Hot Deals
        </h2>
        <div className="deals-grid">
          {hotDeals.map((deal, index) => (
            <div key={index} className="deal-card">
              <img src={deal.image} alt={deal.name} />
              <h3>{deal.name}</h3>
              <p>From Rs{deal.price.toLocaleString()}</p>
            </div>
          ))}
        </div>
        <div className="view-more-wrapper">
          <button className="view-more-btn" onClick={toCompare}>
            View More Deals
          </button>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories">
        <h2>🛒 Shop by Categories</h2>
        <div className="categories-grid">
          {categories.map((cat, index) => (
            <div key={index} className="category-card">
              {cat.icon} {cat.name}
            </div>
          ))}
        </div>
        <div className="view-more-wrapper">
          <button className="view-more-btn" onClick={toCompare}>
            View More Categories
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-content">
          <div>
            <h3>SmartBuy</h3>
            <p>Best deals, everyday.</p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li>About Us</li>
              <li>Contact</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div>
            <h4>Follow Us</h4>
            <div className="socials">
              <Facebook size={20} />
              <Twitter size={20} />
              <Instagram size={20} />
            </div>
          </div>
        </div>
        <p className="footer-bottom">© 2025 SmartBuy. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Deals;
