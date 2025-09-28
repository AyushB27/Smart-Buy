import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./landing.css";

export default function Landing() {
  const navigate = useNavigate();
  const toLog= () => {
      navigate("/login");
  };
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [query, setQuery] = useState("");

  function handleSubscribe(e) {
    e.preventDefault();
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      return alert("Please enter a valid email");
    }
    setSubscribed(true);
  }

  return (
    <div className="landing">
      {/* Header */}
      <header className="header">
        <div className="logo">
          <div className="logo-box">SB</div>
          <div>
            <h1>SmartBuy</h1>
            <p>Personal shopping assistant</p>
          </div>
        </div>

        <nav className="nav">
          <a href="#features">Features</a>
          <a href="#how">How it works</a>
          <a href="#" onClick={toLog} className="btn-primary">Get Started</a>
        </nav>
      </header>

      {/* Hero */}
      <main className="hero">
        <section className="hero-left">
          <h2>
            Never overpay again.
            <span>Buy smarter with price tracking + comparisons.</span>
          </h2>
          <p>
            SmartBuy monitors prices across major e-commerce platforms, notifies
            you of drops, predicts the best time to buy and compares brands so
            you get the best value — effortlessly.
          </p>

          <div className="hero-forms">
            {/* Search */}
            <form onSubmit={(e) => e.preventDefault()} className="search-form">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search product or paste a link"
              />
              <button
                type="button"
                onClick={() => alert("Demo search: " + (query || "top deals"))}
              >
                Search
              </button>
            </form>

            {/* Subscribe */}
            <form onSubmit={handleSubscribe} className="subscribe-form">
              <input
                aria-label="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Get early access: your@email.com"
              />
              <button type="submit">
                {subscribed ? "Subscribed" : "Notify me"}
              </button>
            </form>
          </div>

          <div className="hero-highlights">
            <div>✓ Price alerts</div>
            <div>★ Smart recommendations</div>
            <div>⚖ Brand comparison</div>
          </div>
        </section>

        <section className="hero-right">
          <div className="product-card">
            <div className="product-header">
              <div>
                <div className="subtle">Tracking</div>
                <div className="product-name">Apple AirPods Pro (2nd Gen)</div>
              </div>
              <div className="price-box">
                <div className="subtle">Current</div>
                <div className="price">₹13,499</div>
              </div>
            </div>

            <div className="chart">Mini price chart (demo)</div>

            <div className="stats">
              <div>Lowest: ₹11,999</div>
              <div>Last 30 days: -18%</div>
              <div>Best time: Festive sales</div>
            </div>
          </div>

          <div className="compare-box">
            <div className="subtle">Compare</div>
            <div className="compare-items">
              <div>
                <div>Brand A</div>
                <div className="subtle">4.6 ★</div>
                <div className="price">₹12,999</div>
              </div>
              <div>
                <div>Brand B</div>
                <div className="subtle">4.4 ★</div>
                <div className="price">₹13,199</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Features */}
      <section id="features" className="section">
        <h3>Features</h3>
        <div className="grid-3">
          <FeatureCard
            title="Price tracking & alerts"
            desc="Track prices across stores and get notified the moment they drop."
            icon="⏰"
          />
          <FeatureCard
            title="Smart buy predictions"
            desc="AI-backed suggestions for the best time to purchase."
            icon="🔮"
          />
          <FeatureCard
            title="Brand & spec comparisons"
            desc="Side-by-side comparisons of specs, reviews and pricing."
            icon="⚖"
          />
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="section alt">
        <div className="grid-3">
          <StepCard step={1} title="Add a product" desc="Search or paste a product link from any store." />
          <StepCard step={2} title="We track prices" desc="SmartBuy monitors history, offers & coupons." />
          <StepCard step={3} title="Buy with confidence" desc="Get alerts when it’s the right time." />
        </div>
      </section>



      {/* Footer */}
      <footer className="footer">
        <div>© {new Date().getFullYear()} SmartBuy — made for smarter shopping</div>
        <div className="footer-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Contact</a>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ title, desc, icon }) {
  return (
    <div className="card">
      <div className="icon">{icon}</div>
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  );
}

function StepCard({ step, title, desc }) {
  return (
    <div className="step">
      <div className="step-number">{step}</div>
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  );
}

function PricingCard({ tier, price, perks = [], highlight }) {
  return (
    <div className={`pricing-card ${highlight ? "highlight" : ""}`}>
      <div className="tier">{tier}</div>
      <div className="price">{price}</div>
      <ul>
        {perks.map((p) => (
          <li key={p}>• {p}</li>
        ))}
      </ul>
      <button>{highlight ? "Choose Plus" : "Choose"}</button>
    </div>
  );
}

function Testimonial({ name, quote }) {
  return (
    <div className="testimonial">
      <p>“{quote}”</p>
      <div className="name">{name}</div>
    </div>
  );
}
