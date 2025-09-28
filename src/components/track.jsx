import React from "react";
import { ShoppingCart } from "lucide-react";
import "./info.css";


//THis is a change
const ProductInfoCard = ({ product }) => {
  if (!product) {
    return null;
  }

  const { product_name, model, websites } = product;

  const lowestPrice =
    websites && websites.length
      ? Math.min(...websites.map((w) => w.price))
      : null;

  return (
    <div className="product-info-card">
      <div className="card-header">
        <h3>{product_name}</h3>
        <p className="model">Model: {model}</p>
      </div>

      <div className="card-body">
        {websites && websites.length > 0 ? (
          <div className="prices-section">
            <h4>Available Prices</h4>
            <ul>
              {websites.map((website, index) => (
                <li key={index} className="price-item">
                  <div className="price-info">
                    <span className="website-name">{website.name}</span>
                    <span
                      className={`price ${
                        website.price === lowestPrice ? "highlight" : ""
                      }`}
                    >
                      ₹{website.price.toLocaleString("en-IN")}
                    </span>
                  </div>
                  <a
                    href={website.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="visit-store-btn"
                  >
                    <ShoppingCart size={16} />
                    Visit
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="no-prices">No price information available</p>
        )}
      </div>
    </div>
  );
};

export default ProductInfoCard;
