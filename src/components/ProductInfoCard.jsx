import React from "react";
import productsData from "../data/products.json";
import "./Deals.css";

const ProductList = () => {
  return (
    <section className="products">
      <h2>📊 Price Comparison</h2>
      <div className="product-grid">
        {productsData.products.map((product, index) => {
          const cheapest = product.websites.reduce((min, site) =>
            site.price < min.price ? site : min
          );

          return (
            <div key={index} className="product-card">
              <div className="product-header">
                <h3 className="product-name">{product.product_name}</h3>
                <span className="product-type">{product.product_type}</span>
              </div>
              <p className="product-model">Model: {product.model}</p>

              <div className="comparison-grid">
                {product.websites.map((site, i) => (
                  <div
                    key={i}
                    className={`comparison-cell ${
                      site.price === cheapest.price ? "best-price" : ""
                    }`}
                  >
                    <a
                      href={site.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="site-link"
                    >
                      {site.name}
                    </a>
                    <p className="site-price">${site.price.toLocaleString()}</p>
                  </div>
                ))}
              </div>

              <div className="best-deal-banner">
                🔥 Best Deal: {cheapest.name} at $
                {cheapest.price.toLocaleString()}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProductList;
